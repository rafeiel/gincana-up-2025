# 🚀 GUIA RÁPIDO DE DEPLOY - Gincana UP 2025

## ⚡ MÉTODO MAIS FÁCIL: NETLIFY (5 minutos)

### Passo 1: Criar conta no Netlify
1. Acesse: https://www.netlify.com/
2. Clique em "Sign up"
3. Escolha "Continue with GitHub" (recomendado) ou email

### Passo 2: Fazer Deploy
1. Após login, clique em "Add new site" > "Deploy manually"
2. Arraste e solte a **PASTA COMPLETA** `gincana-up-2025` na área indicada
3. Aguarde o build (3-5 minutos)
4. Pronto! Você receberá um link tipo: `random-name-123.netlify.app`

### Passo 3: Personalizar o domínio (Opcional)
1. Clique em "Domain settings"
2. Clique em "Options" > "Edit site name"
3. Escolha um nome: `gincana-up-2025.netlify.app`

### Passo 4: Gerar QR Code
1. Copie o link do seu site
2. Acesse: https://www.qr-code-generator.com/
3. Cole o link
4. Baixe o QR Code

---

## 🔥 ALTERNATIVA: VERCEL (Também muito fácil)

### Passo 1: Criar conta
1. Acesse: https://vercel.com/
2. Faça login com GitHub

### Passo 2: Deploy
1. Clique em "Add New" > "Project"
2. Import do GitHub ou arraste a pasta
3. Vercel detecta automaticamente que é React
4. Clique em "Deploy"

---

## 💻 MÉTODO LOCAL (Para testar antes)

### Requisitos:
- Node.js instalado (https://nodejs.org/)

### Comandos:
```bash
# 1. Entrar na pasta
cd gincana-up-2025

# 2. Instalar dependências
npm install

# 3. Rodar localmente
npm start

# 4. Abrir no navegador
# http://localhost:3000
```

---

## 📝 ATUALIZAR DADOS DEPOIS

Se precisar atualizar os resultados:

1. Edite o arquivo: `src/data/dadosGincana.js`
2. Faça novo deploy:
   - **Netlify**: Arraste a pasta novamente
   - **Vercel**: Commit no GitHub (se conectado)

---

## 🖼️ ADICIONAR LOGOS

1. Coloque as imagens na pasta `public/`
2. Nomeie como:
   - `logo-up.png`
   - `logo-gincana.png`
   - `logo-unesco.png`

3. Edite os arquivos das páginas para usar:
```jsx
// Exemplo no HomePage.jsx
<img src="/logo-up.png" alt="Logo UP" style={{width: '200px'}} />
```

---

## ⚙️ CONFIGURAÇÕES IMPORTANTES

### Para telão 2m x 4m (16:9):
- O site já está otimizado!
- Use modo fullscreen (F11)
- Recomendo Chrome ou Firefox

### Para responsáveis (mobile):
- O site é responsivo
- Gere o QR Code
- Teste em diferentes dispositivos

---

## 🆘 PROBLEMAS COMUNS

**Erro ao instalar dependências:**
```bash
npm cache clean --force
npm install
```

**Site não carrega as rotas:**
- Certifique-se que o `netlify.toml` está presente
- No Netlify/Vercel, as configurações são automáticas

**Logos não aparecem:**
- Coloque na pasta `public/`
- Use caminho `/logo.png` (com barra no início)

---

## 📞 LINKS ÚTEIS

- **Netlify**: https://www.netlify.com/
- **Vercel**: https://vercel.com/
- **QR Code Generator**: https://www.qr-code-generator.com/
- **Testar responsividade**: https://responsivedesignchecker.com/

---

## ✅ CHECKLIST FINAL

- [ ] Site no ar (Netlify/Vercel)
- [ ] Link funcionando
- [ ] QR Code gerado
- [ ] Logos adicionados (opcional)
- [ ] Testado no telão
- [ ] Testado no celular
- [ ] Navegação entre páginas OK

---

**Boa sorte com a apresentação! 🎉**
**O Futuro é Exponencial! 🚀**
