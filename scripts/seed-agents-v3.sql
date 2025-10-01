-- Insert AI agents
INSERT INTO agents (
  name, description, category_slug, pricing, source_type, 
  website_url, github_url, demo_url, logo_url,
  popularity, autonomy, users_count, rating, is_active
) VALUES
('ChatGPT', 'Advanced conversational AI by OpenAI with natural language understanding', 'chatbots', 'freemium', 'closed_source', 'https://chat.openai.com', NULL, 'https://chat.openai.com', '/placeholder-icon.png', 95, 85, 100000000, 4.8, true),
('Claude', 'Anthropic''s AI assistant focused on helpful, harmless, and honest interactions', 'chatbots', 'freemium', 'closed_source', 'https://claude.ai', NULL, 'https://claude.ai', '/placeholder-icon.png', 90, 80, 50000000, 4.7, true),
('Gemini', 'Google''s multimodal AI model for text, code, and creative tasks', 'chatbots', 'freemium', 'closed_source', 'https://gemini.google.com', NULL, 'https://gemini.google.com', '/placeholder-icon.png', 88, 82, 75000000, 4.6, true),
('GitHub Copilot', 'AI pair programmer that helps you write code faster', 'coding', 'paid', 'closed_source', 'https://github.com/features/copilot', NULL, NULL, '/placeholder-icon.png', 92, 75, 5000000, 4.5, true),
('Cursor', 'AI-first code editor built for pair-programming with AI', 'coding', 'freemium', 'closed_source', 'https://cursor.sh', NULL, 'https://cursor.sh', '/placeholder-icon.png', 85, 70, 1000000, 4.4, true),
('Codeium', 'Free AI-powered code completion and chat assistant', 'coding', 'freemium', 'closed_source', 'https://codeium.com', NULL, 'https://codeium.com', '/placeholder-icon.png', 80, 68, 2000000, 4.3, true),
('Grammarly', 'AI writing assistant for grammar, spelling, and style', 'writing', 'freemium', 'closed_source', 'https://grammarly.com', NULL, 'https://grammarly.com', '/placeholder-icon.png', 88, 60, 30000000, 4.4, true),
('Jasper', 'AI content creation platform for marketing and business', 'writing', 'paid', 'closed_source', 'https://jasper.ai', NULL, 'https://jasper.ai', '/placeholder-icon.png', 82, 65, 1500000, 4.2, true),
('Copy.ai', 'AI copywriting tool for marketing content and sales copy', 'writing', 'freemium', 'closed_source', 'https://copy.ai', NULL, 'https://copy.ai', '/placeholder-icon.png', 78, 62, 2500000, 4.1, true),
('DALL-E 3', 'OpenAI''s advanced text-to-image generation model', 'image-generation', 'paid', 'closed_source', 'https://openai.com/dall-e-3', NULL, NULL, '/placeholder-icon.png', 90, 85, 10000000, 4.6, true),
('Midjourney', 'AI art generator creating stunning images from text prompts', 'image-generation', 'paid', 'closed_source', 'https://midjourney.com', NULL, 'https://midjourney.com', '/placeholder-icon.png', 93, 88, 15000000, 4.7, true),
('Stable Diffusion', 'Open-source text-to-image diffusion model', 'image-generation', 'free', 'open_source', 'https://stability.ai', 'https://github.com/Stability-AI/StableDiffusion', 'https://huggingface.co/spaces/stabilityai/stable-diffusion', '/placeholder-icon.png', 87, 90, 8000000, 4.5, true),
('RunwayML', 'AI-powered creative tools for video, image, and audio generation', 'video-audio', 'freemium', 'closed_source', 'https://runwayml.com', NULL, 'https://runwayml.com', '/placeholder-icon.png', 85, 80, 3000000, 4.4, true),
('ElevenLabs', 'AI voice generation and cloning with realistic speech synthesis', 'video-audio', 'freemium', 'closed_source', 'https://elevenlabs.io', NULL, 'https://elevenlabs.io', '/placeholder-icon.png', 83, 75, 2000000, 4.3, true),
('Murf', 'AI voice generator for voiceovers, podcasts, and presentations', 'video-audio', 'freemium', 'closed_source', 'https://murf.ai', NULL, 'https://murf.ai', '/placeholder-icon.png', 78, 70, 1500000, 4.2, true),
('DataRobot', 'Enterprise AI platform for automated machine learning', 'data-analysis', 'paid', 'closed_source', 'https://datarobot.com', NULL, 'https://datarobot.com', '/placeholder-icon.png', 80, 85, 500000, 4.3, true),
('Notion AI', 'AI writing assistant integrated into Notion workspace', 'productivity', 'freemium', 'closed_source', 'https://notion.so/product/ai', NULL, 'https://notion.so/product/ai', '/placeholder-icon.png', 85, 65, 20000000, 4.4, true),
('Perplexity', 'AI-powered search engine with real-time information', 'research', 'freemium', 'closed_source', 'https://perplexity.ai', NULL, 'https://perplexity.ai', '/placeholder-icon.png', 82, 78, 5000000, 4.3, true)
ON CONFLICT (name) DO UPDATE SET
  description = EXCLUDED.description,
  category_slug = EXCLUDED.category_slug,
  pricing = EXCLUDED.pricing,
  source_type = EXCLUDED.source_type,
  website_url = EXCLUDED.website_url,
  github_url = EXCLUDED.github_url,
  demo_url = EXCLUDED.demo_url,
  logo_url = EXCLUDED.logo_url,
  popularity = EXCLUDED.popularity,
  autonomy = EXCLUDED.autonomy,
  users_count = EXCLUDED.users_count,
  rating = EXCLUDED.rating,
  is_active = EXCLUDED.is_active,
  updated_at = CURRENT_TIMESTAMP;
