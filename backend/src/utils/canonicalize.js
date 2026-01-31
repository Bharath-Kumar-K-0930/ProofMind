/**
 * Normalizes text to ensure consistent hashing.
 * Trims whitespace and replaces multiple spaces/newlines with a single space.
 * 
 * @param {string} text - The AI generated output to normalize.
 * @returns {string} - The canonicalized text.
 */
function canonicalize(text) {
    if (typeof text !== 'string') return '';
    return text.trim().replace(/\s+/g, " ");
}

module.exports = canonicalize;
