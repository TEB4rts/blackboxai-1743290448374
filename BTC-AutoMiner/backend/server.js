require('dotenv').config();
const express = require('express');
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Import routes
const statsRoutes = require('./routes/stats');
const conversionRoutes = require('./routes/conversion');
const payoutRoutes = require('./routes/payout');
const transactionRoutes = require('./routes/transaction');

// Mount routes
app.use('/api/stats', statsRoutes);
app.use('/api/conversion', conversionRoutes);
app.use('/api/payout', payoutRoutes);
app.use('/api/transactions', transactionRoutes);

// Error handling middleware
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});