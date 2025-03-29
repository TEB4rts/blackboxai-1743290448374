const express = require('express');
const router = express.Router();
const payoutService = require('../services/payoutService');

// POST endpoint to initiate a payout
router.post('/', async (req, res) => {
    try {
        const { amount } = req.body; // Expecting amount to payout
        const result = await payoutService.sendBTC(amount);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error during payout', error: error.message });
    }
});

module.exports = router;