import React from 'react';

const Home = ({ onStart }) => {
    return (
        <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AI Content <span style={{ color: 'var(--primary)' }}>Empowered</span> by 0G</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2.5rem' }}>
                Generate, hash, and anchor your AI output on the 0G Network for immutable verification.
            </p>
            <button className="btn-primary" style={{ width: 'auto', padding: '1rem 3rem' }} onClick={onStart}>
                Start Generating Proofs
            </button>
        </div>
    );
};

export default Home;
