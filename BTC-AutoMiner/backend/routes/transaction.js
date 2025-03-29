const express = require('express');
const router = express.Router();
const transactionService = require('../services/transactionService');

// GET endpoint to retrieve transaction history
router.get('/', async (req, res) => {
    try {
        const transactions = await transactionService.getTransactions();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving transactions', error: error.message });
    }
});

module.exports = router;