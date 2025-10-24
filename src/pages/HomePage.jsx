import React, { useState, useEffect } from 'react';
import { dadosGincana } from '../data/dadosGincana';

const HomePage = () => {
  const [currentPosition, setCurrentPosition] = useState(4);
  const [showWinner, setShowWinner] = useState(false);
  const ranking = dadosGincana.ranking;

  useEffect(() => {
    if (currentPosition > 1) {
      const timer = setTimeout(() => {
        setCurrentPosition(currentPosition - 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowWinner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentPosition]);

  const getPositionText = (pos) => {
    const positions = ['', '1º', '2º', '3º', '4º'];
    return positions[pos];
  };

  const getMedalEmoji = (pos) => {
    const medals = ['', '🥇', '🥈', '🥉', '🏅'];
    return medals[pos];
  };

  if (showWinner) {
    const vencedor = ranking[0];
    const corVencedor = dadosGincana.equipes[vencedor.equipe].cor;

    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.logoContainer}>
            <div style={styles.logoPlaceholder}>
              <span style={styles.logoText}>LOGO UP</span>
            </div>
            <div style={styles.logoGincana}>
              <h1 style={styles.logoGincanaText}>GINCANA UP</h1>
              <p style={styles.logoSubtext}>O FUTURO É EXPONENCIAL</p>
            </div>
            <div style={styles.logoPlaceholder}>
              <span style={styles.logoText}>UNESCO</span>
            </div>
          </div>
        </header>

        <main style={styles.winnerSection}>
          <div style={styles.trophy}>🏆</div>
          <h2 style={styles.congratsTitle}>PARABÉNS!</h2>
          
          <div style={{
            ...styles.winnerCard,
            backgroundColor: corVencedor,
            boxShadow: `0 20px 60px ${corVencedor}80`
          }}>
            <div style={styles.winnerMedal}>🥇</div>
            <h1 style={styles.winnerTeam}>EQUIPE {vencedor.equipe.toUpperCase()}</h1>
            <div style={styles.winnerPoints}>{vencedor.pontos.toLocaleString('pt-BR')} PONTOS</div>
            <div style={styles.winnerLabel}>CAMPEÃ DA 5ª GINCANA ESTUDANTIL 2025</div>
          </div>

          <div style={styles.otherPositions}>
            {ranking.slice(1).map((equipe, idx) => {
              const cor = dadosGincana.equipes[equipe.equipe].cor;
              return (
                <div key={equipe.equipe} style={{
                  ...styles.otherCard,
                  borderLeft: `6px solid ${cor}`
                }}>
                  <span style={styles.otherMedal}>{getMedalEmoji(idx + 2)}</span>
                  <div style={styles.otherInfo}>
                    <span style={styles.otherPosition}>{getPositionText(idx + 2)} lugar</span>
                    <span style={styles.otherTeam}>Equipe {equipe.equipe}</span>
                  </div>
                  <span style={styles.otherPoints}>{equipe.pontos.toLocaleString('pt-BR')}</span>
                </div>
              );
            })}
          </div>
        </main>

        <footer style={styles.footer}>
          <p style={styles.footerText}>Colégio Ueda Peçanha - Escola Associada UNESCO</p>
          <p style={styles.footerSubtext}>Acesse os resultados completos via QR Code</p>
        </footer>
      </div>
    );
  }

  const equipeAtual = ranking[4 - currentPosition];
  const corAtual = dadosGincana.equipes[equipeAtual.equipe].cor;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <div style={styles.logoPlaceholder}>
            <span style={styles.logoText}>LOGO UP</span>
          </div>
          <div style={styles.logoGincana}>
            <h1 style={styles.logoGincanaText}>GINCANA UP</h1>
            <p style={styles.logoSubtext}>O FUTURO É EXPONENCIAL</p>
          </div>
          <div style={styles.logoPlaceholder}>
            <span style={styles.logoText}>UNESCO</span>
          </div>
        </div>
      </header>

      <main style={styles.revealSection}>
        <div style={styles.revealCard}>
          <div style={styles.revealMedal}>{getMedalEmoji(currentPosition)}</div>
          <h2 style={styles.revealPosition}>{getPositionText(currentPosition)} LUGAR</h2>
          
          <div style={{
            ...styles.teamReveal,
            backgroundColor: corAtual,
            boxShadow: `0 15px 40px ${corAtual}80`
          }}>
            <h1 style={styles.teamName}>EQUIPE {equipeAtual.equipe.toUpperCase()}</h1>
            <div style={styles.teamPoints}>{equipeAtual.pontos.toLocaleString('pt-BR')} pontos</div>
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        <div style={styles.loadingDots}>
          <span style={styles.dot}>●</span>
          <span style={styles.dot}>●</span>
          <span style={styles.dot}>●</span>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  header: {
    padding: '40px 60px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  logoPlaceholder: {
    width: '200px',
    height: '120px',
    border: '3px dashed rgba(255,255,255,0.3)',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.5)'
  },
  logoGincana: {
    textAlign: 'center'
  },
  logoGincanaText: {
    fontSize: '72px',
    fontWeight: 'bold',
    margin: '0',
    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
    letterSpacing: '3px'
  },
  logoSubtext: {
    fontSize: '20px',
    margin: '5px 0 0 0',
    letterSpacing: '2px',
    opacity: '0.9'
  },
  winnerSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    animation: 'fadeIn 1s ease-in'
  },
  trophy: {
    fontSize: '120px',
    marginBottom: '20px',
    animation: 'bounce 2s infinite'
  },
  congratsTitle: {
    fontSize: '64px',
    fontWeight: 'bold',
    marginBottom: '40px',
    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
    letterSpacing: '5px'
  },
  winnerCard: {
    padding: '60px 80px',
    borderRadius: '30px',
    textAlign: 'center',
    marginBottom: '50px',
    minWidth: '700px',
    animation: 'scaleIn 0.8s ease-out',
    border: '5px solid rgba(255,255,255,0.3)'
  },
  winnerMedal: {
    fontSize: '100px',
    marginBottom: '20px'
  },
  winnerTeam: {
    fontSize: '72px',
    fontWeight: 'bold',
    margin: '20px 0',
    textShadow: '0 4px 10px rgba(0,0,0,0.3)'
  },
  winnerPoints: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginTop: '20px',
    opacity: '0.95'
  },
  winnerLabel: {
    fontSize: '24px',
    marginTop: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    opacity: '0.9'
  },
  otherPositions: {
    display: 'flex',
    gap: '30px',
    maxWidth: '1200px',
    width: '100%'
  },
  otherCard: {
    flex: 1,
    padding: '30px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    animation: 'slideUp 0.6s ease-out'
  },
  otherMedal: {
    fontSize: '48px'
  },
  otherInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  otherPosition: {
    fontSize: '18px',
    opacity: '0.8'
  },
  otherTeam: {
    fontSize: '28px',
    fontWeight: 'bold'
  },
  otherPoints: {
    fontSize: '32px',
    fontWeight: 'bold'
  },
  revealSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px'
  },
  revealCard: {
    textAlign: 'center',
    animation: 'fadeIn 0.8s ease-in'
  },
  revealMedal: {
    fontSize: '150px',
    marginBottom: '30px',
    animation: 'bounce 1.5s infinite'
  },
  revealPosition: {
    fontSize: '72px',
    fontWeight: 'bold',
    marginBottom: '50px',
    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
    letterSpacing: '5px'
  },
  teamReveal: {
    padding: '80px 120px',
    borderRadius: '30px',
    animation: 'scaleIn 0.8s ease-out',
    border: '5px solid rgba(255,255,255,0.3)'
  },
  teamName: {
    fontSize: '84px',
    fontWeight: 'bold',
    margin: '0 0 30px 0',
    textShadow: '0 4px 10px rgba(0,0,0,0.3)'
  },
  teamPoints: {
    fontSize: '56px',
    fontWeight: 'bold',
    opacity: '0.95'
  },
  footer: {
    padding: '30px',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  footerText: {
    fontSize: '18px',
    margin: '5px 0',
    opacity: '0.9'
  },
  footerSubtext: {
    fontSize: '16px',
    margin: '5px 0',
    opacity: '0.7'
  },
  loadingDots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px'
  },
  dot: {
    fontSize: '30px',
    animation: 'pulse 1.5s infinite',
    opacity: '0.6'
  }
};

export default HomePage;
