const transactions = []; // In-memory storage for transactions (replace with a database in production)

// Function to get all transactions
const getTransactions = () => {
    return transactions;
};

// Function to log a new transaction (to be called from conversion and payout services)
const logTransaction = (transaction) => {
    transactions.push(transaction);
};

module.exports = {
    getTransactions,
    logTransaction,
};