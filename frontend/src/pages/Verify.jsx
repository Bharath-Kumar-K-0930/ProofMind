import React, { useState } from 'react';
import { verifyContent } from '../api';

const Verify = () => {
    const [proofJson, setProofJson] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        try {
            const data = JSON.parse(proofJson);
            const result = await verifyContent({
                metadata: data.metadata,
                hash: data.hash
            });
            setStatus(result);
        } catch (error) {
            setStatus({ verified: false, reason: "Invalid JSON format or network error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <h2>Verify AI Authenticity</h2>
            <form onSubmit={handleVerify}>
                <div className="input-group">
                    <label>Paste Proof JSON</label>
                    <textarea
                        rows="8"
                        value={proofJson}
                        onChange={(e) => setProofJson(e.target.value)}
                        placeholder='Paste the JSON proof generated in the previous step...'
                    ></textarea>
                </div>
                <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Checking 0G Storage...' : 'Verify Content Authenticity'}
                </button>
            </form>

            {status && (
                <div className="output-container">
                    <div className={`card ${status.verified ? 'badge-success' : 'badge-error'}`} style={{ textAlign: 'center' }}>
                        <h3 style={{ margin: 0 }}>
                            {status.verified ? '✅ VERIFIED AUTHENTIC' : '❌ VERIFICATION FAILED'}
                        </h3>
                        {!status.verified && <p style={{ marginTop: '0.5rem' }}>Reason: {status.reason}</p>}
                        {status.verified && <p style={{ marginTop: '0.5rem' }}>{status.message}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Verify;
