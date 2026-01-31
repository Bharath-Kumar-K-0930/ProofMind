import React from 'react';

const Home = ({ onStart }) => {
    return (
        <div className="card" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
            <h1 style={{ fontSize: '5rem', marginBottom: '0.5rem' }}>AI Content</h1>
            <h1 style={{
                fontSize: '5rem',
                webkitTextStroke: '2px var(--text)',
                color: 'transparent',
                marginBottom: '1rem'
            }}>Has to be Proven</h1>
            <p style={{ fontSize: '1.4rem', opacity: 0.8, marginBottom: '3rem', fontWeight: 600 }}>
                Powered by <span style={{ color: 'var(--primary)' }}>0G Network</span>
            </p>
            <button className="btn-primary" onClick={onStart}>
                Let's start now!
            </button>
        </div>
    );
};

export default Home;
