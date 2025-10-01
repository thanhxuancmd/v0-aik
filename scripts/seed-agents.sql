-- Insert sample agents
INSERT INTO agents (
  name, slug, description, category_slug, pricing, source_type, 
  popularity, autonomy, users_count, rating, github_url, demo_url, 
  website_url, image_url, tags, is_featured
) VALUES
-- AI Assistants
(
  'ChatGPT', 'chatgpt', 
  'Advanced conversational AI by OpenAI with natural language understanding',
  'chatbots',
  'freemium', 'closed-source', 95, 85, 100000000, 4.8,
  NULL, 'https://chat.openai.com', 'https://chat.openai.com',
  '/placeholder-icon.png', ARRAY['chatbot', 'text-generation', 'conversation'], true
),
(
  'Claude', 'claude',
  'Anthropic''s AI assistant focused on being helpful, harmless, and honest',
  'chatbots',
  'freemium', 'closed-source', 88, 82, 50000000, 4.7,
  NULL, 'https://claude.ai', 'https://claude.ai',
  '/placeholder-icon.png', ARRAY['assistant', 'conversation', 'analysis'], true
),
(
  'AutoGPT', 'autogpt', 
  'AI agent tự động thực hiện các tác vụ phức tạp một cách độc lập', 
  'ai-assistant', 
  'free', 'open-source', 75, 95, 500000, 4.2, 
  'https://github.com/Significant-Gravitas/AutoGPT', NULL, 'https://agpt.co', 
  '/placeholder.svg?height=40&width=40', ARRAY['autonomous', 'automation', 'tasks'], true
),
(
  'Grammarly', 'grammarly', 
  'AI-powered writing assistant for grammar and style', 
  'productivity', 
  'freemium', 'closed-source', 88, 70, 50000000, 4.6, 
  NULL, 'https://app.grammarly.com', 'https://grammarly.com', 
  '/placeholder-icon.png', ARRAY['grammar-check', 'writing-assistant', 'proofreading'], false
),
(
  'Gemini', 'gemini', 
  'Google''s multimodal AI assistant with advanced reasoning capabilities', 
  'chatbots', 
  'freemium', 'closed-source', 85, 80, 75000000, 4.6, 
  NULL, 'https://gemini.google.com', 'https://gemini.google.com', 
  '/placeholder-icon.png', ARRAY['assistant', 'reasoning', 'multimodal'], true
),

-- Development
(
  'GitHub Copilot', 'github-copilot',
  'AI pair programmer that helps write code faster',
  'code-assistant',
  'paid', 'closed-source', 88, 80, 5000000, 4.7,
  'https://github.com/features/copilot', NULL, 'https://github.com/features/copilot',
  '/placeholder-icon.png', ARRAY['coding', 'programming', 'autocomplete'], true
),
(
  'Cursor AI', 'cursor-ai',
  'Code editor thông minh với AI tích hợp sẵn cho lập trình viên',
  'development',
  'freemium', 'closed-source', 78, 65, 100000, 4.3,
  NULL, 'https://cursor.sh', 'https://cursor.sh',
  '/placeholder.svg?height=40&width=40', ARRAY['code-editor', 'ai-coding', 'productivity'], false
),
(
  'Vercel AI SDK', 'vercel-ai-sdk',
  'Framework TypeScript mã nguồn mở để xây dựng ứng dụng AI',
  'development',
  'free', 'open-source', 85, 60, 250000, 4.5,
  'https://github.com/vercel/ai', 'https://sdk.vercel.ai', 'https://sdk.vercel.ai',
  '/placeholder.svg?height=40&width=40', ARRAY['sdk', 'react', 'nextjs', 'ai-apps'], true
),
(
  'Cursor', 'cursor', 
  'AI-first code editor built for pair-programming with AI', 
  'code-assistant', 
  'freemium', 'closed-source', 82, 78, 1000000, 4.6, 
  NULL, 'https://cursor.sh', 'https://cursor.sh', 
  '/placeholder-icon.png', ARRAY['code-editor', 'ai-coding', 'productivity'], false
),
(
  'Codeium', 'codeium', 
  'Free AI-powered code completion and chat assistant', 
  'code-assistant', 
  'freemium', 'closed-source', 75, 72, 2000000, 4.4, 
  NULL, 'https://codeium.com/playground', 'https://codeium.com', 
  '/placeholder-icon.png', ARRAY['code-completion', 'chat-assistant', 'open-source'], false
),

-- Content Writing
(
  'Jasper AI', 'jasper-ai',
  'AI writing assistant for marketing copy and content creation',
  'content-creation',
  'paid', 'closed-source', 78, 75, 1000000, 4.5,
  NULL, 'https://jasper.ai/demo', 'https://jasper.ai',
  '/placeholder-icon.png', ARRAY['content', 'marketing', 'copywriting'], false
),
(
  'Copy.ai', 'copy-ai',
  'AI-powered copywriting tool for marketing and sales content',
  'content-creation',
  'freemium', 'closed-source', 72, 70, 800000, 4.3,
  NULL, 'https://app.copy.ai', 'https://copy.ai',
  '/placeholder-icon.png', ARRAY['copywriting', 'marketing', 'content'], false
),
(
  'Writesonic', 'writesonic', 
  'AI writing platform for articles, ads, and marketing content', 
  'content-creation', 
  'freemium', 'closed-source', 70, 68, 600000, 4.2, 
  NULL, 'https://app.writesonic.com', 'https://writesonic.com', 
  '/placeholder-icon.png', ARRAY['writing-platform', 'articles', 'ads'], false
),

