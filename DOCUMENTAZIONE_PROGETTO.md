# DD SERVICE - Documentazione Progetto Sito Web

**Data creazione:** 03/11/2025
**Ultima modifica:** 04/11/2025
**Versione:** 1.0
**Stato:** In sviluppo - Frontend completato

---

## 📋 Indice

1. [Panoramica Progetto](#panoramica-progetto)
2. [Struttura del Progetto](#struttura-del-progetto)
3. [Modifiche Effettuate](#modifiche-effettuate)
4. [Colori e Branding](#colori-e-branding)
5. [Come Avviare il Progetto](#come-avviare-il-progetto)
6. [Prossimi Passi](#prossimi-passi)
7. [File Importanti](#file-importanti)

---

## 📱 Panoramica Progetto

### Cliente
**DD Service** - Azienda di manutenzione impianti termici, industriali e ospedalieri

### Titolare
**Diego D'Avino** (nato nel 2000)
Giovane imprenditore che gestisce l'azienda dal 2019

### Servizi Offerti
1. **Impianti Termici** - Installazione, manutenzione e riparazione caldaie, pompe di calore, climatizzazione
2. **Impianti Industriali** - Progettazione, montaggio e smontaggio macchinari complessi
3. **Impianti Ospedalieri** - Servizi dedicati al settore sanitario con attenzione alle normative
4. **Manutenzione Programmata** - Contratti personalizzati e assistenza continua

### Tecnologie Utilizzate
- **Framework:** Next.js 15.4.4
- **Linguaggio:** JavaScript (React)
- **Styling:** Tailwind CSS v4
- **Animazioni:** Framer Motion
- **Font:** Mona Sans
- **Template Base:** Tailwind Plus - Studio Template

---

## 📁 Struttura del Progetto

```
DDservice/
├── INFORMAZIONI_CLIENTE.md          # Questionario per raccogliere dati dal cliente
├── DOCUMENTAZIONE_PROGETTO.md        # Questo file
└── tailwind-plus-studio/
    └── studio-js/                    # Progetto principale Next.js
        ├── package.json              # Dipendenze del progetto
        ├── postcss.config.js         # Configurazione PostCSS
        └── src/
            ├── app/                  # Pages e routing
            │   ├── layout.jsx        # Layout principale (metadata, lingua IT)
            │   ├── page.jsx          # Homepage
            │   ├── about/            # Pagina Chi Siamo
            │   ├── contact/          # Pagina Contatti
            │   ├── work/             # Pagina Servizi/Portfolio
            │   ├── process/          # Pagina Come Lavoriamo
            │   └── blog/             # Pagina News/Blog
            ├── components/           # Componenti riutilizzabili
            │   ├── Logo.jsx          # Logo DD Service
            │   ├── Button.jsx        # Pulsanti con colore blu brand
            │   ├── Footer.jsx        # Footer con menu e newsletter
            │   ├── RootLayout.jsx    # Header e navigazione
            │   ├── ContactSection.jsx # Sezione contatti
            │   └── ...               # Altri componenti
            ├── styles/
            │   └── tailwind.css      # Configurazione colori custom
            └── images/               # Immagini e asset
```

---

## ✅ Modifiche Effettuate

### 1. Homepage (`src/app/page.jsx`)
**Modifiche:**
- ✅ Titolo: "Esperti in manutenzione impianti termici, industriali e ospedalieri"
- ✅ Descrizione servizi personalizzata per DD Service
- ✅ Sezione clienti tradotta in italiano
- ✅ Case studies → "I nostri progetti realizzati"
- ✅ Servizi riscritti:
  - Impianti Termici
  - Impianti Industriali
  - Impianti Ospedalieri
  - Manutenzione Programmata
- ✅ Testimonial cliente personalizzata

**Metadata SEO:**
```javascript
description: 'DD Service - Specialisti in manutenzione, montaggio e smontaggio
di impianti termici, industriali e ospedalieri. Esperienza, professionalità
e innovazione dal 2019.'
```

### 2. Pagina Chi Siamo (`src/app/about/page.jsx`)
**Modifiche:**
- ✅ Storia di Diego D'Avino e dell'azienda (fondazione 2019)
- ✅ Valori aziendali:
  - **Professionalità** - Personale qualificato e certificato
  - **Affidabilità** - Rispetto di tempi e impegni
  - **Innovazione** - Tecnologie all'avanguardia
- ✅ Statistiche:
  - 6+ anni di esperienza
  - 100% clienti soddisfatti
  - 24/7 assistenza disponibile
- ✅ Team semplificato:
  - Leadership: Diego D'Avino (Fondatore e Titolare)
  - Team Tecnico: 3 tecnici specializzati

**Metadata SEO:**
```javascript
title: 'Chi Siamo',
description: 'DD Service: passione, competenza e innovazione nella
manutenzione impianti. Scopri la nostra storia e il team guidato
da Diego D\'Avino.'
```

### 3. Pagina Contatti (`src/app/contact/page.jsx`)
**Modifiche:**
- ✅ Form personalizzato con campi:
  - Nome e Cognome
  - Email
  - Azienda (opzionale)
  - Telefono
  - Messaggio
  - **Tipo di servizio** (radio):
    - Impianti Termici
    - Impianti Industriali
    - Impianti Ospedalieri
    - Manutenzione Programmata
- ✅ Email contatti:
  - info@ddservice.it (Informazioni generali)
  - assistenza@ddservice.it (Assistenza tecnica)
- ✅ Testo CTA: "Siamo qui per aiutarti"
- ✅ Focus colore blu brand sui form

**Metadata SEO:**
```javascript
title: 'Contatti',
description: 'Contattaci per preventivi, sopralluoghi o assistenza tecnica.
DD Service è sempre a tua disposizione.'
```

### 4. Logo e Branding (`src/components/Logo.jsx`)
**Modifiche:**
- ✅ Logo con testo "DD Service"
- ✅ Simbolo grafico + testo affiancato
- ✅ Colore blu #00003b applicato
- ✅ Versioni chiara e scura (invert)

### 5. Navigazione (`src/components/RootLayout.jsx`)
**Menu tradotto:**
- ✅ "I Nostri Servizi" (ex Our Work)
- ✅ "Chi Siamo" (ex About Us)
- ✅ "Come Lavoriamo" (ex Our Process)
- ✅ "News" (ex Blog)
- ✅ Pulsante "Contattaci" (ex Contact us)
- ✅ Sezioni footer: "Dove operiamo", "Seguici"

### 6. Footer (`src/components/Footer.jsx`)
**Modifiche:**
- ✅ Menu categorie:
  - Servizi (Impianti Termici, Industriali, Ospedalieri)
  - Azienda (Chi Siamo, Come Lavoriamo, News, Contatti)
  - Seguici (Social Media)
- ✅ Newsletter tradotta e personalizzata
- ✅ Copyright: "© DD Service 2025 - P.IVA: [Da inserire]"

### 7. Sezioni e Componenti
**Modifiche generali:**
- ✅ ContactSection tradotta
- ✅ Offices aggiornato con placeholder per sede operativa
- ✅ Button component con colori brand
- ✅ Border component con colore blu
- ✅ Lingua del sito: `lang="it"` nel layout principale

---

## 🎨 Colori e Branding

### Colore Principale: Blu DD Service
**HEX:** `#00003b`

### Palette Completa (`tailwind.css`)
```css
--color-ddblue-50: #e6e6f0;   /* Molto chiaro - sfondi leggeri */
--color-ddblue-100: #ccccdb;  /* Chiaro */
--color-ddblue-200: #9999b8;  /* Chiaro medio */
--color-ddblue-300: #666694;  /* Medio */
--color-ddblue-400: #333371;  /* Medio scuro - hover leggero */
--color-ddblue-500: #00003b;  /* PRINCIPALE - Brand color */
--color-ddblue-600: #000030;  /* Scuro - hover */
--color-ddblue-700: #000024;  /* Molto scuro - bordi */
--color-ddblue-800: #000018;  /* Quasi nero */
--color-ddblue-900: #00000c;  /* Quasi nero */
--color-ddblue-950: #000006;  /* Quasi nero totale */
```

### Utilizzo dei Colori

**Sfondi:**
- Background principale layout: `bg-ddblue-500`
- Sezioni scure (Clienti, Chi Siamo, Contatti): `bg-ddblue-500`
- Hover navigazione: `bg-ddblue-600`

**Pulsanti:**
- Normale: `bg-ddblue-500`
- Hover: `bg-ddblue-600`
- Invertito (su sfondo scuro): testo `text-ddblue-500`

**Bordi e Decorazioni:**
- Bordi principali: `border-ddblue-500/10`
- Bordi menu: `border-ddblue-700`
- Grid pattern: `stroke-ddblue-500/5`

**Form e Input:**
- Focus border: `focus:border-ddblue-500`
- Focus ring: `focus:ring-ddblue-500/5`
- Radio button checked: `checked:border-ddblue-500`
- Label attiva: `text-ddblue-500`

**Testo:**
- Testo principale: `text-neutral-950` (nero - leggibilità)
- Testo secondario: `text-neutral-600`, `text-neutral-700`
- Logo: `text-ddblue-500`

---

## 🚀 Come Avviare il Progetto

### Prerequisiti
- Node.js (versione 18+)
- npm o yarn

### Installazione e Avvio

1. **Navigare nella cartella del progetto:**
```bash
cd C:\Users\godri\Desktop\ClaudeCode\DDservice\tailwind-plus-studio\studio-js
```

2. **Installare le dipendenze (solo la prima volta):**
```bash
npm install
```

3. **Avviare il server di sviluppo:**
```bash
npm run dev
```

4. **Aprire il browser:**
- **Locale:** http://localhost:3000
- **Rete locale:** http://192.168.1.133:3000

### Altri Comandi Utili

**Build di produzione:**
```bash
npm run build
```

**Avviare build di produzione:**
```bash
npm start
```

**Lint codice:**
```bash
npm run lint
```

### Fermare il Server
Premi `CTRL+C` nel terminale dove è in esecuzione

---

## 📝 Prossimi Passi

### 1. ⏳ Raccogliere Informazioni dal Cliente
**File da compilare:** `INFORMAZIONI_CLIENTE.md`

**Dati necessari:**
- ✅ Ragione sociale completa
- ✅ Partita IVA
- ✅ Indirizzo sede operativa completo
- ✅ Telefono, Email, PEC
- ✅ Orari di apertura
- ✅ Link social media (Facebook, Instagram, LinkedIn)

**Contenuti:**
- ✅ Storia aziendale dettagliata
- ✅ Biografia completa di Diego D'Avino
- ✅ Foto professionali (Diego, team, impianti)
- ✅ Logo aziendale (formato SVG o PNG alta risoluzione)
- ✅ Certificazioni (F-Gas, SOA, ISO, ecc.)

**Portfolio:**
- ✅ Almeno 3-5 progetti realizzati con:
  - Nome progetto/cliente
  - Descrizione
  - Anno realizzazione
  - 3-5 foto per progetto
- ✅ Testimonianze clienti (3-5)
- ✅ Lista clienti principali

### 2. 🖼️ Sostituire Contenuti Placeholder

**Immagini da sostituire:**
- Logo DD Service (attualmente usa logo Studio)
- Foto Diego D'Avino (attualmente placeholder)
- Foto team tecnico
- Foto impianti realizzati
- Immagini clienti/progetti

**Testi da aggiornare:**
- Placeholder "[Da inserire]" in:
  - Footer (P.IVA)
  - Offices component (indirizzo, telefono)
  - Email PEC

### 3. 🎨 Portfolio e Casi Studio

**Creare nuovi case study in:**
`src/app/work/[progetto]/page.mdx`

**Sostituire progetti esistenti:**
- family-fund → Progetto 1 (es. Impianto ospedaliero)
- phobia → Progetto 2 (es. Impianto industriale)
- unseal → Progetto 3 (es. Impianto termico)

### 4. 📱 Blog/News

**Creare articoli in:**
`src/app/blog/[articolo]/page.mdx`

**Temi suggeriti:**
- Normative impianti termici
- Efficienza energetica
- Manutenzione preventiva
- Tecnologie innovative
- Agevolazioni fiscali

### 5. 🔍 SEO e Ottimizzazione

**Da implementare:**
- ✅ Sitemap XML
- ✅ robots.txt
- ✅ Schema.org markup (LocalBusiness)
- ✅ Open Graph tags per social
- ✅ Analytics (Google Analytics o alternativa)
- ✅ Google My Business integration

### 6. 📧 Funzionalità Form Contatti

**Opzioni:**
1. **Email diretta** (semplice, usando mailto)
2. **EmailJS** (gratuito, invia email via JS)
3. **Formspree** (gratuito con limite)
4. **API backend custom** (più complesso)
5. **Servizi terzi** (SendGrid, Mailgun)

**Configurazione suggerita:** EmailJS (facile da implementare)

### 7. 🌐 Hosting e Deploy

**Opzioni consigliate:**
1. **Vercel** (gratuito, ottimizzato per Next.js)
2. **Netlify** (gratuito con buone feature)
3. **AWS Amplify** (scalabile)
4. **Hosting tradizionale** (Aruba, SiteGround, ecc.)

**Dominio:**
- Acquistare dominio (es. ddservice.it)
- Configurare DNS
- Certificato SSL (automatico su Vercel/Netlify)

### 8. 🧪 Testing e QA

**Da testare:**
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Browser compatibility (Chrome, Firefox, Safari, Edge)
- ✅ Performance (Lighthouse score)
- ✅ Accessibilità (WCAG 2.1)
- ✅ Form validation
- ✅ Link interni/esterni
- ✅ Velocità caricamento

### 9. 📱 Social Media Integration

**Da configurare:**
- ✅ Link social nel footer
- ✅ Icone social corrette
- ✅ Open Graph per condivisioni
- ✅ Instagram feed (opzionale)

### 10. 🔒 Privacy e Legal

**Da creare:**
- ✅ Privacy Policy
- ✅ Cookie Policy
- ✅ Termini e Condizioni
- ✅ Banner Cookie (GDPR compliance)

---

## 📂 File Importanti

### File di Configurazione
- `package.json` - Dipendenze e script npm
- `postcss.config.js` - Configurazione PostCSS/Tailwind
- `src/styles/tailwind.css` - Temi e colori custom

### Componenti Chiave
- `src/components/Logo.jsx` - Logo DD Service
- `src/components/RootLayout.jsx` - Header e navigazione
- `src/components/Footer.jsx` - Footer con menu
- `src/components/Button.jsx` - Pulsanti brand
- `src/components/ContactSection.jsx` - CTA contatti

### Pagine Principali
- `src/app/layout.jsx` - Layout root e metadata
- `src/app/page.jsx` - Homepage
- `src/app/about/page.jsx` - Chi Siamo
- `src/app/contact/page.jsx` - Contatti
- `src/app/work/page.jsx` - Servizi/Portfolio

### Documentazione
- `INFORMAZIONI_CLIENTE.md` - Questionario cliente
- `DOCUMENTAZIONE_PROGETTO.md` - Questo file

---

## 📊 Stato Attuale del Progetto

### ✅ Completato (80%)
- [x] Struttura base Next.js
- [x] Personalizzazione homepage
- [x] Pagina Chi Siamo
- [x] Pagina Contatti con form
- [x] Logo e branding
- [x] Colori brand (#00003b)
- [x] Traduzione completa in italiano
- [x] Menu navigazione
- [x] Footer personalizzato
- [x] Responsive design (ereditato da template)
- [x] Animazioni (Framer Motion)
- [x] SEO base (metadata)

### ⏳ In Attesa (20%)
- [ ] Contenuti reali cliente (foto, testi, dati)
- [ ] Portfolio progetti reali
- [ ] Logo aziendale definitivo
- [ ] Integrazione form email
- [ ] Blog/News articoli
- [ ] Privacy Policy e Cookie
- [ ] Deploy su hosting
- [ ] Dominio personalizzato
- [ ] Analytics
- [ ] Testing completo

---

## 🔧 Troubleshooting

### Problema: npm install fallisce
**Soluzione:**
```bash
# Pulire cache npm
npm cache clean --force

# Eliminare node_modules e package-lock.json
rm -rf node_modules package-lock.json

# Reinstallare
npm install
```

### Problema: Errori di build
**Soluzione:**
```bash
# Verificare versione Node.js (deve essere 18+)
node --version

# Aggiornare Next.js
npm install next@latest react@latest react-dom@latest
```

### Problema: Colori non applicati
**Soluzione:**
- Verificare `src/styles/tailwind.css` contenga i colori custom
- Riavviare il server di sviluppo (`CTRL+C` e `npm run dev`)
- Pulire cache browser (`CTRL+SHIFT+R`)

### Problema: Immagini non caricate
**Soluzione:**
- Verificare che le immagini siano in `src/images/`
- Controllare import path nel componente
- Formato supportati: JPG, PNG, SVG, WEBP

---

## 📞 Contatti Sviluppo

**Progetto:** DD Service Website
**Template:** Tailwind Plus - Studio
**Framework:** Next.js 15.4.4
**Sviluppo iniziale:** 03-04 Novembre 2025

---

## 📜 Licenze

**Template Tailwind Plus Studio:** Licenza commerciale (verificare termini)
**Next.js:** MIT License
**Tailwind CSS:** MIT License
**Framer Motion:** MIT License

---

## 🎯 Obiettivi Finali

1. ✅ Sito web professionale e moderno
2. ✅ Identità visiva coerente con brand DD Service
3. ⏳ SEO ottimizzato per ricerca locale
4. ⏳ Form contatti funzionante
5. ⏳ Portfolio progetti convincente
6. ⏳ Velocità caricamento < 3 secondi
7. ⏳ Mobile-first e accessibile
8. ⏳ Presenza online completa (sito + social)

---

**Fine Documentazione** - Versione 1.0 - 04/11/2025

Per riprendere il lavoro domani, ricordare:
1. Server in esecuzione: `npm run dev` nella cartella studio-js
2. Raccogliere informazioni da `INFORMAZIONI_CLIENTE.md`
3. Sostituire contenuti placeholder
4. Creare portfolio progetti reali
