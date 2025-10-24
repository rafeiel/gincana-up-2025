// ============================================
// RESULTADOS.JS - Lógica da página de resultados
// ============================================

// Função para encontrar o maior valor em uma tarefa
function findMaxPoints(roxa, verde, rosa, vermelha) {
  const values = [roxa, verde, rosa, vermelha];
  return Math.max(...values);
}

// Função para renderizar uma tarefa
function renderTask(task) {
  const maxPoints = findMaxPoints(task.roxa, task.verde, task.rosa, task.vermelha);
  
  return `
    <div class="task-item">
      <div class="task-name">${task.nome}</div>
      <div class="task-points ${task.roxa === maxPoints && maxPoints > 0 ? 'winner' : ''}" style="color: #8B27C4;">
        ${task.roxa.toLocaleString('pt-BR')}
      </div>
      <div class="task-points ${task.verde === maxPoints && maxPoints > 0 ? 'winner' : ''}" style="color: #2ECC71;">
        ${task.verde.toLocaleString('pt-BR')}
      </div>
      <div class="task-points ${task.rosa === maxPoints && maxPoints > 0 ? 'winner' : ''}" style="color: #E91E63;">
        ${task.rosa.toLocaleString('pt-BR')}
      </div>
      <div class="task-points ${task.vermelha === maxPoints && maxPoints > 0 ? 'winner' : ''}" style="color: #E74C3C;">
        ${task.vermelha.toLocaleString('pt-BR')}
      </div>
    </div>
  `;
}

// Função para renderizar tabela de ranking
function renderRankingTable() {
  const tbody = document.getElementById('rankingTableBody');
  const equipesOrdenadas = [...dadosGincana.equipes].sort((a, b) => a.posicao - b.posicao);
  
  equipesOrdenadas.forEach(equipe => {
    const row = document.createElement('tr');
    row.style.borderLeft = `4px solid ${equipe.cor}`;
    
    const positionText = equipe.posicao === 1 ? '🏆 1º' : 
                        equipe.posicao === 2 ? '🥈 2º' :
                        equipe.posicao === 3 ? '🥉 3º' : '4º';
    
    row.innerHTML = `
      <td><strong>${positionText}</strong></td>
      <td>
        <span class="team-badge" style="background: ${equipe.cor}20; color: ${equipe.cor}; border: 2px solid ${equipe.cor};">
          ${equipe.nome}
        </span>
      </td>
      <td><strong style="color: ${equipe.cor};">${equipe.total.toLocaleString('pt-BR')}</strong></td>
      <td>${equipe.pontos.antecipadas.toLocaleString('pt-BR')}</td>
      <td>${equipe.pontos.esportivas.toLocaleString('pt-BR')}</td>
      <td>${equipe.pontos.diaSurpresa.toLocaleString('pt-BR')}</td>
      <td>${equipe.pontos.diaEFI.toLocaleString('pt-BR')}</td>
      <td style="color: #E74C3C;">${equipe.pontos.penalidades.toLocaleString('pt-BR')}</td>
    `;
    
    tbody.appendChild(row);
  });
}

// Função para renderizar DNA da Equipe
function renderDnaEquipe() {
  const container = document.getElementById('dnaEquipe');
  let html = '';
  
  dadosGincana.tarefasAntecipadas.dnaEquipe.forEach(task => {
    html += renderTask(task);
  });
  
  container.innerHTML = html;
}

// Função para renderizar Caça ao Tesouro
function renderCacaTesouro() {
  const container = document.getElementById('cacaTesouro');
  let html = '';
  
  dadosGincana.tarefasAntecipadas.cacaTesouro.forEach(task => {
    html += renderTask(task);
  });
  
  container.innerHTML = html;
}

// Função para renderizar Tarefas Esportivas
function renderEsportivas() {
  const container = document.getElementById('esportivas');
  let html = '';
  
  dadosGincana.tarefasEsportivas.forEach(task => {
    html += renderTask(task);
  });
  
  container.innerHTML = html;
}

// Função para renderizar Tarefas Responsáveis
function renderResponsaveis() {
  const container = document.getElementById('responsaveis');
  let html = '';
  
  dadosGincana.tarefasDiaResponsaveis.forEach(task => {
    html += renderTask(task);
  });
  
  container.innerHTML = html;
}