-- Design
(
  'Midjourney', 'midjourney',
  'AI art generator creating high-quality images from text prompts',
  'image-generation',
  'paid', 'closed-source', 90, 85, 15000000, 4.9,
  NULL, 'https://discord.gg/midjourney', 'https://midjourney.com',
  '/placeholder-icon.png', ARRAY['art', 'image-generation', 'creative'], true
),
(
  'Stable Diffusion', 'stable-diffusion',
  'Open-source text-to-image diffusion model',
  'image-generation',
  'free', 'open-source', 85, 82, 10000000, 4.6,
  'https://github.com/Stability-AI/StableDiffusion', 'https://huggingface.co/spaces/stabilityai/stable-diffusion', 'https://stability.ai',
  '/placeholder-icon.png', ARRAY['image-generation', 'art', 'open-source'], true
),
(
  'Canva AI', 'canva-ai',
  'Công cụ thiết kế với AI tích hợp cho mọi người',
  'design',
  'freemium', 'closed-source', 86, 74, 25000000, 4.4,
  NULL, 'https://canva.com', 'https://canva.com',
  '/placeholder.svg?height=40&width=40', ARRAY['design-tool', 'templates', 'user-friendly'], false
),

-- Video
(
  'Runway ML', 'runway-ml',
  'Bộ công cụ AI sáng tạo cho video, hình ảnh và âm thanh',
  'video',
  'freemium', 'closed-source', 83, 78, 1000000, 4.3,
  NULL, 'https://runwayml.com', 'https://runwayml.com',
  '/placeholder.svg?height=40&width=40', ARRAY['video', 'creative', 'generation'], false
),
(
  'Synthesia', 'synthesia',
  'Nền tảng tạo video AI với avatar ảo và lồng tiếng tự nhiên',
  'video',
  'paid', 'closed-source', 76, 82, 50000, 4.2,
  NULL, 'https://synthesia.io', 'https://synthesia.io',
  '/placeholder.svg?height=40&width=40', ARRAY['video', 'avatars', 'presentation'], false
),

-- Analytics
(
  'Tableau AI', 'tableau-ai',
  'AI-powered analytics and data visualization platform',
  'data-analysis',
  'paid', 'closed-source', 74, 70, 86000, 4.1,
  NULL, 'https://tableau.com/trial', 'https://tableau.com',
  '/placeholder-icon.png', ARRAY['analytics', 'business-intelligence', 'data'], false
),
(
  'DataRobot', 'datarobot',
  'Automated machine learning platform for data science',
  'data-analysis',
  'paid', 'closed-source', 80, 85, 500000, 4.5,
  NULL, 'https://datarobot.com/demo', 'https://datarobot.com',
  '/placeholder-icon.png', ARRAY['automated-ml', 'data-science', 'platform'], true
),

-- Automation
(
  'Zapier AI', 'zapier-ai',
  'AI-powered workflow automation platform',
  'automation',
  'freemium', 'closed-source', 80, 88, 5000000, 4.4,
  NULL, 'https://zapier.com', 'https://zapier.com',
  '/placeholder-icon.png', ARRAY['automation', 'workflow', 'integration'], false
),

-- Search
(
  'Perplexity AI', 'perplexity-ai',
  'AI-powered search engine and research assistant',
  'research',
  'freemium', 'closed-source', 82, 78, 10000000, 4.5,
  NULL, 'https://perplexity.ai', 'https://perplexity.ai',
  '/placeholder-icon.png', ARRAY['search', 'research', 'information'], false
),

-- E-commerce
(
  'Shopify Magic', 'shopify-magic',
  'Bộ công cụ AI tích hợp trong Shopify cho thương mại điện tử',
  'e-commerce',
  'paid', 'closed-source', 72, 68, 2000000, 4.0,
  NULL, 'https://shopify.com/magic', 'https://shopify.com/magic',
  '/placeholder.svg?height=40&width=40', ARRAY['e-commerce', 'shopify', 'retail'], false
),

-- Productivity
(
  'Notion AI', 'notion-ai',
  'AI writing assistant integrated into Notion workspace',
  'productivity',
  'freemium', 'closed-source', 85, 75, 30000000, 4.5,
  NULL, 'https://notion.so', 'https://notion.so/ai',
  '/placeholder-icon.png', ARRAY['writing-assistant', 'notion', 'productivity'], true
)

ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  category_slug = EXCLUDED.category_slug,
  pricing = EXCLUDED.pricing,
  source_type = EXCLUDED.source_type,
  website_url = EXCLUDED.website_url,
  github_url = EXCLUDED.github_url,
  demo_url = EXCLUDED.demo_url,
  image_url = EXCLUDED.image_url,
  tags = EXCLUDED.tags,
  is_featured = EXCLUDED.is_featured,
  updated_at = CURRENT_TIMESTAMP;
