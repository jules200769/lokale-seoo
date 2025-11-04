# Changelog

Alle opmerkelijke wijzigingen in dit project worden gedocumenteerd in dit bestand.

Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.0.0/),
en dit project volgt [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Toegevoegd
- CHANGELOG.md bestand aangemaakt voor het bijhouden van alle wijzigingen

## [2024-12-19] - Tracking & Analytics

### Toegevoegd
- Google Tag Manager (GTM-NVVCP6LS) geïnstalleerd
  - GTM script toegevoegd in `<head>` sectie van `index.html`
  - GTM noscript fallback toegevoegd in `<body>` sectie van `index.html`
- Google Tag (gtag.js) toegevoegd voor tracking
  - Eerste Google Tag (G-K9CVVMD4GH) toegevoegd aan `index.html`
  - Tweede Google Tag (G-TVYLCSQQPG) toegevoegd aan `index.html`
  - Beide tags geoptimaliseerd om dezelfde `dataLayer` en `gtag` functie te delen

### Technische Details
- Alle tracking scripts zijn geplaatst direct na de opening `<head>` tag volgens Google's aanbevelingen
- GTM noscript is geplaatst direct na de opening `<body>` tag voor gebruikers zonder JavaScript

## Eerdere Wijzigingen

### [2024-12-19] - Deployment Configuratie
- `vercel.json` configuratie toegevoegd voor Vercel deployment
- Deployment instructies bijgewerkt

### [2024-12-19] - Project Setup
- Initial commit van Lokale SEO website
- Basis React/Vite project setup
- Supabase integratie
- Routing configuratie
- Basis componenten (Header, Footer)
- Pagina's: Home, Diensten, Over Ons, Contact, NotFound
- WhatsApp chat widget toegevoegd

---

## Notities voor Toekomstige Wijzigingen

Bij het maken van wijzigingen, voeg deze toe aan de CHANGELOG.md onder de juiste sectie:

- **Toegevoegd**: voor nieuwe features
- **Gewijzigd**: voor wijzigingen in bestaande functionaliteit
- **Vervangen**: voor verwijderde features
- **Gefixt**: voor bug fixes
- **Beveiliging**: voor beveiligingsupdates

Gebruik de datum in het formaat [YYYY-MM-DD] voor elke nieuwe versie.