// Função para renderizar Tarefas EFI
function renderEFI() {
  const container = document.getElementById('efi');
  let html = '';
  
  dadosGincana.tarefasDiaEFI.forEach(task => {
    html += renderTask(task);
  });
  
  container.innerHTML = html;
}

// Função para renderizar Penalidades
function renderPenalidades() {
  const container = document.getElementById('penalidades');
  let html = '';
  
  dadosGincana.penalidades.forEach(task => {
    // Para penalidades, não destacar o "maior" (pois é negativo)
    html += `
      <div class="task-item">
        <div class="task-name">${task.nome}</div>
        <div class="task-points" style="color: #8B27C4;">
          ${task.roxa > 0 ? '-' : ''}${task.roxa.toLocaleString('pt-BR')}
        </div>
        <div class="task-points" style="color: #2ECC71;">
          ${task.verde > 0 ? '-' : ''}${task.verde.toLocaleString('pt-BR')}
        </div>
        <div class="task-points" style="color: #E91E63;">
          ${task.rosa > 0 ? '-' : ''}${task.rosa.toLocaleString('pt-BR')}
        </div>
        <div class="task-points" style="color: #E74C3C;">
          ${task.vermelha > 0 ? '-' : ''}${task.vermelha.toLocaleString('pt-BR')}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// Função para atualizar os totais
function updateTotals() {
  const equipes = dadosGincana.equipes;
  
  // Tarefas Antecipadas
  document.getElementById('totalAntRoxa').innerHTML = `<strong>${equipes[0].pontos.antecipadas.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalAntVerde').innerHTML = `<strong>${equipes[1].pontos.antecipadas.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalAntRosa').innerHTML = `<strong>${equipes[2].pontos.antecipadas.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalAntVermelha').innerHTML = `<strong>${equipes[3].pontos.antecipadas.toLocaleString('pt-BR')}</strong>`;
  
  // Tarefas Esportivas
  document.getElementById('totalEspRoxa').innerHTML = `<strong>${equipes[0].pontos.esportivas.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalEspVerde').innerHTML = `<strong>${equipes[1].pontos.esportivas.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalEspRosa').innerHTML = `<strong>${equipes[2].pontos.esportivas.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalEspVermelha').innerHTML = `<strong>${equipes[3].pontos.esportivas.toLocaleString('pt-BR')}</strong>`;
  
  // Tarefas Responsáveis
  document.getElementById('totalRespRoxa').innerHTML = `<strong>${equipes[0].pontos.diaSurpresa.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalRespVerde').innerHTML = `<strong>${equipes[1].pontos.diaSurpresa.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalRespRosa').innerHTML = `<strong>${equipes[2].pontos.diaSurpresa.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalRespVermelha').innerHTML = `<strong>${equipes[3].pontos.diaSurpresa.toLocaleString('pt-BR')}</strong>`;
  
  // Tarefas EFI
  document.getElementById('totalEfiRoxa').innerHTML = `<strong>${equipes[0].pontos.diaEFI.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalEfiVerde').innerHTML = `<strong>${equipes[1].pontos.diaEFI.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalEfiRosa').innerHTML = `<strong>${equipes[2].pontos.diaEFI.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalEfiVermelha').innerHTML = `<strong>${equipes[3].pontos.diaEFI.toLocaleString('pt-BR')}</strong>`;
  
  // Penalidades
  document.getElementById('totalPenRoxa').innerHTML = `<strong>-${equipes[0].pontos.penalidades.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalPenVerde').innerHTML = `<strong>-${equipes[1].pontos.penalidades.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalPenRosa').innerHTML = `<strong>-${equipes[2].pontos.penalidades.toLocaleString('pt-BR')}</strong>`;
  document.getElementById('totalPenVermelha').innerHTML = `<strong>-${equipes[3].pontos.penalidades.toLocaleString('pt-BR')}</strong>`;
}

// Função para controlar as tabs
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active de todos
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Adiciona active no clicado
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(`tab-${tabId}`).classList.add('active');
    });
  });
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  renderRankingTable();
  renderDnaEquipe();
  renderCacaTesouro();
  renderEsportivas();
  renderResponsaveis();
  renderEFI();
  renderPenalidades();
  updateTotals();
  initTabs();
});
