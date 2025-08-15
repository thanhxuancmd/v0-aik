@@ .. @@
 CREATE TABLE IF NOT EXISTS agents (
   id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   slug VARCHAR(255) UNIQUE NOT NULL,
   description TEXT NOT NULL,
-  category_slug VARCHAR(255) NOT NULL,
+  category VARCHAR(255) NOT NULL,
   pricing VARCHAR(50) NOT NULL CHECK (pricing IN ('free', 'paid', 'freemium')),
   source_type VARCHAR(50) NOT NULL CHECK (source_type IN ('open-source', 'closed-source')),
   popularity INTEGER DEFAULT 0 CHECK (popularity >= 0 AND popularity <= 100),
@@ .. @@
   website_url TEXT,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-  FOREIGN KEY (category_slug) REFERENCES categories(slug) ON DELETE CASCADE
+  FOREIGN KEY (category) REFERENCES categories(slug) ON DELETE CASCADE
 );
 
 -- Create indexes for better performance
-CREATE INDEX IF NOT EXISTS idx_agents_category ON agents(category_slug);
+CREATE INDEX IF NOT EXISTS idx_agents_category ON agents(category);
 CREATE INDEX IF NOT EXISTS idx_agents_pricing ON agents(pricing);