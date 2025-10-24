import React, { useState } from 'react';
import { dadosGincana } from '../data/dadosGincana';

const RankingPage = () => {
  const [selectedEquipe, setSelectedEquipe] = useState(null);

  const getMedalEmoji = (pos) => {
    const medals = ['🥇', '🥈', '🥉', '🏅'];
    return medals[pos];
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoPlaceholder}>LOGO UP</div>
          <div>
            <h1 style={styles.title}>RANKING FINAL</h1>
            <p style={styles.subtitle}>5ª Gincana Estudantil 2025</p>
          </div>
          <div style={styles.logoPlaceholder}>UNESCO</div>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.podiumSection}>
          {dadosGincana.ranking.map((equipe, index) => {
            const cor = dadosGincana.equipes[equipe.equipe].cor;
            const isSelected = selectedEquipe === equipe.equipe;

            return (
              <div
                key={equipe.equipe}
                style={{
                  ...styles.podiumCard,
                  backgroundColor: cor,
                  transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isSelected 
                    ? `0 20px 60px ${cor}90` 
                    : `0 10px 30px ${cor}60`
                }}
                onClick={() => setSelectedEquipe(isSelected ? null : equipe.equipe)}
              >
                <div style={styles.medal}>{getMedalEmoji(index)}</div>
                <div style={styles.position}>{index + 1}º LUGAR</div>
                <h2 style={styles.teamName}>EQUIPE {equipe.equipe.toUpperCase()}</h2>
                <div style={styles.totalPoints}>
                  {equipe.pontos.toLocaleString('pt-BR')}
                  <span style={styles.pointsLabel}> pontos</span>
                </div>

                {isSelected && (
                  <div style={styles.breakdown}>
                    <div style={styles.breakdownItem}>
                      <span>Tarefas Antecipadas</span>
                      <span>{dadosGincana.equipes[equipe.equipe].tarefas_antecipadas.toLocaleString('pt-BR')}</span>
                    </div>
                    <div style={styles.breakdownItem}>
                      <span>Tarefas Esportivas</span>
                      <span>{dadosGincana.equipes[equipe.equipe].tarefas_esportivas.toLocaleString('pt-BR')}</span>
                    </div>
                    <div style={styles.breakdownItem}>
                      <span>Tarefas do Dia (Fund II/EM)</span>
                      <span>{dadosGincana.equipes[equipe.equipe].tarefas_dia_efii_em.toLocaleString('pt-BR')}</span>
                    </div>
                    <div style={styles.breakdownItem}>
                      <span>Tarefas do Dia (Fund I)</span>
                      <span>{dadosGincana.equipes[equipe.equipe].tarefas_dia_efi.toLocaleString('pt-BR')}</span>
                    </div>
                    <div style={{...styles.breakdownItem, ...styles.penaltyItem}}>
                      <span>Penalidades</span>
                      <span>-{dadosGincana.equipes[equipe.equipe].penalidades.toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={styles.infoBox}>
          <p style={styles.infoText}>
            ✨ Clique em cada equipe para ver o detalhamento de pontos
          </p>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>Colégio Ueda Peçanha - Escola Associada UNESCO</p>
        <p style={styles.footerSmall}>O Futuro é Exponencial</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  header: {
    padding: '40px 60px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)'
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  logoPlaceholder: {
    width: '150px',
    height: '80px',
    border: '2px dashed rgba(255,255,255,0.3)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    opacity: '0.5'
  },
  title: {
    fontSize: '56px',
    fontWeight: 'bold',
    margin: '0',
    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
    letterSpacing: '3px',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '20px',
    margin: '10px 0 0 0',
    opacity: '0.9',
    textAlign: 'center'
  },
  main: {
    padding: '60px 40px',
    maxWidth: '1600px',
    margin: '0 auto'
  },
  podiumSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '40px'
  },
  podiumCard: {
    padding: '40px',
    borderRadius: '25px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '3px solid rgba(255,255,255,0.3)',
    position: 'relative'
  },
  medal: {
    fontSize: '80px',
    marginBottom: '15px'
  },
  position: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
    letterSpacing: '2px',
    opacity: '0.9'
  },
  teamName: {
    fontSize: '42px',
    fontWeight: 'bold',
    margin: '20px 0',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
  },
  totalPoints: {
    fontSize: '56px',
    fontWeight: 'bold',
    marginTop: '20px'
  },
  pointsLabel: {
    fontSize: '24px',
    opacity: '0.9'
  },
  breakdown: {
    marginTop: '30px',
    paddingTop: '30px',
    borderTop: '2px solid rgba(255,255,255,0.3)',
    textAlign: 'left'
  },
  breakdownItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    fontSize: '18px',
    borderBottom: '1px solid rgba(255,255,255,0.2)'
  },
  penaltyItem: {
    color: '#ffcccc',
    fontWeight: 'bold'
  },
  infoBox: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)'
  },
  infoText: {
    fontSize: '20px',
    margin: '0',
    opacity: '0.9'
  },
  footer: {
    padding: '30px',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginTop: '40px'
  },
  footerSmall: {
    fontSize: '14px',
    opacity: '0.7',
    marginTop: '10px'
  }
};

export default RankingPage;
