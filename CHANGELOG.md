# Changelog

Alle opmerkelijke wijzigingen in dit project worden gedocumenteerd in dit bestand.

Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.0.0/),
en dit project volgt [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Toegevoegd
- Plan van Aanpak (PVA) gemaakt voor typografie verbetering homepagina
  - Gedetailleerde strategie voor het benadrukken van belangrijke woorden met vet en schuin op homepagina
  - PVA document aangemaakt (`PVA_HOME_TYPOGRAPHY.md`) met volledige analyse van alle 5 componenten
  - Identificatie van belangrijke concepten per sectie (Hero, Problems, Services, Why Choose, CTA)
  - Strategie bepaald: vet voor belangrijke concepten/diensten/locaties/platforms, schuin voor subtiele benadrukking
  - Analyse van alle componenten: HeroSection, ProblemsSection, ServicesPreview, WhyChooseSection, CTASection
  - PVA document verwijderd na succesvolle implementatie (alle wijzigingen zijn gedocumenteerd in CHANGELOG.md)
- Plan van Aanpak (PVA) gemaakt voor typografie verbetering over-ons pagina
  - Gedetailleerde strategie voor het benadrukken van belangrijke woorden met vet en schuin
  - PVA document aangemaakt (`PVA_OVER_ONS_TYPOGRAPHY.md`) met volledige analyse van alle secties
  - Identificatie van belangrijke concepten per sectie (Hero, Mission, Team, Values, Approach, CTA)
  - Strategie bepaald: vet voor belangrijke concepten/diensten/locaties, schuin voor subtiele benadrukking
  - PVA document verwijderd na succesvolle implementatie (alle wijzigingen zijn gedocumenteerd in CHANGELOG.md)

### Gefixt
- **Contactformulier Supabase integratie gerepareerd** ✅
  - `website_package` veld toegevoegd aan database schema (`supabase-schema.sql`)
  - `message` veld gemaakt optioneel (was `NOT NULL`, nu nullable)
  - Database migratiescript toegevoegd (`supabase-migration.sql`) voor bestaande databases
  - Migratie succesvol uitgevoerd: database is bijgewerkt met nieuwe velden
  - Contactformulier werkt nu correct zonder "technische fout" meldingen
  - Verbeterde error logging in contactformulier voor betere debugging
  - Specifieke Supabase foutmeldingen worden nu getoond in plaats van generieke melding
  - Error object details worden gelogd naar console (message, details, hint, code)
- Ongebruikte state variabelen verwijderd uit dienstenpagina
  - `selectedPackage` en `setSelectedPackage` state verwijderd (niet gebruikt)
  - Ongebruikte `useState` import verwijderd

### Toegevoegd
- Database migratiescript (`supabase-migration.sql`) voor het bijwerken van bestaande databases
- CHANGELOG.md bestand aangemaakt voor het bijhouden van alle wijzigingen

### Gewijzigd
- **Over-ons pagina typografie verbeterd** ✅
  - Hero Section: Belangrijke termen benadrukt (`lokale ondernemers`, `Tilburg en omgeving`, `Google Maps` → vet; `lokale zoekresultaten` → schuin)
  - Mission Section: Kernwaarden en diensten geaccentueerd (`lokale ondernemers`, `lokale business`, `online zichtbaarheid`, `lokale SEO`, `Google Business Profile`, `Tilburg en omgeving` → vet; `ideale klanten`, `prominent verschijnt` → schuin)
  - Team Section: Functietitels en vaardigheden benadrukt (functietitels → vet; `content strategie`, `klantcommunicatie`, `technische aspecten` → schuin; `lokale SEO campagnes`, `meetbare resultaten` → vet)
  - Values Section: Alle 6 waarden met belangrijke termen geaccentueerd:
    - Resultaatgericht: `meetbare doelen`, `concrete resultaten` → vet
    - Data-gedreven: `data en analytics` → vet; `bewezen strategieën` → schuin
    - Lokale betrokkenheid: `Tilburgers`, `lokale markt` → vet
    - Transparantie: `volledige transparantie` → vet
    - Persoonlijke aanpak: `maatwerk strategieën` → vet
    - Continue verbetering: `voorop te blijven lopen` → schuin
  - Approach Section: Werkwijze termen benadrukt (`effectieve content strategieën`, `lokale SEO campagnes`, `meetbare resultaten` → vet; `technische implementatie`, `continue optimalisatie` → schuin)
  - CTA Section: Call-to-action elementen geaccentueerd (`Tilburg en omgeving`, `gratis kennismakingsgesprek` → vet)
  - Gebruik van semantische HTML tags (`<strong>` voor vet, `<em>` voor schuin) voor betere toegankelijkheid en SEO
  - `dangerouslySetInnerHTML` gebruikt voor Approach Section descriptions om HTML tags correct te renderen
  - Verbeterde visuele hiërarchie en scanbaarheid van de pagina voor gebruikers
- **Homepagina typografie verbeterd** ✅
  - HeroSection: Belangrijke termen benadrukt (`lokale ondernemers`, `Google Maps`, `Data-gedreven SEO strategieën` → vet; `lokale zoekresultaten`, `resultaat opleveren` → schuin)
  - ProblemsSection: Alle 6 problemen met belangrijke termen geaccentueerd:
    - Slecht vindbaar in Google: `Google zoekresultaten` → vet; `eerste pagina` → schuin
    - Geen zichtbaarheid in Google Maps: `Google Maps` → vet; `Lokale klanten` → schuin
    - Weinig of geen reviews: `reviews` → vet; `online reputatie` → schuin
    - Geen duidelijke SEO-strategie: `online zichtbaarheid`, `SEO-strategie` → vet
    - Zwakke backlink-profiel: `backlinks` → vet; `kwalitatieve` → schuin
    - Gebrek aan lokale content: `lokale zoektermen` → vet; `geoptimaliseerd` → schuin
    - Introductietekst: `Google`, `techniek, content en linkbuilding` → vet
  - ServicesPreview: Alleen features (achter het vinkje) vet gemaakt:
    - Google Business Profile: `Profiel optimalisatie`, `Foto's en content`, `Review management` → vet
    - Lokale SEO: `Zoekwoord onderzoek`, `Content optimalisatie`, `Technische SEO` → vet
    - Citaties & Backlinks: `Lokale directories`, `Branche-specifieke sites`, `Kwaliteitscontrole` → vet
    - Beschrijvingen en introductietekst teruggezet naar normale tekst (zoals gevraagd door gebruiker)
  - WhyChooseSection: Alle 4 voordelen met belangrijke termen geaccentueerd:
    - Lokale expertise: `Tilburgse markt`, `lokale SEO` → vet
    - Data-gedreven aanpak: `concrete data`, `meetbare resultaten` → vet
    - Persoonlijke begeleiding: `Direct contact`, `geen tussenpersonen of callcenters` → schuin
    - Toegewijd aan uw succes: `Resultaatgerichte aanpak`, `lokale zichtbaarheid` → vet
    - Introductietekst: `lokaal SEO-bureau`, `Tilburg`, `lokale ondernemers`, `lokale marktkennis` → vet; `technische expertise` → schuin
  - CTASection: Call-to-action elementen geaccentueerd (`Tilburg`, `lokale zichtbaarheid`, `gratis SEO-analyse` → vet)
  - Gebruik van semantische HTML tags (`<strong>` voor vet, `<em>` voor schuin) voor betere toegankelijkheid en SEO
  - `dangerouslySetInnerHTML` gebruikt voor dynamische content in arrays (problems, services, benefits) om HTML tags correct te renderen
  - Alle 5 componenten aangepast: HeroSection, ProblemsSection, ServicesPreview, WhyChooseSection, CTASection
  - Verbeterde visuele hiërarchie en scanbaarheid van de pagina voor gebruikers
  - Consistente typografie met de over-ons pagina
- Homepagina "Waarom kiezen voor Lokale SEO?" sectie bijgewerkt
  - "Bewezen resultaten" vervangen door "Toegewijd aan uw succes"
  - Nieuwe beschrijving: "Resultaatgerichte aanpak met duidelijke doelen voor uw lokale zichtbaarheid" (kortere tekst voor betere layout)
  - Icon aangepast van `ri-trophy-fill` naar `ri-focus-3-fill` om beter bij de nieuwe focus te passen

## [2024-12-20] - Website Pakketten & Form Validatie

### Toegevoegd
- Specifieke foutmeldingen in contactformulier
  - Validatie functie `validateForm()` toegevoegd voor alle veld controles
  - Email validatie met regex pattern
  - Specifieke error messages per veld (naam, email, bericht)
  - Meerdere fouten worden gecombineerd met bullet separator
- Auto-reset van error status wanneer gebruiker begint met typen

### Gewijzigd
- Error state structuur aangepast: `submitStatus` is nu object met `type` en `message`
- Contactformulier validatie verbeterd
  - Specifieke foutmeldingen: "Naam is verplicht", "E-mailadres is verplicht", "E-mailadres is ongeldig", "Bericht is te lang"
  - Technische foutmelding voor server errors: "Er is een technische fout opgetreden. Probeer het later opnieuw."
- Foutmelding weergave aangepast om dynamische error messages te tonen

### Toegevoegd (Website Pakketten)
- Nieuwe website pakketten sectie toegevoegd aan dienstenpagina
  - Start Website pakket: €495 eenmalig / €595 start / €120/maand bundel (14% korting)
  - Groei Website pakket: €895 eenmalig / €1.015 start / €185/maand bundel (15% korting)
  - Pro Website pakket: €1.495 eenmalig / €1.645 start / €275/maand bundel (15% korting)
- Korting badges toegevoegd aan website pakketten (14% en 15% korting)
- Aparte dropdown voor website pakketten in contactformulier
  - Nieuwe optionele dropdown "Kies een website pakket (optioneel)" toegevoegd
  - Website pakket selectie wordt opgeslagen in `website_package` veld in Supabase

### Gewijzigd
- Dienstenpagina layout aangepast om zowel SEO als Website pakketten weer te geven
- Prijsweergave voor website pakketten: eenmalige prijs, startprijs en maandelijkse bundelprijs
- Contactformulier pakketten dropdown gesplitst
  - "Kies uw pakket" dropdown bevat nu alleen SEO pakketten (Start, Groei, Pro)
  - Website pakketten verplaatst naar aparte optionele dropdown
- Form state uitgebreid met `websitePackage` veld voor website pakket selectie

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

