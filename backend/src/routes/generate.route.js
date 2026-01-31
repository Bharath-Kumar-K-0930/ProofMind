const express = require('express');
const router = express.Router();
const { generateAIResponse } = require('../services/ai.service');
const canonicalize = require('../utils/canonicalize');
const { createProof } = require('../services/proof.service');

router.post('/', async (req, res) => {
    const { prompt, model = 'gpt-3.5-turbo' } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const aiOutput = await generateAIResponse(prompt);
        const canonOutput = canonicalize(aiOutput);

        const metadata = {
            prompt,
            output: canonOutput,
            model,
            timestamp: Date.now()
        };

        const hash = await createProof(metadata);

        res.json({
            output: aiOutput,
            hash,
            metadata
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
