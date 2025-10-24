# 🏆 Gincana UP 2025 - Site de Resultados

Site oficial para apresentação dos resultados da **5ª Gincana Estudantil do Colégio Ueda Peçanha**.

## 🎯 Sobre o Projeto

Este site foi desenvolvido para exibir os resultados da Gincana Estudantil 2025 em um telão de **2m x 4m** (formato 16:9) durante o evento de encerramento, além de ficar disponível para acesso via QR Code pelos responsáveis e alunos.

## 📊 Resultado Final

- 🏆 **1º Lugar**: Equipe VERDE - 46.305 pontos
- 🥈 **2º Lugar**: Equipe ROSA - 41.875 pontos  
- 🥉 **3º Lugar**: Equipe ROXA - 41.905 pontos
- **4º Lugar**: Equipe VERMELHA - 40.725 pontos

## 🌐 Páginas do Site

### 1. **index.html** - Premiação com Animação
- Exibe os resultados finais com fade-in sequencial (4º → 3º → 2º → 1º)
- Efeito de confetes ao revelar a campeã
- Tempo de transição: 3 segundos entre cada posição
- Ideal para telão durante o evento

### 2. **campeoes.html** - Parabéns à Campeã
- Página especial dedicada à Equipe Verde (campeã)
- Destaca os principais feitos e conquistas
- Lista completa das premiações
- Efeitos visuais celebratórios

### 3. **resultados.html** - Detalhes Completos
- Ranking geral em tabela
- 5 categorias em tabs navegáveis:
  - 📋 Tarefas Antecipadas (DNA + Caça ao Tesouro)
  - ⚽ Tarefas Esportivas  
  - 👨‍👩‍👧‍👦 Tarefas do Dia (Responsáveis)
  - 🎯 Tarefas do Dia (Fundamental I)
  - ⚠️ Penalidades
- Destaque automático para maiores pontuações (🏆)
- Totais por categoria

## 🎨 Características

- ✅ **100% Responsivo** - Funciona em telão, desktop, tablet e mobile
- ✅ **Animações Suaves** - Fade-in, confetes, pulse effects
- ✅ **Cores das Equipes** - Cada equipe tem sua identidade visual
- ✅ **Performance Otimizada** - Carregamento rápido
- ✅ **Sem Dependências** - HTML, CSS e JavaScript puro
- ✅ **Acessível** - Pode ser visualizado por QR Code

## 🚀 Deploy no Netlify

### Opção 1: Deploy via Drag & Drop (Mais Fácil)

1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a pasta do projeto
3. Site publicado instantaneamente!

### Opção 2: Deploy via GitHub (Recomendado)

1. **Criar repositório no GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Gincana UP 2025"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/gincana-up-2025.git
   git push -u origin main
   ```

2. **Conectar ao Netlify:**
   - Acesse [app.netlify.com](https://app.netlify.com)
   - Clique em "Add new site" → "Import an existing project"
   - Escolha "GitHub" e selecione o repositório
   - Configure:
     - Build command: (deixe vazio)
     - Publish directory: `.`
   - Clique em "Deploy site"

## 📁 Estrutura do Projeto

```
gincana-up-2025/
├── index.html              # Página principal (premiação)
├── campeoes.html          # Página da campeã
├── resultados.html        # Resultados detalhados
├── netlify.toml           # Configuração do Netlify
├── README.md              # Este arquivo
├── css/
│   └── style.css          # Estilos principais
├── js/
│   ├── data.js            # Dados da gincana
│   └── resultados.js      # Lógica dos resultados
└── public/
    └── images/
        ├── logo-up.png         # (substituir placeholder)
        ├── logo-gincana.png    # (substituir placeholder)
        └── logo-unesco.png     # (substituir placeholder)
```

## 🖼️ Substituir os Logos

Os logos atualmente são placeholders. Para adicionar os logos reais:

1. Adicione as imagens na pasta `public/images/`
2. Edite os 3 arquivos HTML (index, campeoes, resultados) substituindo:

```html
<!-- De: -->
<div class="logo logo-up">
  LOGO<br>COLÉGIO UP
</div>

<!-- Para: -->
<div class="logo logo-up">
  <img src="public/images/logo-up.png" alt="Colégio UP" style="width: 100%; height: 100%; object-fit: contain;">
</div>
```

## 🔧 Atualizações Futuras

Para atualizar os dados da gincana, edite o arquivo `js/data.js` e modifique os valores conforme necessário.

## 📞 Suporte

Para dúvidas ou ajustes:
- 📧 Email: lidiane.nobre@colegioup.com.br
- 🌐 Site: [colegioup.com.br](https://colegioup.com.br)

---

**Desenvolvido com ❤️ para a 5ª Gincana Estudantil UP 2025**

🏫 Colégio Ueda Peçanha - Escola Associada UNESCO
