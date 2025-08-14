-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  icon VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create agents table
CREATE TABLE IF NOT EXISTS agents (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  category_slug VARCHAR(255) NOT NULL,
  pricing VARCHAR(50) NOT NULL CHECK (pricing IN ('free', 'paid', 'freemium')),
  source_type VARCHAR(50) NOT NULL CHECK (source_type IN ('open-source', 'closed-source')),
  popularity INTEGER DEFAULT 0 CHECK (popularity >= 0 AND popularity <= 100),
  autonomy INTEGER DEFAULT 0 CHECK (autonomy >= 0 AND autonomy <= 100),
  users_count INTEGER DEFAULT 0,
  author_name VARCHAR(255) NOT NULL,
  author_avatar TEXT,
  image_url TEXT,
  tags TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT FALSE,
  github_url TEXT,
  demo_url TEXT,
  website_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_slug) REFERENCES categories(slug) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_agents_category ON agents(category_slug);
CREATE INDEX IF NOT EXISTS idx_agents_pricing ON agents(pricing);
CREATE INDEX IF NOT EXISTS idx_agents_source_type ON agents(source_type);
CREATE INDEX IF NOT EXISTS idx_agents_popularity ON agents(popularity DESC);
CREATE INDEX IF NOT EXISTS idx_agents_autonomy ON agents(autonomy DESC);
CREATE INDEX IF NOT EXISTS idx_agents_users_count ON agents(users_count DESC);
CREATE INDEX IF NOT EXISTS idx_agents_featured ON agents(featured);
CREATE INDEX IF NOT EXISTS idx_agents_updated_at ON agents(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_agents_name ON agents(name);

-- Create full-text search index
CREATE INDEX IF NOT EXISTS idx_agents_search ON agents USING gin(to_tsvector('english', name || ' ' || description));
