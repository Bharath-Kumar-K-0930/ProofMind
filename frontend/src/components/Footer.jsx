import React, { useState } from 'react';
import DetailsModal from './DetailsModal';

const Footer = () => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <footer className="mt-20 py-8 border-t border-white/10 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <a href="mailto:bharathkumarkbk10@gmail.com" className="hover:text-primary transition-colors duration-300 font-medium tracking-wide">
                        bharathkumarkbk10@gmail.com
                    </a>
                    {/* Details Button */}
                    <button
                        onClick={() => setShowDetails(true)}
                        className="text-white/60 text-sm hover:text-white underline decoration-dotted underline-offset-4 transition-colors"
                    >
                        View Project Details &rarr;
                    </button>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 items-center">
                    <a href="https://github.com/Bharath-Kumar-K-0930" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 transform hover:scale-110">
                        {/* GitHub Icon */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>

                    <a href="https://www.linkedin.com/in/bharath-kumar-k-b35ba0304/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 transform hover:scale-110">
                        {/* LinkedIn Icon */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                    </a>

                    <a href="https://leetcode.com/u/Bharath_Kumar_K_91/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 transform hover:scale-110 flex items-center gap-2">
                        {/* LeetCode Icon (Simple code bracket representation usually, or SVG) */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.173 5.423a1.354 1.354 0 0 0-.381 1.057L9.3 12.43a1.363 1.363 0 0 0 1.4.954 1.355 1.355 0 0 0 .96-.438l5.349-4.985a1.353 1.353 0 0 0 .38-1.057l-2.508-5.952a1.362 1.362 0 0 0-1.4-.952zm-2.966 6.51a1.375 1.375 0 0 0-.962.438L4.206 11.933a1.354 1.354 0 0 0-.381 1.057l2.508 5.952a1.362 1.362 0 0 0 1.4.952 1.374 1.374 0 0 0 .961-.438l5.349-4.985a1.354 1.354 0 0 0 .381-1.057l-2.508-5.952a1.362 1.362 0 0 0-1.4-.952zM22 13c0 2.209-1.791 4-4 4h-5c-2.209 0-4-1.791-4-4s1.791-4 4-4h5c2.209 0 4 1.791 4 4z" /></svg>
                    </a>
                </div>

                {/* Source Code Button */}
                <div>
                    <a href="https://github.com/Bharath-Kumar-K-0930/ProofMind" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/50 text-primary text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-black transition-all duration-300">
                        <span>Source Code</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4 mt-8">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-primary/50 transition-colors group">
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Built For</span>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center font-black text-black text-xs shadow-[0_0_10px_rgba(116,240,237,0.5)]">0G</div>
                        <span className="text-white font-black tracking-tighter text-sm group-hover:text-primary transition-colors">0G Network</span>
                    </div>
                </div>

                <div className="text-white/80 font-medium tracking-wide flex items-center gap-2 text-sm">
                    Made With <span className="text-red-500 animate-pulse">❤️</span> By <span className="text-primary font-bold">Bharath Kumar K</span>
                </div>

                <div className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                    &copy; {new Date().getFullYear()} ProofMind AI • All rights served on the 0G Network
                </div>
            </div>

            {/* Render Modal */}
            {showDetails && <DetailsModal onClose={() => setShowDetails(false)} />}
        </footer>
    );
};

export default Footer;
