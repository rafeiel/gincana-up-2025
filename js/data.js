// Dados da 5ª Gincana Estudantil UP 2025 - ATUALIZADO
const dadosGincana = {
  equipes: [
    {
      id: 1,
      nome: "ROXA",
      cor: "#8B27C4",
      posicao: 3,
      medal: "🥉",
      total: 81725,
      pontos: {
        antecipadas: 33920,
        esportivas: 8500,
        diaSurpresa: 16500,
        diaEFI: 25000,
        penalidades: 2195
      }
    },
    {
      id: 2,
      nome: "VERDE",
      cor: "#2ECC71",
      posicao: 1,
      medal: "🏆",
      total: 83685,
      pontos: {
        antecipadas: 28480,
        esportivas: 10800,
        diaSurpresa: 11500,
        diaEFI: 35000,
        penalidades: 2095
      }
    },
    {
      id: 3,
      nome: "ROSA",
      cor: "#E91E63",
      posicao: 4,
      medal: "",
      total: 71135,
      pontos: {
        antecipadas: 29860,
        esportivas: 8200,
        diaSurpresa: 11000,
        diaEFI: 25000,
        penalidades: 2925
      }
    },
    {
      id: 4,
      nome: "VERMELHA",
      cor: "#FF0000",
      posicao: 2,
      medal: "🥈",
      total: 77105,
      pontos: {
        antecipadas: 34980,
        esportivas: 9300,
        diaSurpresa: 11000,
        diaEFI: 24000,
        penalidades: 2175
      }
    }
  ],

  tarefasAntecipadas: {
    dnaEquipe: [
      { nome: "Nome da Equipe", roxa: 600, verde: 500, rosa: 500, vermelha: 500 },
      { nome: "Mascote", roxa: 500, verde: 500, rosa: 1000, vermelha: 500 },
      { nome: "Grito de Guerra", roxa: 500, verde: 600, rosa: 500, vermelha: 500 },
      { nome: "Bandeira", roxa: 1000, verde: 500, rosa: 1000, vermelha: 500 }
    ],
    solidarias: [
      { nome: "Solidária (Fraldas)", roxa: 2000, verde: 500, rosa: 1500, vermelha: 1000 },
      { nome: "Ambiental (Tampinhas)", roxa: 2000, verde: 500, rosa: 1500, vermelha: 1000 },
      { nome: "Doação de Sangue", roxa: 2000, verde: 500, rosa: 1000, vermelha: 1500 },
      { nome: "Caça ao Tesouro", roxa: 3000, verde: 3200, rosa: 3100, vermelha: 3200 }
    ],
    academicas: [
      { nome: "Leitores Árvore (Fund I)", roxa: 1000, verde: 2000, rosa: 1500, vermelha: 500 },
      { nome: "Medalhas Canguru (Fund I)", roxa: 50, verde: 400, rosa: 500, vermelha: 250 },
      { nome: "Notas 3º Bimestre (Fund I)", roxa: 600, verde: 1300, rosa: 600, vermelha: 800 },
      { nome: "Coeficiente Rendimento (Fund I)", roxa: 1500, verde: 500, rosa: 2000, vermelha: 1000 },
      { nome: "Leitores Árvore (Fund II)", roxa: 1500, verde: 500, rosa: 1000, vermelha: 2000 },
      { nome: "Medalhas Canguru (Fund II/EM)", roxa: 0, verde: 600, rosa: 0, vermelha: 0 },
      { nome: "Projeto Redação (Fund II/EM)", roxa: 1300, verde: 750, rosa: 1950, vermelha: 2500 },
      { nome: "Bonificação Redação ENEM", roxa: 200, verde: 0, rosa: 0, vermelha: 400 },
      { nome: "Simulado UP", roxa: 1120, verde: 980, rosa: 960, vermelha: 1180 },
      { nome: "Notas 3º Bim (Fund II/EM)", roxa: 12200, verde: 11700, rosa: 8800, vermelha: 13600 },
      { nome: "Coeficiente Rendimento", roxa: 1500, verde: 1000, rosa: 500, vermelha: 2000 },
      { nome: "UERJ/Conceito", roxa: 0, verde: 0, rosa: 0, vermelha: 50 }
    ],
    circuito: [
      { nome: "Circuito UP - PNE", roxa: 400, verde: 600, rosa: 600, vermelha: 1000 },
      { nome: "Circuito UP - Alunos", roxa: 950, verde: 1350, rosa: 1350, vermelha: 1000 }
    ]
  },

  tarefasEsportivas: [
    { nome: "Vôlei Feminino (EF II)", roxa: 400, verde: 200, rosa: 300, vermelha: 500 },
    { nome: "Vôlei Masculino (EF II)", roxa: 400, verde: 200, rosa: 500, vermelha: 300 },
    { nome: "Vôlei Feminino (EM)", roxa: 500, verde: 300, rosa: 400, vermelha: 200 },
    { nome: "Vôlei Masculino (EM)", roxa: 200, verde: 400, rosa: 300, vermelha: 500 },
    { nome: "Dodgeball Feminino (EF II)", roxa: 500, verde: 300, rosa: 200, vermelha: 400 },
    { nome: "Dodgeball Feminino (EM)", roxa: 400, verde: 500, rosa: 300, vermelha: 200 },
    { nome: "Handebol Feminino (EF II)", roxa: 500, verde: 200, rosa: 300, vermelha: 400 },
    { nome: "Handebol Feminino (EM)", roxa: 300, verde: 400, rosa: 500, vermelha: 200 },
    { nome: "Basquete Masculino (EF II)", roxa: 200, verde: 400, rosa: 300, vermelha: 500 },
    { nome: "Basquete Masculino (EM)", roxa: 200, verde: 500, rosa: 300, vermelha: 400 },
    { nome: "Futsal Masculino (EF II)", roxa: 200, verde: 400, rosa: 500, vermelha: 300 },
    { nome: "Futsal Masculino (EM)", roxa: 200, verde: 500, rosa: 300, vermelha: 400 },
    { nome: "Vôlei de Praia (EF II)", roxa: 500, verde: 1500, rosa: 1000, vermelha: 2000 },
    { nome: "Vôlei de Praia (EM)", roxa: 1500, verde: 2000, rosa: 500, vermelha: 1000 },
    { nome: "Altinha (EF II)", roxa: 1500, verde: 1000, rosa: 2000, vermelha: 500 },
    { nome: "Altinha (EM)", roxa: 1000, verde: 2000, rosa: 500, vermelha: 1500 }
  ],

  tarefasDiaResponsaveis: [
    { nome: "Circuito A", roxa: 2000, verde: 1500, rosa: 500, vermelha: 1000 },
    { nome: "Bambolê", roxa: 2000, verde: 1500, rosa: 500, vermelha: 1000 },
    { nome: "Circuito B", roxa: 2000, verde: 1000, rosa: 1500, vermelha: 500 },
    { nome: "Soletrando", roxa: 500, verde: 1000, rosa: 1500, vermelha: 2000 },
    { nome: "M & M", roxa: 2000, verde: 500, rosa: 1500, vermelha: 1000 },
    { nome: "Jogo da Velha", roxa: 2000, verde: 500, rosa: 1000, vermelha: 1500 },
    { nome: "Ordem de Cores", roxa: 1500, verde: 2000, rosa: 500, vermelha: 1000 },
    { nome: "UNO", roxa: 1000, verde: 2000, rosa: 500, vermelha: 1500 },
    { nome: "Combinação das Cores", roxa: 1500, verde: 1000, rosa: 2000, vermelha: 500 },
    { nome: "Quebra-Cabeça", roxa: 2000, verde: 500, rosa: 1500, vermelha: 1000 }
  ],

  tarefasDiaEFI: [
    { nome: "Dança das Cadeiras (Matutino)", roxa: 1500, verde: 1000, rosa: 500, vermelha: 2000 },
    { nome: "Tamanco (Matutino)", roxa: 1500, verde: 500, rosa: 2000, vermelha: 1000 },
    { nome: "Bola na Colher (Matutino)", roxa: 1000, verde: 1500, rosa: 500, vermelha: 2000 },
    { nome: "Pulando com Bola (Matutino)", roxa: 500, verde: 2000, rosa: 1500, vermelha: 1000 },
    { nome: "Bambolê em Fila (Matutino)", roxa: 2000, verde: 1500, rosa: 500, vermelha: 1000 },
    { nome: "Bola no Pé (Matutino)", roxa: 1500, verde: 1000, rosa: 2000, vermelha: 500 },
    { nome: "Copo Colorido (Matutino)", roxa: 500, verde: 2000, rosa: 1500, vermelha: 1000 },
    { nome: "Pulando com Bola (Vespertino)", roxa: 500, verde: 2000, rosa: 1500, vermelha: 1000 },
    { nome: "Copo Colorido (Vespertino)", roxa: 1500, verde: 2000, rosa: 1000, vermelha: 500 },
    { nome: "Coelhinho Sai da Toca (Vespertino)", roxa: 500, verde: 2000, rosa: 1000, vermelha: 1500 },
    { nome: "Bambolê em Fila (Vespertino)", roxa: 1500, verde: 1000, rosa: 500, vermelha: 1000 },
    { nome: "Dança das Cadeiras (Vespertino)", roxa: 1500, verde: 1000, rosa: 2000, vermelha: 500 },
    { nome: "Tamanco (Vespertino)", roxa: 1500, verde: 2000, rosa: 1000, vermelha: 500 },
    { nome: "Bola na Colher (Vespertino)", roxa: 1000, verde: 2000, rosa: 1500, vermelha: 500 },
    { nome: "Bola no Balde", roxa: 500, verde: 1500, rosa: 1000, vermelha: 2000 },
    { nome: "Água no Balde", roxa: 500, verde: 1000, rosa: 1500, vermelha: 2000 },
    { nome: "Queimado", roxa: 1000, verde: 1500, rosa: 500, vermelha: 2000 },
    { nome: "Estoura Bolas", roxa: 1500, verde: 2000, rosa: 1000, vermelha: 500 },
    { nome: "Coelhinho Sai da Toca", roxa: 500, verde: 2000, rosa: 1000, vermelha: 1500 },
    { nome: "Rolo de Papel", roxa: 2000, verde: 1500, rosa: 1000, vermelha: 500 },
    { nome: "Simon Says", roxa: 1000, verde: 2000, rosa: 1500, vermelha: 500 },
    { nome: "Fila da Bola", roxa: 1500, verde: 2000, rosa: 500, vermelha: 1000 }
  ],

  penalidades: [
    { nome: "Cartões Amarelos", roxa: 300, verde: 100, rosa: 400, vermelha: 300 },
    { nome: "Cartões Vermelhos", roxa: 0, verde: 0, rosa: 0, vermelha: 200 },
    { nome: "Atraso no Horário", roxa: 750, verde: 1350, rosa: 1350, vermelha: 450 },
    { nome: "Alunos sem Uniforme", roxa: 75, verde: 50, rosa: 75, vermelha: 25 },
    { nome: "Ausência na Gincana (1ª Semana)", roxa: 1050, verde: 575, rosa: 1100, vermelha: 1200 },
    { nome: "Não Cumpriu Regras", roxa: 20, verde: 20, rosa: 0, vermelha: 0 }
  ]
};

// Ordenar equipes por posição
const equipesOrdenadas = [...dadosGincana.equipes].sort((a, b) => b.posicao - a.posicao);
