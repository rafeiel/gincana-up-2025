import React, { useState } from 'react';
import { dadosGincana, tarefasDetalhadas } from '../data/dadosGincana';

const DadosPage = () => {
  const [sectionExpanded, setSectionExpanded] = useState({
    antecipadas: true,
    esportivas: false,
    responsaveis: false,
    fundI: false,
    penalidades: false
  });

  const toggleSection = (section) => {
    setSectionExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const equipes = ['Roxa', 'Verde', 'Rosa', 'Vermelha'];

  const renderTable = (tarefas, ispenalty = false) => {
    return (
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={{...styles.th, ...styles.taskColumn}}>Tarefa</th>
              {equipes.map(equipe => (
                <th 
                  key={equipe} 
                  style={{
                    ...styles.th,
                    backgroundColor: dadosGincana.equipes[equipe].cor,
                    color: 'white'
                  }}
                >
                  {equipe}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tarefas.map((tarefa, idx) => (
              <tr key={idx} style={idx % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td style={{...styles.td, ...styles.taskName}}>{tarefa.nome}</td>
                {equipes.map(equipe => (
                  <td 
                    key={equipe} 
                    style={{
                      ...styles.td,
                      ...styles.pointsCell,
                      color: ispenalty ? '#ff6b6b' : '#2ecc71',
                      fontWeight: 'bold'
                    }}
                  >
                    {ispenalty && tarefa.valores[equipe] > 0 ? '-' : ''}
                    {tarefa.valores[equipe].toLocaleString('pt-BR')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoPlaceholder}>LOGO UP</div>
          <div>
            <h1 style={styles.title}>DADOS COMPLETOS</h1>
            <p style={styles.subtitle}>5ª Gincana Estudantil 2025</p>
          </div>
          <div style={styles.logoPlaceholder}>UNESCO</div>
        </div>
      </header>

      <main style={styles.main}>
        {/* Resumo Final */}
        <section style={styles.summarySection}>
          <h2 style={styles.sectionTitle}>📊 Resultado Final</h2>
          <div style={styles.summaryCards}>
            {dadosGincana.ranking.map((equipe, index) => {
              const cor = dadosGincana.equipes[equipe.equipe].cor;
              const medals = ['🥇', '🥈', '🥉', '🏅'];
              
              return (
                <div 
                  key={equipe.equipe}
                  style={{
                    ...styles.summaryCard,
                    backgroundColor: cor,
                    boxShadow: `0 10px 30px ${cor}60`
                  }}
                >
                  <div style={styles.summaryMedal}>{medals[index]}</div>
                  <div style={styles.summaryPosition}>{index + 1}º lugar</div>
                  <div style={styles.summaryTeam}>Equipe {equipe.equipe}</div>
                  <div style={styles.summaryPoints}>{equipe.pontos.toLocaleString('pt-BR')} pts</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tarefas Antecipadas */}
        <section style={styles.section}>
          <div 
            style={styles.sectionHeader}
            onClick={() => toggleSection('antecipadas')}
          >
            <h2 style={styles.sectionTitle}>
              {sectionExpanded.antecipadas ? '▼' : '▶'} 📝 Tarefas Antecipadas
            </h2>
            <div style={styles.totalBadge}>
              {equipes.map(equipe => (
                <span 
                  key={equipe}
                  style={{
                    ...styles.badge,
                    backgroundColor: dadosGincana.equipes[equipe].cor
                  }}
                >
                  {equipe}: {dadosGincana.equipes[equipe].tarefas_antecipadas.toLocaleString('pt-BR')}
                </span>
              ))}
            </div>
          </div>
          {sectionExpanded.antecipadas && renderTable(tarefasDetalhadas.tarefasAntecipadas)}
        </section>

        {/* Tarefas Esportivas */}
        <section style={styles.section}>
          <div 
            style={styles.sectionHeader}
            onClick={() => toggleSection('esportivas')}
          >
            <h2 style={styles.sectionTitle}>
              {sectionExpanded.esportivas ? '▼' : '▶'} ⚽ Tarefas Esportivas
            </h2>
            <div style={styles.totalBadge}>
              {equipes.map(equipe => (
                <span 
                  key={equipe}
                  style={{
                    ...styles.badge,
                    backgroundColor: dadosGincana.equipes[equipe].cor
                  }}
                >
                  {equipe}: {dadosGincana.equipes[equipe].tarefas_esportivas.toLocaleString('pt-BR')}
                </span>
              ))}
            </div>
          </div>
          {sectionExpanded.esportivas && renderTable(tarefasDetalhadas.tarefasEsportivas)}
        </section>

        {/* Tarefas do Dia - Responsáveis */}
        <section style={styles.section}>
          <div 
            style={styles.sectionHeader}
            onClick={() => toggleSection('responsaveis')}
          >
            <h2 style={styles.sectionTitle}>
              {sectionExpanded.responsaveis ? '▼' : '▶'} 👨‍👩‍👧‍👦 Tarefas do Dia - Responsáveis
            </h2>
            <div style={styles.totalBadge}>
              {equipes.map(equipe => (
                <span 
                  key={equipe}
                  style={{
                    ...styles.badge,
                    backgroundColor: dadosGincana.equipes[equipe].cor
                  }}
                >
                  {equipe}: {dadosGincana.equipes[equipe].tarefas_dia_efii_em.toLocaleString('pt-BR')}
                </span>
              ))}
            </div>
          </div>
          {sectionExpanded.responsaveis && renderTable(tarefasDetalhadas.tarefasDiaResponsaveis)}
        </section>

        {/* Tarefas do Dia - Fund I */}
        <section style={styles.section}>
          <div 
            style={styles.sectionHeader}
            onClick={() => toggleSection('fundI')}
          >
            <h2 style={styles.sectionTitle}>
              {sectionExpanded.fundI ? '▼' : '▶'} 🎈 Tarefas do Dia - Fundamental I
            </h2>
            <div style={styles.totalBadge}>
              {equipes.map(equipe => (
                <span 
                  key={equipe}
                  style={{
                    ...styles.badge,
                    backgroundColor: dadosGincana.equipes[equipe].cor
                  }}
                >
                  {equipe}: {dadosGincana.equipes[equipe].tarefas_dia_efi.toLocaleString('pt-BR')}
                </span>
              ))}
            </div>
          </div>
          {sectionExpanded.fundI && renderTable(tarefasDetalhadas.tarefasDiaFundI)}
        </section>

        {/* Penalidades */}
        <section style={styles.section}>
          <div 
            style={styles.sectionHeader}
            onClick={() => toggleSection('penalidades')}
          >
            <h2 style={styles.sectionTitle}>
              {sectionExpanded.penalidades ? '▼' : '▶'} ⚠️ Penalidades
            </h2>
            <div style={styles.totalBadge}>
              {equipes.map(equipe => (
                <span 
                  key={equipe}
                  style={{
                    ...styles.badge,
                    backgroundColor: '#ff6b6b',
                    color: 'white'
                  }}
                >
                  {equipe}: -{dadosGincana.equipes[equipe].penalidades.toLocaleString('pt-BR')}
                </span>
              ))}
            </div>
          </div>
          {sectionExpanded.penalidades && renderTable(tarefasDetalhadas.penalidades, true)}
        </section>
      </main>

      <footer style={styles.footer}>
        <p>Colégio Ueda Peçanha - Escola Associada UNESCO</p>
        <p style={styles.footerSmall}>5ª Gincana Estudantil 2025 - O Futuro é Exponencial</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#333',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  header: {
    padding: '30px 40px',
    backgroundColor: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(10px)',
    color: 'white'
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1600px',
    margin: '0 auto'
  },
  logoPlaceholder: {
    width: '120px',
    height: '60px',
    border: '2px dashed rgba(255,255,255,0.3)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    opacity: '0.5'
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '0',
    textAlign: 'center',
    letterSpacing: '2px'
  },
  subtitle: {
    fontSize: '18px',
    margin: '10px 0 0 0',
    opacity: '0.9',
    textAlign: 'center'
  },
  main: {
    padding: '40px',
    maxWidth: '1600px',
    margin: '0 auto'
  },
  summarySection: {
    marginBottom: '40px',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
  },
  summaryCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  summaryCard: {
    padding: '30px',
    borderRadius: '15px',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  summaryMedal: {
    fontSize: '48px',
    marginBottom: '10px'
  },
  summaryPosition: {
    fontSize: '16px',
    marginBottom: '8px',
    opacity: '0.9'
  },
  summaryTeam: {
    fontSize: '24px',
    marginBottom: '10px'
  },
  summaryPoints: {
    fontSize: '32px'
  },
  section: {
    marginBottom: '30px',
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
  },
  sectionHeader: {
    padding: '20px 30px',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #e9ecef',
    transition: 'background-color 0.3s ease'
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '0',
    color: '#2c3e50'
  },
  totalBadge: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  badge: {
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white'
  },
  tableContainer: {
    padding: '20px',
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '16px'
  },
  headerRow: {
    backgroundColor: '#2c3e50',
    color: 'white'
  },
  th: {
    padding: '15px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    border: '1px solid #dee2e6'
  },
  taskColumn: {
    textAlign: 'left',
    minWidth: '300px',
    backgroundColor: '#34495e'
  },
  td: {
    padding: '12px 15px',
    border: '1px solid #dee2e6'
  },
  taskName: {
    fontWeight: '500',
    color: '#2c3e50'
  },
  pointsCell: {
    textAlign: 'center',
    fontSize: '18px'
  },
  evenRow: {
    backgroundColor: '#f8f9fa'
  },
  oddRow: {
    backgroundColor: 'white'
  },
  footer: {
    padding: '30px',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: 'white',
    marginTop: '40px'
  },
  footerSmall: {
    fontSize: '14px',
    opacity: '0.7',
    marginTop: '10px'
  }
};

export default DadosPage;
