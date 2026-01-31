import React, { useState } from 'react';
import { generateContent } from '../api';

const GeneratePage = () => {
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
            <h2 className="mb-8 text-3xl">Generate Verifiable <span className="text-primary">Output</span></h2>
            <form onSubmit={handleGenerate}>
                <div className="mb-8">
                    <label className="block mb-3 text-white text-xs font-extrabold uppercase tracking-wider">Enter Prompt</label>
                    <textarea
                        rows="4"
                        className="input-field"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., Write a short summary of the 0G Network..."
                    ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full" disabled={loading}>
                    {loading ? 'Generating & Proofing...' : 'Generate AI Content'}
                </button>
            </form>

            {result && (
                <div className="mt-12 animate-[slideUp_0.6s_ease-out]">
                    <h3 className="text-xl mb-4">AI Output</h3>
                    <div className="card bg-[#0d1117] mb-6 p-8">
                        {result.output}
                    </div>

                    <h3 className="text-xl mb-4 font-black uppercase tracking-tight">Cryptographic Proof (Anchored to 0G)</h3>
                    <div className="proof-details">
                        <div className="mb-4">
                            <strong>Hash</strong>
                            <span className="break-all">{result.hash}</span>
                        </div>
                        <div className="mb-4">
                            <strong>Model</strong>
                            {result.metadata.model}
                        </div>
                        <div>
                            <strong>Timestamp</strong>
                            {new Date(result.metadata.timestamp).toLocaleString()}
                        </div>
                    </div>

                    <div className="mt-8">
                        <button className="btn-primary w-full" onClick={() => {
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

export default GeneratePage;
