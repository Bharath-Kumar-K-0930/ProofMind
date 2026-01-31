import React, { useState } from 'react';
import { generateContent } from '../api';

const Generate = () => {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!prompt) return;
        setLoading(true);
        try {
            const data = await generateContent(prompt);
            setResult(data);
        } catch (error) {
            alert("Error generating content: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <h2>Generate Verifiable AI Output</h2>
            <form onSubmit={handleGenerate}>
                <div className="input-group">
                    <label>Enter Prompt</label>
                    <textarea
                        rows="4"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., Write a short summary of the 0G Network..."
                    ></textarea>
                </div>
                <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Generating & Proofing...' : 'Generate AI Content'}
                </button>
            </form>

            {result && (
                <div className="output-container">
                    <h3>AI Output</h3>
                    <div className="card" style={{ background: '#0d1117', marginBottom: '1.5rem' }}>
                        {result.output}
                    </div>

                    <h3>Cryptographic Proof (Anchored to 0G)</h3>
                    <div className="proof-details">
                        <div><strong>Hash:</strong> {result.hash}</div>
                        <div><strong>Model:</strong> {result.metadata.model}</div>
                        <div><strong>Timestamp:</strong> {new Date(result.metadata.timestamp).toLocaleString()}</div>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                        <button className="btn-primary" onClick={() => {
                            navigator.clipboard.writeText(JSON.stringify(result));
                            alert("Proof metadata copied to clipboard!");
                        }}>
                            Copy Full Proof for Verification
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Generate;
