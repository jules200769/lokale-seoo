-- Migration script om contact_submissions tabel bij te werken
-- Voeg website_package veld toe en maak message optioneel
-- 
-- INSTRUCTIES:
-- 1. Ga naar je Supabase dashboard
-- 2. Ga naar SQL Editor
-- 3. Kopieer ALLEEN de SQL statements hieronder (zonder de commentaar regels)
-- 4. Plak in de SQL Editor en klik op "Run"
-- 5. Als je een error krijgt dat een kolom al bestaat, is dat OK - dan sla die regel over

-- Voeg website_package kolom toe (voer deze regel uit)
ALTER TABLE contact_submissions 
ADD COLUMN website_package VARCHAR(100);

-- Maak message kolom optioneel (verwijder NOT NULL constraint)
ALTER TABLE contact_submissions 
ALTER COLUMN message DROP NOT NULL;

