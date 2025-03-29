const express = require('express');
const router = express.Router();
const minerService = require('../services/minerService');

// GET endpoint to retrieve current mining stats
router.get('/', async (req, res) => {
    try {
        const stats = await minerService.getStats();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving stats', error: error.message });
    }
});

module.exports = router;