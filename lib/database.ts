// Mock database implementation for WebContainer compatibility
// This avoids native binding issues with better-sqlite3 and browser-only issues with sql.js

interface Agent {
  id: number
  name: string
  slug: string
  description: string
  category: string
  pricing: 'free' | 'paid' | 'freemium'
  source_type: 'open-source' | 'closed-source'
  popularity: number
  autonomy: number
  users_count: number
  author_name: string
  author_avatar: string
  image_url: string
  tags: string
  featured: boolean
  github_url?: string
  demo_url?: string
  website_url?: string
  created_at: string
  updated_at: string
}

interface Category {
  id: number
  name: string
  slug: string
  icon: string
  description: string
  agent_count: number
  created_at: string
  updated_at: string
}

// Mock data
const mockAgents: Agent[] = [
  {
    id: 1,
    name: 'ChatGPT',
    slug: 'chatgpt',
    description: 'Advanced conversational AI that can assist with writing, analysis, math, coding, and creative tasks.',
    category: 'chatbot',
    pricing: 'freemium',
    source_type: 'closed-source',
    popularity: 98,
    autonomy: 75,
    users_count: 267000,
    author_name: 'OpenAI',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Conversational AI', 'GPT-4', 'Multimodal', 'General Purpose']),
    featured: true,
    github_url: null,
    demo_url: 'https://chat.openai.com',
    website_url: 'https://openai.com/chatgpt',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    description: 'AI pair programmer that helps you write code faster with intelligent code completions and suggestions.',
    category: 'development',
    pricing: 'paid',
    source_type: 'closed-source',
    popularity: 96,
    autonomy: 45,
    users_count: 125000,
    author_name: 'GitHub',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Code Completion', 'AI Programming', 'IDE Integration', 'Productivity']),
    featured: true,
    github_url: null,
    demo_url: 'https://github.com/features/copilot',
    website_url: 'https://github.com/features/copilot',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    name: 'Midjourney',
    slug: 'midjourney',
    description: 'AI-powered image generation tool that creates stunning artwork and designs from text descriptions.',
    category: 'design',
    pricing: 'paid',
    source_type: 'closed-source',
    popularity: 94,
    autonomy: 25,
    users_count: 234000,
    author_name: 'Midjourney Inc',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Image Generation', 'Art', 'Creative', 'Text-to-Image']),
    featured: true,
    github_url: null,
    demo_url: 'https://midjourney.com',
    website_url: 'https://midjourney.com',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    name: 'LangChain',
    slug: 'langchain',
    description: 'Framework for developing applications powered by language models with chains, agents, and memory capabilities.',
    category: 'development',
    pricing: 'free',
    source_type: 'open-source',
    popularity: 95,
    autonomy: 15,
    users_count: 89000,
    author_name: 'LangChain Inc',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Framework', 'Chains', 'Memory', 'Tools']),
    featured: true,
    github_url: 'https://github.com/langchain-ai/langchain',
    demo_url: null,
    website_url: 'https://langchain.com',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    name: 'AutoGPT',
    slug: 'autogpt',
    description: 'Autonomous AI agent that can perform tasks independently by breaking them down into sub-tasks and executing them.',
    category: 'automation',
    pricing: 'freemium',
    source_type: 'open-source',
    popularity: 88,
    autonomy: 92,
    users_count: 67000,
    author_name: 'Significant Gravitas',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Autonomous', 'Task Planning', 'GPT-4', 'Web Browsing']),
    featured: true,
    github_url: 'https://github.com/Significant-Gravitas/AutoGPT',
    demo_url: null,
    website_url: 'https://agpt.co',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 6,
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    description: 'Open-source text-to-image diffusion model capable of generating detailed images from text descriptions.',
    category: 'design',
    pricing: 'free',
    source_type: 'open-source',
    popularity: 93,
    autonomy: 20,
    users_count: 189000,
    author_name: 'Stability AI',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Text-to-Image', 'Diffusion', 'Open Source', 'Art Generation']),
    featured: true,
    github_url: 'https://github.com/Stability-AI/StableDiffusion',
    demo_url: 'https://huggingface.co/spaces/stabilityai/stable-diffusion',
    website_url: 'https://stability.ai',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 7,
    name: 'Anthropic Claude',
    slug: 'anthropic-claude',
    description: 'Constitutional AI assistant focused on being helpful, harmless, and honest with advanced reasoning capabilities.',
    category: 'chatbot',
    pricing: 'paid',
    source_type: 'closed-source',
    popularity: 91,
    autonomy: 65,
    users_count: 156000,
    author_name: 'Anthropic',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Constitutional AI', 'Reasoning', 'Safety', 'Helpful']),
    featured: true,
    github_url: null,
    demo_url: 'https://claude.ai',
    website_url: 'https://anthropic.com',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 8,
    name: 'Vercel AI SDK',
    slug: 'vercel-ai-sdk',
    description: 'Free open-source TypeScript SDK for building LLM-powered apps and agents across frameworks with unified API.',
    category: 'development',
    pricing: 'free',
    source_type: 'open-source',
    popularity: 92,
    autonomy: 4,
    users_count: 45000,
    author_name: 'Vercel',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['TypeScript', 'SDK', 'LLM', 'Framework']),
    featured: true,
    github_url: 'https://github.com/vercel/ai',
    demo_url: 'https://sdk.vercel.ai',
    website_url: 'https://vercel.com/ai',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 9,
    name: 'CrewAI',
    slug: 'crewai',
    description: 'Framework for orchestrating role-playing, autonomous AI agents to collaborate and complete complex tasks.',
    category: 'ai-assistant',
    pricing: 'freemium',
    source_type: 'open-source',
    popularity: 76,
    autonomy: 78,
    users_count: 23000,
    author_name: 'CrewAI Inc',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Multi-Agent', 'Role-Playing', 'Collaboration', 'Tasks']),
    featured: false,
    github_url: 'https://github.com/joaomdmoura/crewAI',
    demo_url: null,
    website_url: 'https://crewai.com',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 10,
    name: 'Perplexity AI',
    slug: 'perplexity-ai',
    description: 'AI-powered search engine that provides accurate answers with real-time information and source citations.',
    category: 'ai-assistant',
    pricing: 'freemium',
    source_type: 'closed-source',
    popularity: 87,
    autonomy: 42,
    users_count: 145000,
    author_name: 'Perplexity AI',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Search', 'Real-time', 'Citations', 'Research']),
    featured: false,
    github_url: null,
    demo_url: 'https://perplexity.ai',
    website_url: 'https://perplexity.ai',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 11,
    name: 'Gemini',
    slug: 'gemini',
    description: 'Google\'s most capable AI model with advanced reasoning, coding, and creative capabilities across text, images, and code.',
    category: 'ai-assistant',
    pricing: 'freemium',
    source_type: 'closed-source',
    popularity: 95,
    autonomy: 82,
    users_count: 180000,
    author_name: 'Google',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Multimodal', 'Reasoning', 'Coding', 'Creative', 'Google AI']),
    featured: true,
    github_url: null,
    demo_url: 'https://gemini.google.com',
    website_url: 'https://gemini.google.com',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 12,
    name: 'Zapier AI Actions',
    slug: 'zapier-ai-actions',
    description: 'Connect AI agents to 6000+ apps with natural language automation and workflow orchestration.',
    category: 'automation',
    pricing: 'freemium',
    source_type: 'closed-source',
    popularity: 85,
    autonomy: 56,
    users_count: 78000,
    author_name: 'Zapier',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Automation', 'Integrations', 'Workflow', 'Natural Language']),
    featured: false,
    github_url: null,
    demo_url: 'https://zapier.com/ai',
    website_url: 'https://zapier.com',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 13,
    name: 'Runway ML',
    slug: 'runway-ml',
    description: 'AI-powered creative suite for video generation, editing, and visual effects with cutting-edge models.',
    category: 'video',
    pricing: 'freemium',
    source_type: 'closed-source',
    popularity: 89,
    autonomy: 28,
    users_count: 67000,
    author_name: 'Runway AI',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Video Generation', 'Creative', 'Visual Effects', 'AI Models']),
    featured: true,
    github_url: null,
    demo_url: 'https://runwayml.com',
    website_url: 'https://runwayml.com',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 14,
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    description: 'AI voice generator that creates realistic speech in any voice and style with advanced voice cloning technology.',
    category: 'audio',
    pricing: 'freemium',
    source_type: 'closed-source',
    popularity: 86,
    autonomy: 30,
    users_count: 45000,
    author_name: 'ElevenLabs',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Voice Synthesis', 'Voice Cloning', 'Text-to-Speech', 'Audio AI']),
    featured: false,
    github_url: null,
    demo_url: 'https://elevenlabs.io',
    website_url: 'https://elevenlabs.io',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 15,
    name: 'Unitree R1',
    slug: 'unitree-r1',
    description: 'Ultra-lightweight humanoid robot with 26 joints, multimodal AI, priced for research and education.',
    category: 'robotics',
    pricing: 'paid',
    source_type: 'closed-source',
    popularity: 82,
    autonomy: 48,
    users_count: 1200,
    author_name: 'Unitree Robotics',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['Humanoid', 'Robot', 'Multimodal', 'Research']),
    featured: true,
    github_url: null,
    demo_url: 'https://unitree.com/r1',
    website_url: 'https://unitree.com',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 16,
    name: 'GLM-4.5',
    slug: 'glm-4-5',
    description: 'Open-source hybrid-reasoning MoE foundation model optimized for intelligent agent tasks with 128K context and tool use.',
    category: 'ai-assistant',
    pricing: 'free',
    source_type: 'open-source',
    popularity: 79,
    autonomy: 84,
    users_count: 28000,
    author_name: 'Zhipu AI',
    author_avatar: '/placeholder-user.jpg',
    image_url: '/placeholder.jpg',
    tags: JSON.stringify(['MoE', 'Foundation Model', 'Tool Use', '128K Context']),
    featured: true,
    github_url: 'https://github.com/THUDM/GLM-4',
    demo_url: null,
    website_url: 'https://zhipuai.cn',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
]

