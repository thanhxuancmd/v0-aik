import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'agents.db')
let db: Database.Database

export function getDatabase() {
  if (!db) {
    // Ensure data directory exists
    const fs = require('fs')
    const dataDir = path.dirname(dbPath)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    
    db = new Database(dbPath)
    db.pragma('journal_mode = WAL')
    
    // Initialize database schema
    initializeDatabase()
  }
  return db
}

function initializeDatabase() {
  // Create categories table
  db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      icon TEXT NOT NULL,
      description TEXT,
      agent_count INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create agents table
  db.exec(`
    CREATE TABLE IF NOT EXISTS agents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      pricing TEXT NOT NULL CHECK (pricing IN ('free', 'paid', 'freemium')),
      source_type TEXT NOT NULL CHECK (source_type IN ('open-source', 'closed-source')),
      popularity INTEGER DEFAULT 0 CHECK (popularity >= 0 AND popularity <= 100),
      autonomy INTEGER DEFAULT 0 CHECK (autonomy >= 0 AND autonomy <= 100),
      users_count INTEGER DEFAULT 0,
      author_name TEXT NOT NULL,
      author_avatar TEXT,
      image_url TEXT,
      tags TEXT, -- JSON string
      featured BOOLEAN DEFAULT FALSE,
      github_url TEXT,
      demo_url TEXT,
      website_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category) REFERENCES categories(slug) ON DELETE CASCADE
    )
  `)

  // Create indexes
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_agents_category ON agents(category);
    CREATE INDEX IF NOT EXISTS idx_agents_pricing ON agents(pricing);
    CREATE INDEX IF NOT EXISTS idx_agents_source_type ON agents(source_type);
    CREATE INDEX IF NOT EXISTS idx_agents_popularity ON agents(popularity DESC);
    CREATE INDEX IF NOT EXISTS idx_agents_autonomy ON agents(autonomy DESC);
    CREATE INDEX IF NOT EXISTS idx_agents_users_count ON agents(users_count DESC);
    CREATE INDEX IF NOT EXISTS idx_agents_featured ON agents(featured);
    CREATE INDEX IF NOT EXISTS idx_agents_updated_at ON agents(updated_at DESC);
    CREATE INDEX IF NOT EXISTS idx_agents_name ON agents(name);
  `)

  // Seed data if tables are empty
  const categoryCount = db.prepare('SELECT COUNT(*) as count FROM categories').get() as { count: number }
  if (categoryCount.count === 0) {
    seedDatabase()
  }
}

function seedDatabase() {
  console.log('Seeding database with initial data...')
  
  // Insert categories
  const insertCategory = db.prepare(`
    INSERT OR REPLACE INTO categories (name, slug, icon, description, agent_count) 
    VALUES (?, ?, ?, ?, ?)
  `)

  const categories = [
    ['Tất cả', 'all', 'Grid3X3', 'Tất cả các AI Agents', 16],
    ['Phát triển', 'development', 'Code', 'AI Agents hỗ trợ lập trình và phát triển phần mềm', 3],
    ['AI Assistant', 'ai-assistant', 'Brain', 'Trợ lý AI thông minh cho các tác vụ đa dạng', 3],
    ['Chatbot', 'chatbot', 'MessageSquare', 'Bot trò chuyện và hỗ trợ khách hàng', 2],
    ['Thiết kế', 'design', 'Palette', 'Thiết kế đồ họa và sáng tạo với AI', 2],
    ['Tự động hóa', 'automation', 'Zap', 'Tự động hóa quy trình và workflow', 2],
    ['Video', 'video', 'Video', 'Tạo và chỉnh sửa video với AI', 1],
    ['Âm thanh', 'audio', 'Music', 'Xử lý và tạo nội dung âm thanh', 1],
    ['Robotics', 'robotics', 'Zap', 'Robot và hệ thống tự động thông minh', 1],
    ['Phân tích', 'analytics', 'BarChart3', 'Phân tích dữ liệu và business intelligence', 0],
    ['Nội dung', 'content', 'PenTool', 'Tạo và quản lý nội dung với AI', 0],
    ['Thương mại', 'ecommerce', 'ShoppingCart', 'Giải pháp AI cho thương mại điện tử', 0],
    ['Kinh doanh', 'business', 'Briefcase', 'Công cụ AI cho quản lý kinh doanh', 0]
  ]

  categories.forEach(category => {
    insertCategory.run(...category)
  })

  // Insert agents
  const insertAgent = db.prepare(`
    INSERT OR REPLACE INTO agents (
      name, slug, description, category, pricing, source_type, 
      popularity, autonomy, users_count, author_name, author_avatar,
      image_url, tags, featured, github_url, demo_url, website_url
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const agents = [
    [
      'ChatGPT', 'chatgpt',
      'Advanced conversational AI that can assist with writing, analysis, math, coding, and creative tasks.',
      'chatbot', 'freemium', 'closed-source', 98, 75, 267000, 'OpenAI', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Conversational AI', 'GPT-4', 'Multimodal', 'General Purpose']),
      true, null, 'https://chat.openai.com', 'https://openai.com/chatgpt'
    ],
    [
      'GitHub Copilot', 'github-copilot',
      'AI pair programmer that helps you write code faster with intelligent code completions and suggestions.',
      'development', 'paid', 'closed-source', 96, 45, 125000, 'GitHub', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Code Completion', 'AI Programming', 'IDE Integration', 'Productivity']),
      true, null, 'https://github.com/features/copilot', 'https://github.com/features/copilot'
    ],
    [
      'Midjourney', 'midjourney',
      'AI-powered image generation tool that creates stunning artwork and designs from text descriptions.',
      'design', 'paid', 'closed-source', 94, 25, 234000, 'Midjourney Inc', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Image Generation', 'Art', 'Creative', 'Text-to-Image']),
      true, null, 'https://midjourney.com', 'https://midjourney.com'
    ],
    [
      'LangChain', 'langchain',
      'Framework for developing applications powered by language models with chains, agents, and memory capabilities.',
      'development', 'free', 'open-source', 95, 15, 89000, 'LangChain Inc', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Framework', 'Chains', 'Memory', 'Tools']),
      true, 'https://github.com/langchain-ai/langchain', null, 'https://langchain.com'
    ],
    [
      'AutoGPT', 'autogpt',
      'Autonomous AI agent that can perform tasks independently by breaking them down into sub-tasks and executing them.',
      'automation', 'freemium', 'open-source', 88, 92, 67000, 'Significant Gravitas', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Autonomous', 'Task Planning', 'GPT-4', 'Web Browsing']),
      true, 'https://github.com/Significant-Gravitas/AutoGPT', null, 'https://agpt.co'
    ],
    [
      'Stable Diffusion', 'stable-diffusion',
      'Open-source text-to-image diffusion model capable of generating detailed images from text descriptions.',
      'design', 'free', 'open-source', 93, 20, 189000, 'Stability AI', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Text-to-Image', 'Diffusion', 'Open Source', 'Art Generation']),
      true, 'https://github.com/Stability-AI/StableDiffusion', 'https://huggingface.co/spaces/stabilityai/stable-diffusion', 'https://stability.ai'
    ],
    [
      'Anthropic Claude', 'anthropic-claude',
      'Constitutional AI assistant focused on being helpful, harmless, and honest with advanced reasoning capabilities.',
      'chatbot', 'paid', 'closed-source', 91, 65, 156000, 'Anthropic', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Constitutional AI', 'Reasoning', 'Safety', 'Helpful']),
      true, null, 'https://claude.ai', 'https://anthropic.com'
    ],
    [
      'Vercel AI SDK', 'vercel-ai-sdk',
      'Free open-source TypeScript SDK for building LLM-powered apps and agents across frameworks with unified API.',
      'development', 'free', 'open-source', 92, 4, 45000, 'Vercel', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['TypeScript', 'SDK', 'LLM', 'Framework']),
      true, 'https://github.com/vercel/ai', 'https://sdk.vercel.ai', 'https://vercel.com/ai'
    ],
    [
      'CrewAI', 'crewai',
      'Framework for orchestrating role-playing, autonomous AI agents to collaborate and complete complex tasks.',
      'ai-assistant', 'freemium', 'open-source', 76, 78, 23000, 'CrewAI Inc', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Multi-Agent', 'Role-Playing', 'Collaboration', 'Tasks']),
      false, 'https://github.com/joaomdmoura/crewAI', null, 'https://crewai.com'
    ],
    [
      'Perplexity AI', 'perplexity-ai',
      'AI-powered search engine that provides accurate answers with real-time information and source citations.',
      'ai-assistant', 'freemium', 'closed-source', 87, 42, 145000, 'Perplexity AI', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Search', 'Real-time', 'Citations', 'Research']),
      false, null, 'https://perplexity.ai', 'https://perplexity.ai'
    ],
    [
      'Gemini', 'gemini',
      'Google\'s most capable AI model with advanced reasoning, coding, and creative capabilities across text, images, and code.',
      'ai-assistant', 'freemium', 'closed-source', 95, 82, 180000, 'Google', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Multimodal', 'Reasoning', 'Coding', 'Creative', 'Google AI']),
      true, null, 'https://gemini.google.com', 'https://gemini.google.com'
    ],
    [
      'Zapier AI Actions', 'zapier-ai-actions',
      'Connect AI agents to 6000+ apps with natural language automation and workflow orchestration.',
      'automation', 'freemium', 'closed-source', 85, 56, 78000, 'Zapier', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Automation', 'Integrations', 'Workflow', 'Natural Language']),
      false, null, 'https://zapier.com/ai', 'https://zapier.com'
    ],
    [
      'Runway ML', 'runway-ml',
      'AI-powered creative suite for video generation, editing, and visual effects with cutting-edge models.',
      'video', 'freemium', 'closed-source', 89, 28, 67000, 'Runway AI', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Video Generation', 'Creative', 'Visual Effects', 'AI Models']),
      true, null, 'https://runwayml.com', 'https://runwayml.com'
    ],
    [
      'ElevenLabs', 'elevenlabs',
      'AI voice generator that creates realistic speech in any voice and style with advanced voice cloning technology.',
      'audio', 'freemium', 'closed-source', 86, 30, 45000, 'ElevenLabs', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Voice Synthesis', 'Voice Cloning', 'Text-to-Speech', 'Audio AI']),
      false, null, 'https://elevenlabs.io', 'https://elevenlabs.io'
    ],
    [
      'Unitree R1', 'unitree-r1',
      'Ultra-lightweight humanoid robot with 26 joints, multimodal AI, priced for research and education.',
      'robotics', 'paid', 'closed-source', 82, 48, 1200, 'Unitree Robotics', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['Humanoid', 'Robot', 'Multimodal', 'Research']),
      true, null, 'https://unitree.com/r1', 'https://unitree.com'
    ],
    [
      'GLM-4.5', 'glm-4-5',
      'Open-source hybrid-reasoning MoE foundation model optimized for intelligent agent tasks with 128K context and tool use.',
      'ai-assistant', 'free', 'open-source', 79, 84, 28000, 'Zhipu AI', '/placeholder-user.jpg',
      '/placeholder.jpg', JSON.stringify(['MoE', 'Foundation Model', 'Tool Use', '128K Context']),
      true, 'https://github.com/THUDM/GLM-4', null, 'https://zhipuai.cn'
    ]
  ]

  agents.forEach(agent => {
    insertAgent.run(...agent)
  })

  console.log('Database seeded successfully!')
}

export function closeDatabase() {
  if (db) {
    db.close()
  }
}