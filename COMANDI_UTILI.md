# Comandi Utili - DD Service

## 🚀 Avviare il Sito

```bash
# Naviga nella cartella del progetto
cd C:\Users\godri\Desktop\ClaudeCode\DDservice\tailwind-plus-studio\studio-js

# Avvia il server di sviluppo
npm run dev
```

**Link:** http://localhost:3000

---

## 📦 Installazione (prima volta)

```bash
cd C:\Users\godri\Desktop\ClaudeCode\DDservice\tailwind-plus-studio\studio-js
npm install
```

---

## 🔧 Altri Comandi

### Build per produzione
```bash
npm run build
```

### Avviare build di produzione
```bash
npm start
```

### Controllare errori codice
```bash
npm run lint
```

### Pulire e reinstallare tutto
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🛑 Fermare il Server

Premi `CTRL + C` nel terminale

---

## 📂 Navigazione Cartelle

### Vai alla cartella principale
```bash
cd C:\Users\godri\Desktop\ClaudeCode\DDservice
```

### Vai alla cartella del codice
```bash
cd C:\Users\godri\Desktop\ClaudeCode\DDservice\tailwind-plus-studio\studio-js
```

### Torna indietro di una cartella
```bash
cd ..
```

### Lista file nella cartella
```bash
dir      # Windows
ls       # Se usi Git Bash
```

---

## 🎨 File da Modificare

### Homepage
```
src/app/page.jsx
```

### Chi Siamo
```
src/app/about/page.jsx
```

### Contatti
```
src/app/contact/page.jsx
```

### Logo
```
src/components/Logo.jsx
```

### Menu Navigazione
```
src/components/RootLayout.jsx
```

### Footer
```
src/components/Footer.jsx
```

### Colori Brand
```
src/styles/tailwind.css
```

---

## 🌐 Link Utili

**Sito Locale:** http://localhost:3000
**Sito Rete:** http://192.168.1.133:3000

**Next.js Docs:** https://nextjs.org/docs
**Tailwind CSS:** https://tailwindcss.com/docs
**React:** https://react.dev

---

## 📝 Editor Consigliati

- **Visual Studio Code** (gratuito, consigliato)
- **WebStorm** (a pagamento, professionale)
- **Sublime Text** (leggero)

### Estensioni VS Code Consigliate
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint

---

## 🐛 Risoluzione Problemi

### Il server non parte
```bash
# Verifica Node.js installato
node --version

# Reinstalla dipendenze
npm install
```

### Errori durante npm install
```bash
# Pulisci cache
npm cache clean --force

# Rimuovi e reinstalla
rm -rf node_modules package-lock.json
npm install
```

### Modifiche non visibili
```bash
# Riavvia il server
# Premi CTRL+C poi
npm run dev

# Oppure pulisci cache browser
# CTRL+SHIFT+R (Windows/Linux)
# CMD+SHIFT+R (Mac)
```

### Porta 3000 già in uso
```bash
# Usa un'altra porta
PORT=3001 npm run dev
```

---

## 📱 Test su Dispositivi

### Smartphone/Tablet stesso WiFi
1. Assicurati PC e smartphone siano sulla stessa rete WiFi
2. Apri browser su smartphone
3. Vai su: http://192.168.1.133:3000

### Simulare mobile su PC
1. Apri Chrome DevTools (F12)
2. Clicca icona mobile in alto
3. Seleziona dispositivo (iPhone, iPad, ecc.)

---

## 💾 Salvare le Modifiche

### Git (se configurato)
```bash
# Aggiungi tutti i file modificati
git add .

# Crea commit
git commit -m "Descrizione modifiche"

# Carica su GitHub (se configurato)
git push
```

### Backup Manuale
1. Copia tutta la cartella `DDservice`
2. Incolla in una cartella di backup
3. Rinomina con data (es. `DDservice_04-11-2025`)

---

## 🚀 Deploy su Vercel (quando pronto)

```bash
# Installa Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

---

## 📧 Email di Test Form

Per testare il form contatti localmente, puoi usare:
- **Console browser** (F12) per vedere i dati inviati
- **EmailJS** (gratuito, facile configurazione)
- **Formspree** (gratuito con limite)

---

## ⌨️ Shortcut Utili

**Visual Studio Code:**
- `CTRL + S` → Salva file
- `CTRL + P` → Cerca file
- `CTRL + Shift + P` → Palette comandi
- `CTRL + B` → Mostra/nascondi sidebar
- `CTRL + J` → Mostra/nascondi terminale
- `ALT + Shift + F` → Formatta codice

**Browser:**
- `F12` → Apri DevTools
- `CTRL + Shift + R` → Ricarica e pulisci cache
- `CTRL + Shift + I` → Ispeziona elemento

---

**Fine Comandi Utili**
