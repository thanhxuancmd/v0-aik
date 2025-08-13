-- Add Agent Gemini to the agents table
INSERT INTO agents (
  name, description, category, pricing, source_type, 
  popularity, autonomy, users_count, author_name, author_avatar,
  image_url, tags, featured, github_url, demo_url
) VALUES
(
  'Gemini',
  'Google''s most capable AI model with advanced reasoning, coding, and creative capabilities across text, images, and code.',
  'ai-assistant',
  'freemium',
  'closed-source',
  95,
  82,
  180000,
  'Google',
  '/placeholder-user.jpg',
  '/placeholder.svg?height=400&width=600',
  ARRAY['Multimodal', 'Reasoning', 'Coding', 'Creative', 'Google AI'],
  true,
  null,
  'https://gemini.google.com'
)
ON CONFLICT (name) DO UPDATE SET
  description = EXCLUDED.description,
  category = EXCLUDED.category,
  pricing = EXCLUDED.pricing,
  source_type = EXCLUDED.source_type,
  popularity = EXCLUDED.popularity,
  autonomy = EXCLUDED.autonomy,
  users_count = EXCLUDED.users_count,
  author_name = EXCLUDED.author_name,
  author_avatar = EXCLUDED.author_avatar,
  image_url = EXCLUDED.image_url,
  tags = EXCLUDED.tags,
  featured = EXCLUDED.featured,
  github_url = EXCLUDED.github_url,
  demo_url = EXCLUDED.demo_url,
  updated_at = CURRENT_TIMESTAMP;
