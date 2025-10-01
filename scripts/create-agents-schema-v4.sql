-- Drop existing tables if they exist
DROP TABLE IF EXISTS agents CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- Create categories table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  agent_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create agents table
CREATE TABLE agents (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
  pricing VARCHAR(50) CHECK (pricing IN ('free', 'freemium', 'paid')) DEFAULT 'free',
  source_type VARCHAR(50) CHECK (source_type IN ('open_source', 'closed_source', 'api')) DEFAULT 'closed_source',
  website_url TEXT,
  github_url TEXT,
  demo_url TEXT,
  popularity INTEGER CHECK (popularity >= 0 AND popularity <= 100) DEFAULT 0,
  autonomy INTEGER CHECK (autonomy >= 0 AND autonomy <= 100) DEFAULT 0,
  users_count INTEGER DEFAULT 0,
  rating DECIMAL(3,2) CHECK (rating >= 0 AND rating <= 5) DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_agents_category_id ON agents(category_id);
CREATE INDEX idx_agents_pricing ON agents(pricing);
CREATE INDEX idx_agents_source_type ON agents(source_type);
CREATE INDEX idx_agents_popularity ON agents(popularity);
CREATE INDEX idx_agents_autonomy ON agents(autonomy);
CREATE INDEX idx_agents_users_count ON agents(users_count);
CREATE INDEX idx_agents_rating ON agents(rating);
CREATE INDEX idx_agents_is_active ON agents(is_active);
CREATE INDEX idx_agents_name_search ON agents USING gin(to_tsvector('english', name));
CREATE INDEX idx_agents_description_search ON agents USING gin(to_tsvector('english', description));

-- Function to update agent count in categories
CREATE OR REPLACE FUNCTION update_category_agent_count()
RETURNS TRIGGER AS $$
BEGIN
  -- Update the old category if it exists
  IF TG_OP = 'UPDATE' AND OLD.category_id IS NOT NULL THEN
    UPDATE categories 
    SET agent_count = (
      SELECT COUNT(*) 
      FROM agents 
      WHERE category_id = OLD.category_id AND is_active = true
    )
    WHERE id = OLD.category_id;
  END IF;
  
  -- Update the new category if it exists
  IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') AND NEW.category_id IS NOT NULL THEN
    UPDATE categories 
    SET agent_count = (
      SELECT COUNT(*) 
      FROM agents 
      WHERE category_id = NEW.category_id AND is_active = true
    )
    WHERE id = NEW.category_id;
  END IF;
  
  -- Handle DELETE
  IF TG_OP = 'DELETE' AND OLD.category_id IS NOT NULL THEN
    UPDATE categories 
    SET agent_count = (
      SELECT COUNT(*) 
      FROM agents 
      WHERE category_id = OLD.category_id AND is_active = true
    )
    WHERE id = OLD.category_id;
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER trigger_update_category_agent_count
  AFTER INSERT OR UPDATE OR DELETE ON agents
  FOR EACH ROW
  EXECUTE FUNCTION update_category_agent_count();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create update triggers for timestamps
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_agents_updated_at
  BEFORE UPDATE ON agents
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
