import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RankingPage from './pages/RankingPage';
import DadosPage from './pages/DadosPage';
import './App.css';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav style={styles.nav}>
      <Link 
        to="/" 
        style={{
          ...styles.navLink,
          ...(location.pathname === '/' ? styles.navLinkActive : {})
        }}
      >
        🏆 Resultado
      </Link>
      <Link 
        to="/ranking" 
        style={{
          ...styles.navLink,
          ...(location.pathname === '/ranking' ? styles.navLinkActive : {})
        }}
      >
        📊 Ranking
      </Link>
      <Link 
        to="/dados" 
        style={{
          ...styles.navLink,
          ...(location.pathname === '/dados' ? styles.navLinkActive : {})
        }}
      >
        📋 Dados Completos
      </Link>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/dados" element={<DadosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    display: 'flex',
    gap: '15px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: '15px 25px',
    borderRadius: '50px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent'
  },
  navLinkActive: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    transform: 'scale(1.05)'
  }
};

export default App;
