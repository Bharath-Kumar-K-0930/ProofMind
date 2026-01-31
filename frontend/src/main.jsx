import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Generate from './pages/Generate';
import Verify from './pages/Verify';
import './index.css';

const App = () => {
    const [page, setPage] = useState('home');

    return (
        <div className="app-container">
            <nav className="navbar">
                <div className="logo">ProofMind <span>AI</span></div>
                <div className="nav-links">
                    <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Home</button>
                    <button className={page === 'generate' ? 'active' : ''} onClick={() => setPage('generate')}>Generate</button>
                    <button className={page === 'verify' ? 'active' : ''} onClick={() => setPage('verify')}>Verify</button>
                </div>
            </nav>

            <main>
                {page === 'home' && <Home onStart={() => setPage('generate')} />}
                {page === 'generate' && <Generate />}
                {page === 'verify' && <Verify />}
            </main>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
