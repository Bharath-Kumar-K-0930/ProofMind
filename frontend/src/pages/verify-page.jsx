import React, { useState } from 'react';
import { verifyContent } from '../api';

const VerifyPage = () => {
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
            <h2 className="mb-8 text-3xl">Verify AI <span className="text-secondary">Authenticity</span></h2>
            <form onSubmit={handleVerify}>
                <div className="mb-8">
                    <label className="block mb-3 text-white text-xs font-extrabold uppercase tracking-wider">Paste Proof JSON</label>
                    <textarea
                        rows="8"
                        className="input-field"
                        value={proofJson}
                        onChange={(e) => setProofJson(e.target.value)}
                        placeholder='Paste the JSON proof generated in the previous step...'
                    ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full" disabled={loading}>
                    {loading ? 'Checking 0G Storage...' : 'Verify Content Authenticity'}
                </button>
            </form>

            {status && (
                <div className="mt-12 animate-[slideUp_0.6s_ease-out]">
                    <div className={`card ${status.verified ? 'badge-success' : 'badge-error'} text-center py-8`} style={{ background: status.verified ? 'rgba(116, 240, 237, 0.1)' : 'rgba(234, 68, 90, 0.1)' }}>
                        <h3 className="m-0 text-2xl">
                            {status.verified ? '✅ VERIFIED AUTHENTIC' : '❌ VERIFICATION FAILED'}
                        </h3>
                        {!status.verified && <p className="mt-4 opacity-80">{status.reason}</p>}
                        {status.verified && <p className="mt-4 opacity-80">{status.message}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default VerifyPage;
