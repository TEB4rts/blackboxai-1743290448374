import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MiningDashboard = () => {
    const [miningActive, setMiningActive] = useState(false);
    const [hashRate, setHashRate] = useState(0);
    const [totalMinedXMR, setTotalMinedXMR] = useState(0);
    const [error, setError] = useState('');

    const fetchStats = async () => {
        try {
            const response = await axios.get('/api/stats');
            setHashRate(response.data.hashRate);
            setTotalMinedXMR(response.data.totalMinedXMR);
        } catch (err) {
            setError('Error fetching stats');
        }
    };

    const startMining = async () => {
        setMiningActive(true);
        // Logic to start the miner (e.g., call a backend endpoint)
    };

    const stopMining = async () => {
        setMiningActive(false);
        // Logic to stop the miner (e.g., call a backend endpoint)
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (miningActive) {
                fetchStats();
            }
        }, 5000); // Fetch stats every 5 seconds

        return () => clearInterval(interval);
    }, [miningActive]);

    return (
        <div>
            <h1>Mining Dashboard</h1>
            <p>Hash Rate: {hashRate} H/s</p>
            <p>Total Mined XMR: {totalMinedXMR} XMR</p>
            <button onClick={startMining} disabled={miningActive}>Start Mining</button>
            <button onClick={stopMining} disabled={!miningActive}>Stop Mining</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default MiningDashboard;