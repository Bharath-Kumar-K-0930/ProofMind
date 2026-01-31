import React from 'react';

const Home = ({ onStart }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {/* HERO SECTION */}
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

            {/* ABOUT SECTION */}
            <div className="card" style={{ background: 'transparent', border: 'none', padding: '2rem 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>About <span style={{ color: 'var(--secondary)' }}>ProofMind</span></h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: '1.6' }}>
                            In an era of deepfakes and AI hallucinations, <strong>ProofMind</strong> acts as a decentralized notary for machine intelligence.
                            We bridge the gap between AI generation and absolute trust by anchoring AI fingerprints directly into the consensus layer.
                        </p>
                    </div>
                    <div style={{
                        padding: '2rem',
                        background: 'var(--glass)',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>The Use Case</h3>
                        <p style={{ opacity: 0.9 }}>
                            Eliminate the "Black Box" problem. Whether it's legal summaries, medical advice, or creative assets, ProofMind ensures that what you see is exactly what the AI generated, verified by decentralized consensus.
                        </p>
                    </div>
                </div>
            </div>

            {/* HOW IT WORKS SECTION */}
            <div className="card" style={{ padding: '4rem 2rem' }}>
                <h2 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '4rem' }}>How it <span style={{ webkitTextStroke: '1.5px var(--text)', color: 'transparent' }}>Works</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                    <div className="step-card">
                        <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>01</div>
                        <h3 style={{ marginBottom: '1rem' }}>Generate</h3>
                        <p style={{ opacity: 0.7 }}>Prompt our high-performance AI engine to create verifiable content.</p>
                    </div>
                    <div className="step-card">
                        <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--secondary)', marginBottom: '1rem' }}>02</div>
                        <h3 style={{ marginBottom: '1rem' }}>Anchor</h3>
                        <p style={{ opacity: 0.7 }}>We create a SHA-256 fingerprint and secure it on the 0G CC network instantly.</p>
                    </div>
                    <div className="step-card">
                        <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem' }}>03</div>
                        <h3 style={{ marginBottom: '1rem' }}>Verify</h3>
                        <p style={{ opacity: 0.7 }}>Anyone with the proof JSON can validate the content's integrity against the decentralized audit trail.</p>
                    </div>
                </div>
            </div>

            <style>{`
                .step-card {
                    padding: 2rem;
                    background: rgba(255,255,255,0.03);
                    border-radius: 20px;
                    transition: transform 0.3s;
                }
                .step-card:hover {
                    transform: translateY(-10px);
                    background: rgba(255,255,255,0.05);
                }
            `}</style>
        </div>
    );
};

export default Home;
