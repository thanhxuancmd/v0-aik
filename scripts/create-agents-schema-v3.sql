-- Drop existing tables if they exist
DROP TABLE IF EXISTS agents CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- Create categories table
CREATE TABLE categories (
  slug VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create agents table
CREATE TABLE agents (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  category_slug VARCHAR(50) NOT NULL REFERENCES categories(slug) ON DELETE CASCADE,
  pricing VARCHAR(20) NOT NULL CHECK (pricing IN ('free', 'freemium', 'paid')),
  source_type VARCHAR(20) NOT NULL CHECK (source_type IN ('open_source', 'closed_source', 'api')),
  website_url TEXT,
  github_url TEXT,
  demo_url TEXT,
  logo_url TEXT,
  popularity INTEGER DEFAULT 0 CHECK (popularity >= 0 AND popularity <= 100),
  autonomy INTEGER DEFAULT 0 CHECK (autonomy >= 0 AND autonomy <= 100),
  users_count INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0.0 CHECK (rating >= 0.0 AND rating <= 5.0),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_agents_category_slug ON agents(category_slug);
CREATE INDEX idx_agents_pricing ON agents(pricing);
CREATE INDEX idx_agents_source_type ON agents(source_type);
CREATE INDEX idx_agents_is_active ON agents(is_active);
CREATE INDEX idx_agents_popularity ON agents(popularity DESC);
CREATE INDEX idx_agents_autonomy ON agents(autonomy DESC);
CREATE INDEX idx_agents_users_count ON agents(users_count DESC);
CREATE INDEX idx_agents_rating ON agents(rating DESC);
CREATE INDEX idx_agents_created_at ON agents(created_at DESC);

-- Create full-text search index
CREATE INDEX idx_agents_search ON agents USING gin(to_tsvector('english', name || ' ' || description));
