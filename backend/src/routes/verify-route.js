const express = require('express');
const router = express.Router();
const { createHash } = require('../services/hash-service');
const canonicalize = require('../utils/canonicalize');
const { checkProof } = require('../services/proof-service');

router.post('/', async (req, res) => {
    const { metadata, hash } = req.body;

    if (!metadata || !hash) {
        return res.status(400).json({ error: "Metadata and Hash are required for verification" });
    }

    try {
        // 1. Canonicalize the output in metadata
        const canonOutput = canonicalize(metadata.output);
        const normalizedMetadata = { ...metadata, output: canonOutput };

        // 2. Recompute hash
        const computedHash = createHash(normalizedMetadata);

        // 3. Compare hashes
        if (computedHash !== hash) {
            return res.json({ verified: false, reason: "Hash mismatch (Content modified)" });
        }

        // 4. Check 0G CC
        const existsOnChain = await checkProof(hash);

        if (existsOnChain) {
            res.json({ verified: true, message: "Content verified via 0G CC" });
        } else {
            res.json({ verified: false, reason: "Proof not found on 0G CC (Local hash valid but not anchored)" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
