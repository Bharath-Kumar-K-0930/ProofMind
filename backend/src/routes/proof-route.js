const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    res.json({ message: 'Proof route' });
});

module.exports = router;
