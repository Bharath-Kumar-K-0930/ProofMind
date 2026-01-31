const { createHash } = require('./hash.service');
const { storeProof, verifyProof } = require('./ogcc.service');

/**
 * Orchestrates the creation of a proof on 0G CC.
 * Creates a hash of the metadata and stores it.
 * 
 * @param {object} metadata - The AI metadata to prove.
 * @returns {Promise<string>} - The generated hash.
 */
async function createProof(metadata) {
    const hash = createHash(metadata);
    await storeProof(hash);
    return hash;
}

/**
 * Validates if a hash exists on the 0G CC network.
 * 
 * @param {string} hash - The hash to verify.
 * @returns {Promise<boolean>} - True if valid.
 */
async function checkProof(hash) {
    const result = await verifyProof(hash);
    return !!result;
}

module.exports = { createProof, checkProof };
