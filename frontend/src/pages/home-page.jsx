import React from 'react';

const HomePage = ({ onStart }) => {
    return (
        <div className="flex flex-col gap-16">
            {/* HERO SECTION */}
            <div className="card text-center py-24 px-8">
                <h1 className="text-[5rem] mb-2">AI Content</h1>
                <h1 className="text-[5rem] text-outline mb-4">Has to be Proven</h1>
                <p className="text-[1.4rem] opacity-80 mb-12 font-semibold">
                    Powered by <span className="text-primary">0G Network</span>
                </p>
                <button className="btn-primary" onClick={onStart}>
                    Let's start now!
                </button>
            </div>

            {/* ABOUT SECTION */}
            <div className="card bg-transparent border-none py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-[3rem] mb-6">About <span className="text-secondary">ProofMind</span></h2>
                        <p className="text-[1.2rem] opacity-80 leading-relaxed">
                            In an era of deepfakes and AI hallucinations, <strong>ProofMind</strong> acts as a decentralized notary for machine intelligence.
                            We bridge the gap between AI generation and absolute trust by anchoring AI fingerprints directly into the consensus layer.
                        </p>
                    </div>
                    <div className="p-8 bg-white/5 rounded-[24px] border border-white/10">
                        <h3 className="text-primary mb-4 text-xl tracking-normal">The Use Case</h3>
                        <p className="opacity-90 leading-relaxed">
                            Eliminate the "Black Box" problem. Whether it's legal summaries, medical advice, or creative assets, ProofMind ensures that what you see is exactly what the AI generated, verified by decentralized consensus.
                        </p>
                    </div>
                </div>
            </div>

            {/* HOW IT WORKS SECTION */}
            <div className="card py-16 px-8">
                <h2 className="text-[3.5rem] text-center mb-16">How it <span className="text-outline">Works</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white/[0.03] rounded-[20px] transition-transform duration-300 hover:-translate-y-2 hover:bg-white/[0.05]">
                        <div className="text-[3rem] font-black text-primary mb-4">01</div>
                        <h3 className="mb-4 text-xl tracking-normal">Generate</h3>
                        <p className="opacity-70 leading-relaxed">Prompt our high-performance AI engine to create verifiable content.</p>
                    </div>
                    <div className="p-8 bg-white/[0.03] rounded-[20px] transition-transform duration-300 hover:-translate-y-2 hover:bg-white/[0.05]">
                        <div className="text-[3rem] font-black text-secondary mb-4">02</div>
                        <h3 className="mb-4 text-xl tracking-normal">Anchor</h3>
                        <p className="opacity-70 leading-relaxed">We create a SHA-256 fingerprint and secure it on the 0G CC network instantly.</p>
                    </div>
                    <div className="p-8 bg-white/[0.03] rounded-[20px] transition-transform duration-300 hover:-translate-y-2 hover:bg-white/[0.05]">
                        <div className="text-[3rem] font-black text-white mb-4">03</div>
                        <h3 className="mb-4 text-xl tracking-normal">Verify</h3>
                        <p className="opacity-70 leading-relaxed">Anyone with the proof JSON can validate the content's integrity against the decentralized audit trail.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
