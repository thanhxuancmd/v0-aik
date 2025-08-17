-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image VARCHAR(500),
  author_name VARCHAR(100),
  author_avatar VARCHAR(500),
  tags TEXT[], -- Array of tags
  categories TEXT[], -- Array of categories
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, author_name, tags, categories, published, featured, published_at) VALUES
(
  'Xu hướng AI Agents trong năm 2024',
  'xu-huong-ai-agents-2024',
  'Khám phá những xu hướng mới nhất trong lĩnh vực AI Agents và cách chúng đang thay đổi cách làm việc.',
  '<h2>Giới thiệu về AI Agents</h2><p>AI Agents đang trở thành một trong những công nghệ quan trọng nhất trong năm 2024...</p>',
  'Nguyễn Văn A',
  ARRAY['AI', 'Technology', 'Trends'],
  ARRAY['Technology'],
  true,
  true,
  NOW()
),
(
  'Cách tạo AI Agent đầu tiên của bạn',
  'cach-tao-ai-agent-dau-tien',
  'Hướng dẫn từng bước để tạo ra AI Agent đầu tiên với các công cụ hiện đại.',
  '<h2>Bắt đầu với AI Agent</h2><p>Trong bài viết này, chúng ta sẽ học cách tạo AI Agent từ đầu...</p>',
  'Trần Thị B',
  ARRAY['Tutorial', 'AI', 'Development'],
  ARRAY['Tutorial'],
  true,
  false,
  NOW()
);
