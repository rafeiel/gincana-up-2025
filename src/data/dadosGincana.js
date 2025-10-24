export const dadosGincana = {
  equipes: {
    "Roxa": {
      cor: "#8B3A9C",
      tarefas_antecipadas: 9900,
      tarefas_esportivas: 4000,
      tarefas_dia_efii_em: 10000,
      tarefas_dia_efi: 20000,
      penalidades: 1995,
      total: 41905
    },
    "Verde": {
      cor: "#2ECC71",
      tarefas_antecipadas: 10100,
      tarefas_esportivas: 4300,
      tarefas_dia_efii_em: 6500,
      tarefas_dia_efi: 27500,
      penalidades: 2095,
      total: 46305
    },
    "Rosa": {
      cor: "#FF69B4",
      tarefas_antecipadas: 12500,
      tarefas_esportivas: 4200,
      tarefas_dia_efii_em: 7000,
      tarefas_dia_efi: 21000,
      penalidades: 2825,
      total: 41875
    },
    "Vermelha": {
      cor: "#FF0000",
      tarefas_antecipadas: 11500,
      tarefas_esportivas: 4300,
      tarefas_dia_efii_em: 6500,
      tarefas_dia_efi: 20500,
      penalidades: 2075,
      total: 40725
    }
  },
  ranking: [
    { equipe: "Verde", pontos: 46305 },
    { equipe: "Roxa", pontos: 41905 },
    { equipe: "Rosa", pontos: 41875 },
    { equipe: "Vermelha", pontos: 40725 }
  ]
};

