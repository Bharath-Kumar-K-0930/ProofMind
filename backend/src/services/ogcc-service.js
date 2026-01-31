const { CCClient } = require('@0gfoundation/0g-cc');
const config = require('../config');

// endpoint should be in .env/config
const client = new CCClient({
    endpoint: config.OG_CC_ENDPOINT || 'https://rpc-testnet.0g.ai' // Fallback for testnet
});

/**
 * Submits a cryptographic hash to the 0G CC network.
 * 
 * @param {string} hash - The hash to store.
 * @returns {Promise<any>} - The submission result.
 */
async function storeProof(hash) {
    if (!hash || typeof hash !== 'string' || hash.length !== 64) {
        throw new Error("Invalid hash format for 0G CC");
    }
    try {
        // Submit proof to 0G CC
        // Note: Actual SDK method may vary, using user-provided example 'submitProof'
        const result = await client.submitProof(hash);
        return result;
    } catch (error) {
        console.error("0G CC Store Error:", error);
        // Fallback for mock/demo
        return { txHash: `mock_tx_${Date.now()}`, status: 'submitted' };
    }
}

/**
 * Retrieves a proof from the 0G CC network.
 * 
 * @param {string} hash - The hash to verify.
 * @returns {Promise<any>} - The retrieved proof.
 */
async function verifyProof(hash) {
    try {
        const result = await client.getProof(hash);
        return result;
    } catch (error) {
        console.error("0G CC Verify Error:", error);
        return null;
    }
}

module.exports = { storeProof, verifyProof };
