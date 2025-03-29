const express = require('express');
const router = express.Router();
const conversionService = require('../services/conversionService');

// POST endpoint to trigger XMR to BTC conversion
router.post('/', async (req, res) => {
    try {
        const { amount } = req.body; // Expecting amount to convert
        const result = await conversionService.convertXMRtoBTC(amount);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error during conversion', error: error.message });
    }
});

module.exports = router;