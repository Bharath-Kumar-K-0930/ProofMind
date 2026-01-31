import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/home-page';
import GeneratePage from './pages/generate-page';
import VerifyPage from './pages/verify-page';
import ClickSpark from './components/ClickSpark';
import Hyperspeed from './components/Hyperspeed';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    const [page, setPage] = useState('home');

    return (
        <>
            <Hyperspeed />
            <ClickSpark
                sparkColor='#74f0ed'
                sparkSize={15}
                sparkRadius={25}
                sparkCount={12}
                duration={500}
            >
                <div className="max-w-[1200px] mx-auto p-6 min-h-screen relative z-10">
                    <nav className="flex justify-between items-center mb-16 py-4">
                        <div className="flex items-center gap-4">
                            <img src="/logo.png" alt="ProofMind Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(116,240,237,0.5)]" />
                            <div className="text-[1.8rem] font-black uppercase tracking-tight">ProofMind <span className="text-primary">AI</span></div>
                        </div>
                        <div className="flex gap-8">
                            <button
                                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 ${page === 'home' ? 'text-primary' : 'text-white opacity-60 hover:opacity-100'}`}
                                onClick={() => setPage('home')}
                            >
                                Home
                            </button>
                            <button
                                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 ${page === 'generate' ? 'text-primary' : 'text-white opacity-60 hover:opacity-100'}`}
                                onClick={() => setPage('generate')}
                            >
                                Generate
                            </button>
                            <button
                                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 ${page === 'verify' ? 'text-primary' : 'text-white opacity-60 hover:opacity-100'}`}
                                onClick={() => setPage('verify')}
                            >
                                Verify
                            </button>
                        </div>
                    </nav>

                    <main>
                        {page === 'home' && <HomePage onStart={() => setPage('generate')} />}
                        {page === 'generate' && <GeneratePage />}
                        {page === 'verify' && <VerifyPage />}
                    </main>

                    <Footer />
                </div>
            </ClickSpark>
        </>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
