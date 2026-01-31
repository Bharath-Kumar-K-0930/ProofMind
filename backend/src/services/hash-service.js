const crypto = require('crypto');

/**
 * Creates a SHA-256 hash of the provided data.
 * Converts objects to JSON strings for consistent hashing.
 * 
 * @param {any} data - The data to hash.
 * @returns {string} - The hex-encoded hash.
 */
function createHash(data) {
    const stringData = typeof data === 'string' ? data : JSON.stringify(data);
    return crypto
        .createHash('sha256')
        .update(stringData)
        .digest('hex');
}

module.exports = { createHash };