export const tarefasDetalhadas = {
  tarefasAntecipadas: [
    { nome: "Nome da Equipe", valores: { Roxa: 600, Verde: 500, Rosa: 500, Vermelha: 500 } },
    { nome: "Mascote", valores: { Roxa: 500, Verde: 500, Rosa: 1000, Vermelha: 500 } },
    { nome: "Grito de Guerra", valores: { Roxa: 500, Verde: 600, Rosa: 500, Vermelha: 500 } },
    { nome: "Bandeira", valores: { Roxa: 1000, Verde: 500, Rosa: 1000, Vermelha: 500 } },
    { nome: "Leitores Árvore - Fund I", valores: { Roxa: 1000, Verde: 2000, Rosa: 1500, Vermelha: 500 } },
    { nome: "Medalhas Canguru - Fund I", valores: { Roxa: 50, Verde: 400, Rosa: 500, Vermelha: 250 } },
    { nome: "Notas 3º Bim - Fund I", valores: { Roxa: 600, Verde: 1300, Rosa: 600, Vermelha: 800 } },
    { nome: "Coef. Rendimento - Fund I", valores: { Roxa: 1500, Verde: 500, Rosa: 2000, Vermelha: 1000 } },
    { nome: "Leitores Árvore - Fund II", valores: { Roxa: 1500, Verde: 500, Rosa: 1000, Vermelha: 2000 } },
    { nome: "Medalhas Canguru - Fund II/EM", valores: { Roxa: 0, Verde: 600, Rosa: 0, Vermelha: 0 } },
    { nome: "Projeto Redação", valores: { Roxa: 1300, Verde: 750, Rosa: 1950, Vermelha: 2500 } },
    { nome: "Bonificação Redação ENEM", valores: { Roxa: 0, Verde: 0, Rosa: 0, Vermelha: 400 } },
    { nome: "UERJ/Conceito", valores: { Roxa: 0, Verde: 0, Rosa: 0, Vermelha: 50 } },
    { nome: "Circuito UP - PNE", valores: { Roxa: 400, Verde: 600, Rosa: 600, Vermelha: 1000 } },
    { nome: "Circuito UP - Alunos", valores: { Roxa: 950, Verde: 1350, Rosa: 1350, Vermelha: 1000 } }
  ],
  tarefasEsportivas: [
    { nome: "Vôlei Feminino - Fund II", valores: { Roxa: 400, Verde: 200, Rosa: 300, Vermelha: 500 } },
    { nome: "Vôlei Masculino - Fund II", valores: { Roxa: 400, Verde: 200, Rosa: 500, Vermelha: 300 } },
    { nome: "Vôlei Feminino - EM", valores: { Roxa: 500, Verde: 300, Rosa: 400, Vermelha: 200 } },
    { nome: "Vôlei Masculino - EM", valores: { Roxa: 200, Verde: 400, Rosa: 300, Vermelha: 500 } },
    { nome: "Dodgeball Feminino - Fund II", valores: { Roxa: 500, Verde: 300, Rosa: 200, Vermelha: 400 } },
    { nome: "Dodgeball Feminino - EM", valores: { Roxa: 400, Verde: 500, Rosa: 300, Vermelha: 200 } },
    { nome: "Handebol Feminino - Fund II", valores: { Roxa: 500, Verde: 200, Rosa: 300, Vermelha: 400 } },
    { nome: "Handebol Feminino - EM", valores: { Roxa: 300, Verde: 400, Rosa: 500, Vermelha: 200 } },
    { nome: "Basquete Masculino - Fund II", valores: { Roxa: 200, Verde: 400, Rosa: 300, Vermelha: 500 } },
    { nome: "Basquete Masculino - EM", valores: { Roxa: 200, Verde: 500, Rosa: 300, Vermelha: 400 } },
    { nome: "Futsal Masculino - Fund II", valores: { Roxa: 200, Verde: 400, Rosa: 500, Vermelha: 300 } },
    { nome: "Futsal Masculino - EM", valores: { Roxa: 200, Verde: 500, Rosa: 300, Vermelha: 400 } }
  ],
  tarefasDiaResponsaveis: [
    { nome: "M & M", valores: { Roxa: 2000, Verde: 500, Rosa: 1500, Vermelha: 1000 } },
    { nome: "Jogo da Velha", valores: { Roxa: 2000, Verde: 500, Rosa: 1000, Vermelha: 1500 } },
    { nome: "Ordem de Cores", valores: { Roxa: 1500, Verde: 2000, Rosa: 500, Vermelha: 1000 } },
    { nome: "UNO", valores: { Roxa: 1000, Verde: 2000, Rosa: 500, Vermelha: 1500 } },
    { nome: "Combinação das Cores", valores: { Roxa: 1500, Verde: 1000, Rosa: 2000, Vermelha: 500 } },
    { nome: "Quebra-Cabeça", valores: { Roxa: 2000, Verde: 500, Rosa: 1500, Vermelha: 1000 } }
  ],
  tarefasDiaFundI: [
    { nome: "Dança das Cadeiras - Matutino", valores: { Roxa: 1500, Verde: 1000, Rosa: 500, Vermelha: 2000 } },
    { nome: "Tamanco - Matutino", valores: { Roxa: 1500, Verde: 500, Rosa: 2000, Vermelha: 1000 } },
    { nome: "Bola na Colher - Matutino", valores: { Roxa: 1000, Verde: 1500, Rosa: 500, Vermelha: 2000 } },
    { nome: "Pulando com Bola - Matutino", valores: { Roxa: 500, Verde: 2000, Rosa: 1500, Vermelha: 1000 } },
    { nome: "Bambolê em Fila - Matutino", valores: { Roxa: 2000, Verde: 1500, Rosa: 500, Vermelha: 1000 } },
    { nome: "Bola no Pé - Matutino", valores: { Roxa: 1500, Verde: 1000, Rosa: 2000, Vermelha: 500 } },
    { nome: "Copo Colorido - Matutino", valores: { Roxa: 500, Verde: 2000, Rosa: 1500, Vermelha: 1000 } },
    { nome: "Pulando com Bola - Vespertino", valores: { Roxa: 500, Verde: 2000, Rosa: 1500, Vermelha: 1000 } },
    { nome: "Copo Colorido - Vespertino", valores: { Roxa: 1500, Verde: 2000, Rosa: 1000, Vermelha: 500 } },
    { nome: "Coelhinho Sai da Toca - Vespertino", valores: { Roxa: 500, Verde: 2000, Rosa: 1000, Vermelha: 1500 } },
    { nome: "Bambolê em Fila - Vespertino", valores: { Roxa: 1500, Verde: 1000, Rosa: 500, Vermelha: 1000 } },
    { nome: "Dança das Cadeiras - Vespertino", valores: { Roxa: 1500, Verde: 1000, Rosa: 2000, Vermelha: 500 } },
    { nome: "Tamanco - Vespertino", valores: { Roxa: 1500, Verde: 2000, Rosa: 1000, Vermelha: 500 } },
    { nome: "Bola na Colher - Vespertino", valores: { Roxa: 1000, Verde: 2000, Rosa: 1500, Vermelha: 500 } },
    { nome: "Bola no Balde", valores: { Roxa: 500, Verde: 1500, Rosa: 1000, Vermelha: 2000 } },
    { nome: "Água no Balde", valores: { Roxa: 500, Verde: 1000, Rosa: 1500, Vermelha: 2000 } },
    { nome: "Queimado", valores: { Roxa: 1000, Verde: 1500, Rosa: 500, Vermelha: 2000 } },
    { nome: "Estoura Bolas", valores: { Roxa: 1500, Verde: 2000, Rosa: 1000, Vermelha: 500 } }
  ],
  penalidades: [
    { nome: "Cartões Amarelos", valores: { Roxa: 100, Verde: 100, Rosa: 300, Vermelha: 200 } },
    { nome: "Cartões Vermelhos", valores: { Roxa: 0, Verde: 0, Rosa: 0, Vermelha: 200 } },
    { nome: "Atraso no Horário", valores: { Roxa: 750, Verde: 1350, Rosa: 1350, Vermelha: 450 } },
    { nome: "Alunos sem Uniforme", valores: { Roxa: 75, Verde: 50, Rosa: 75, Vermelha: 25 } },
    { nome: "Ausência na Gincana - 1ª Semana", valores: { Roxa: 1050, Verde: 575, Rosa: 1100, Vermelha: 1200 } },
    { nome: "Não Cumpriu Regras", valores: { Roxa: 20, Verde: 20, Rosa: 0, Vermelha: 0 } }
  ]
};
