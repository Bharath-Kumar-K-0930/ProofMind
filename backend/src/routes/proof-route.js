const express = require('express');
const router = express.Router();

const { storeProof } = require('../services/ogcc-service');

router.post('/', async (req, res) => {
    const { hash } = req.body;
    if (!hash) {
        return res.status(400).json({ error: "Hash is required" });
    }
    try {
        const result = await storeProof(hash);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', (req, res) => {
    res.json({ message: 'Proof route' });
});

module.exports = router;
