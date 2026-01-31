// Safe import pattern
let client = null;

try {
    const pkg = require('@0gfoundation/0g-cc');
    // Check if CCClient exists, otherwise log available exports
    if (pkg.CCClient) {
        const { CCClient } = pkg;
        const config = require('../config');
        client = new CCClient({
            endpoint: config.OG_CC_ENDPOINT || 'https://rpc-testnet.0g.ai'
        });
    } else {
        console.warn("WARN: CCClient not found in @0gfoundation/0g-cc exports:", Object.keys(pkg));
        // Fallback or attempt to use 0g-ts-sdk if available?
    }
} catch (error) {
    console.warn("WARN: Failed to initialize 0G CC Client. Using mock fallback.", error.message);
}

// Mock Client for stability if real one fails
const mockClient = {
    submitProof: async (hash) => ({ txHash: `mock_0g_${Date.now()}_${hash.substring(0, 8)}`, status: 'stored-mock' }),
    getProof: async (hash) => ({ hash, timestamp: Date.now(), verified: true, mock: true })
};

const activeClient = client || mockClient;

/**
 * Submits a cryptographic hash to the 0G CC network.
 */
async function storeProof(hash) {
    if (!hash || typeof hash !== 'string' || hash.length !== 64) {
        throw new Error("Invalid hash format for 0G CC");
    }
    try {
        const result = await activeClient.submitProof(hash);
        console.log(`[0G] Proof stored: ${JSON.stringify(result)}`);
        return result;
    } catch (error) {
        console.error("0G CC Store Error:", error);
        return mockClient.submitProof(hash);
    }
}

/**
 * Retrieves a proof from the 0G CC network.
 */
async function verifyProof(hash) {
    try {
        return await activeClient.getProof(hash);
    } catch (error) {
        console.error("0G CC Verify Error:", error);
        return null;
    }
}

module.exports = { storeProof, verifyProof };
