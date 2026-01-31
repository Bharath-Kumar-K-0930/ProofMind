import React, { useEffect } from 'react';

const DetailsModal = ({ onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-panel border border-white/10 rounded-[24px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(116,240,237,0.1)] animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="sticky top-0 bg-panel/95 backdrop-blur z-10 border-b border-white/10 p-6 flex justify-between items-center">
                    <h2 className="text-3xl font-black uppercase text-primary tracking-tight">Project Details</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-12">

                    {/* Small Explanation (TL;DR) */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-primary/20">
                        <h3 className="text-xl font-bold text-white mb-3">💡 Simplified Explanation</h3>
                        <p className="text-lg leading-relaxed opacity-90">
                            Think of **ProofMind** as a <span className="text-primary font-bold">digital notary for AI</span>. When our AI writes something for you, we create a digital "fingerprint" (hash) of that text and lock it in a secure, unbreakable vault (the 0G Blockchain). Later, anyone can check that vault to prove the text hasn't been changed. It's authentic content, guaranteed.
                        </p>
                    </div>

                    {/* About & Problem */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-secondary font-black uppercase tracking-wider mb-4 flex items-center gap-2">
                                <span className="text-2xl">⚠️</span> The Problem
                            </h3>
                            <p className="opacity-80 leading-relaxed">
                                We live in an age of **AI hallucinations and Deepfakes**. It's becoming impossible to distinguish between authentic information and manipulated content. There is no standard "paper trail" for AI-generated text, making it a "Black Box" of uncertainty.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-primary font-black uppercase tracking-wider mb-4 flex items-center gap-2">
                                <span className="text-2xl">🛡️</span> The Solution
                            </h3>
                            <p className="opacity-80 leading-relaxed">
                                ProofMind bridges the gap by **anchoring AI outputs to the blockchain**. By storing a cryptographic proof of the generation event, we ensure that the content is immutable, traceable, and verifiable by anyone, anywhere.
                            </p>
                        </div>
                    </div>

                    {/* How it Works & 0G Tech */}
                    <div className="space-y-6">
                        <h3 className="text-white font-black uppercase tracking-wider text-xl border-l-4 border-primary pl-4">Technology & 0G Integration</h3>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-white/90">How it Works</h4>
                                <ol className="list-decimal list-inside space-y-2 opacity-80 marker:text-primary">
                                    <li>User enters a prompt.</li>
                                    <li>AI generates a response.</li>
                                    <li>System creates a <strong>SHA-256 hash</strong> of the response + metadata.</li>
                                    <li>This hash is sent to the <strong>0G Storage Network</strong>.</li>
                                    <li>The network returns a receipt (Transaction Hash).</li>
                                </ol>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-white/90">Under the Hood: 0G cc</h4>
                                <p className="opacity-80 leading-relaxed">
                                    We utilize the <code className="bg-black/30 px-2 py-1 rounded text-primary text-sm">@0gfoundation/0g-cc</code> library to interact effectively with the <strong>ZeroGravity (0G) Modular Blockchain</strong>. 0G serves as our distinct Data Availability (DA) layer, ensuring that our proofs are stored permanently and retrieved instantly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Target Audience & Why */}
                    <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
                        <div>
                            <h3 className="text-white font-bold mb-3">🎯 Who Needs This?</h3>
                            <ul className="space-y-2 opacity-80">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Journalists & News Agencies</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Legal Professionals</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Academic Researchers</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Developers building trusted AI apps</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-3">🚀 Why ProofMind?</h3>
                            <p className="opacity-80 leading-relaxed">
                                Because <strong>Trust is the new currency</strong>. As AI becomes ubiquitous, the ability to <i>prove</i> the origin and integrity of digital content will not just be a feature—it will be a requirement.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsModal;