const mockCategories: Category[] = [
  { id: 1, name: 'Tất cả', slug: 'all', icon: 'Grid3X3', description: 'Tất cả các AI Agents', agent_count: 16, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 2, name: 'Phát triển', slug: 'development', icon: 'Code', description: 'AI Agents hỗ trợ lập trình và phát triển phần mềm', agent_count: 3, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 3, name: 'AI Assistant', slug: 'ai-assistant', icon: 'Brain', description: 'Trợ lý AI thông minh cho các tác vụ đa dạng', agent_count: 4, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 4, name: 'Chatbot', slug: 'chatbot', icon: 'MessageSquare', description: 'Bot trò chuyện và hỗ trợ khách hàng', agent_count: 2, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 5, name: 'Thiết kế', slug: 'design', icon: 'Palette', description: 'Thiết kế đồ họa và sáng tạo với AI', agent_count: 2, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 6, name: 'Tự động hóa', slug: 'automation', icon: 'Zap', description: 'Tự động hóa quy trình và workflow', agent_count: 2, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 7, name: 'Video', slug: 'video', icon: 'Video', description: 'Tạo và chỉnh sửa video với AI', agent_count: 1, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 8, name: 'Âm thanh', slug: 'audio', icon: 'Music', description: 'Xử lý và tạo nội dung âm thanh', agent_count: 1, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 9, name: 'Robotics', slug: 'robotics', icon: 'Zap', description: 'Robot và hệ thống tự động thông minh', agent_count: 1, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 10, name: 'Phân tích', slug: 'analytics', icon: 'BarChart3', description: 'Phân tích dữ liệu và business intelligence', agent_count: 0, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 11, name: 'Nội dung', slug: 'content', icon: 'PenTool', description: 'Tạo và quản lý nội dung với AI', agent_count: 0, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 12, name: 'Thương mại', slug: 'ecommerce', icon: 'ShoppingCart', description: 'Giải pháp AI cho thương mại điện tử', agent_count: 0, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' },
  { id: 13, name: 'Kinh doanh', slug: 'business', icon: 'Briefcase', description: 'Công cụ AI cho quản lý kinh doanh', agent_count: 0, created_at: '2024-01-01T00:00:00Z', updated_at: '2024-01-01T00:00:00Z' }
]

export class MockDatabase {
  private agents: Agent[] = mockAgents
  private categories: Category[] = mockCategories

  queryAgents(filters: {
    category?: string
    search?: string
    pricing?: string
    sourceType?: string
    sortBy?: string
    limit?: number
    offset?: number
  }) {
    let filteredAgents = [...this.agents]

    // Apply filters
    if (filters.category && filters.category !== 'all') {
      filteredAgents = filteredAgents.filter(agent => agent.category === filters.category)
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filteredAgents = filteredAgents.filter(agent => 
        agent.name.toLowerCase().includes(searchLower) ||
        agent.description.toLowerCase().includes(searchLower) ||
        agent.tags.toLowerCase().includes(searchLower)
      )
    }

    if (filters.pricing && filters.pricing !== 'all') {
      filteredAgents = filteredAgents.filter(agent => agent.pricing === filters.pricing)
    }

    if (filters.sourceType && filters.sourceType !== 'all') {
      filteredAgents = filteredAgents.filter(agent => agent.source_type === filters.sourceType)
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'autonomy':
        filteredAgents.sort((a, b) => b.autonomy - a.autonomy)
        break
      case 'users':
        filteredAgents.sort((a, b) => b.users_count - a.users_count)
        break
      case 'newest':
        filteredAgents.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        break
      case 'name':
        filteredAgents.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        filteredAgents.sort((a, b) => b.popularity - a.popularity)
    }

    const total = filteredAgents.length
    const offset = filters.offset || 0
    const limit = filters.limit || 50
    const paginatedAgents = filteredAgents.slice(offset, offset + limit)

    return {
      agents: paginatedAgents,
      total,
      hasMore: offset + limit < total,
      page: Math.floor(offset / limit) + 1,
      totalPages: Math.ceil(total / limit)
    }
  }

  getCategories() {
    return this.categories
  }
}

let dbInstance: MockDatabase | null = null

export async function getDatabase(): Promise<MockDatabase> {
  if (!dbInstance) {
    console.log('Initializing mock database...')
    dbInstance = new MockDatabase()
    console.log('Mock database initialized with', mockAgents.length, 'agents and', mockCategories.length, 'categories')
  }
  return dbInstance
}
