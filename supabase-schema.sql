-- Contact formulier tabel
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT,
  service VARCHAR(100),
  website_package VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed'))
);

-- Index voor snelle queries
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);

-- RLS (Row Level Security) inschakelen
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy voor het toevoegen van nieuwe submissions (iedereen kan toevoegen)
CREATE POLICY "Allow public insert on contact_submissions" 
ON contact_submissions FOR INSERT 
WITH CHECK (true);

-- Policy voor het lezen van submissions (alleen geauthenticeerde gebruikers)
CREATE POLICY "Allow authenticated read on contact_submissions" 
ON contact_submissions FOR SELECT 
TO authenticated 
USING (true);
