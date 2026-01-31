import { generateContent } from '../api';
import Toast from '../components/Toast';

const GeneratePage = () => {
    // Initialize state from localStorage if available
    const [prompt, setPrompt] = useState(() => localStorage.getItem('pm_prompt') || '');
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);
    const [result, setResult] = useState(() => {
        const saved = localStorage.getItem('pm_result');
        return saved ? JSON.parse(saved) : null;
    });

    const showToast = (message, type = 'info') => {
        setToast({ message, type });
    };

    // Save to localStorage whenever they change
    React.useEffect(() => {
        localStorage.setItem('pm_prompt', prompt);
    }, [prompt]);

    React.useEffect(() => {
        if (result) {
            localStorage.setItem('pm_result', JSON.stringify(result));
        }
    }, [result]);

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!prompt) return;
        setLoading(true);
        // Clear previous result from visual state immediately, but keep in storage until new one arrives if desired.
        // Actually best to clear old result to show we are regenerating
        setResult(null);

        try {
            const data = await generateContent(prompt);
            setResult(data);
            showToast("Content generated and proof anchored!", "success");
        } catch (error) {
            showToast(error.message, 'error');
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
                    <div className="proof-details bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 mb-4 items-center border-b border-white/5 pb-4 last:border-0 last:pb-0 last:mb-0">
                            <strong className="text-secondary uppercase tracking-wider text-sm">Hash</strong>
                            <span className="break-all font-mono text-xs md:text-sm bg-black/30 p-2 rounded text-primary">{result.hash}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 mb-4 items-center border-b border-white/5 pb-4 last:border-0 last:pb-0 last:mb-0">
                            <strong className="text-secondary uppercase tracking-wider text-sm">Model</strong>
                            <span className="text-white/90">{result.metadata.model}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-center">
                            <strong className="text-secondary uppercase tracking-wider text-sm">Timestamp</strong>
                            <span className="text-white/90">{new Date(result.metadata.timestamp).toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button className="btn-primary w-full" onClick={() => {
                            navigator.clipboard.writeText(JSON.stringify(result));
                            showToast("Proof metadata copied to clipboard!", "success");
                        }}>
                            Copy Full Proof for Verification
                        </button>
                    </div>
                </div>
            )}
            {/* Render Toast */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
};

export default GeneratePage;
