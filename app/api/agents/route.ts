import { type NextRequest, NextResponse } from "next/server"

// Mock data cho development
const mockAgents = [
  {
    id: 1,
    name: "ChatGPT",
    slug: "chatgpt",
    description: "Advanced conversational AI that can assist with writing, analysis, math, coding, and creative tasks.",
    category: "chatbot",
    pricing: "freemium",
    source_type: "closed-source",
    popularity: 98,
    autonomy: 75,
    users_count: 267000,
    author_name: "OpenAI",
    author_avatar: "/placeholder-user.jpg",
    image_url: "/placeholder.jpg",
    tags: ["Conversational AI", "GPT-4", "Multimodal", "General Purpose"],
    featured: true,
    github_url: null,
    demo_url: "https://chat.openai.com",
    website_url: "https://openai.com/chatgpt",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-15T00:00:00Z"
  },
  {
    id: 2,
    name: "GitHub Copilot",
    slug: "github-copilot",
    description: "AI pair programmer that helps you write code faster with intelligent code completions and suggestions.",
    category: "development",
    pricing: "paid",
    source_type: "closed-source",
    popularity: 96,
    autonomy: 45,
    users_count: 125000,
    author_name: "GitHub",
    author_avatar: "/placeholder-user.jpg",
    image_url: "/placeholder.jpg",
    tags: ["Code Completion", "AI Programming", "IDE Integration", "Productivity"],
    featured: true,
    github_url: null,
    demo_url: "https://github.com/features/copilot",
    website_url: "https://github.com/features/copilot",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-14T00:00:00Z"
  },
  {
    id: 3,
    name: "Midjourney",
    slug: "midjourney",
    description: "AI-powered image generation tool that creates stunning artwork and designs from text descriptions.",
    category: "design",
    pricing: "paid",
    source_type: "closed-source",
    popularity: 94,
    autonomy: 25,
    users_count: 234000,
    author_name: "Midjourney Inc",
    author_avatar: "/placeholder-user.jpg",
    image_url: "/placeholder.jpg",
    tags: ["Image Generation", "Art", "Creative", "Text-to-Image"],
    featured: true,
    github_url: null,
    demo_url: "https://midjourney.com",
    website_url: "https://midjourney.com",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-13T00:00:00Z"
  },
  {
    id: 4,
    name: "LangChain",
    slug: "langchain",
    description: "Framework for developing applications powered by language models with chains, agents, and memory capabilities.",
    category: "development",
    pricing: "free",
    source_type: "open-source",
    popularity: 95,
    autonomy: 15,
    users_count: 89000,
    author_name: "LangChain Inc",
    author_avatar: "/placeholder-user.jpg",
    image_url: "/placeholder.jpg",
    tags: ["Framework", "Chains", "Memory", "Tools"],
    featured: true,
    github_url: "https://github.com/langchain-ai/langchain",
    demo_url: null,
    website_url: "https://langchain.com",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-12T00:00:00Z"
  },
  {
    id: 5,
    name: "AutoGPT",
    slug: "autogpt",
    description: "Autonomous AI agent that can perform tasks independently by breaking them down into sub-tasks and executing them.",
    category: "automation",
    pricing: "freemium",
    source_type: "open-source",
    popularity: 88,
    autonomy: 92,
    users_count: 67000,
    author_name: "Significant Gravitas",
    author_avatar: "/placeholder-user.jpg",
    image_url: "/placeholder.jpg",
    tags: ["Autonomous", "Task Planning", "GPT-4", "Web Browsing"],
    featured: true,
    github_url: "https://github.com/Significant-Gravitas/AutoGPT",
    demo_url: null,
    website_url: "https://agpt.co",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-11T00:00:00Z"
  },
  {
    id: 6,
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    description: "Open-source text-to-image diffusion model capable of generating detailed images from text descriptions.",
    category: "design",
    pricing: "free",
    source_type: "open-source",
    popularity: 93,
    autonomy: 20,
    users_count: 189000,
    author_name: "Stability AI",
    author_avatar: "/placeholder-user.jpg",
    image_url: "/placeholder.jpg",
    tags: ["Text-to-Image", "Diffusion", "Open Source", "Art Generation"],
    featured: true,
    github_url: "https://github.com/Stability-AI/StableDiffusion",
    demo_url: "https://huggingface.co/spaces/stabilityai/stable-diffusion",
    website_url: "https://stability.ai",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-10T00:00:00Z"
  }
]

const mockCategories = [
  { slug: "all", name: "Tất cả" },
  { slug: "chatbot", name: "Chatbot" },
  { slug: "development", name: "Phát triển" },
  { slug: "design", name: "Thiết kế" },
  { slug: "automation", name: "Tự động hóa" },
  { slug: "ai-assistant", name: "AI Assistant" }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category") || "all"
    const search = searchParams.get("search") || ""
    const sortBy = searchParams.get("sortBy") || "popular"
    const pricing = searchParams.get("pricing") || "all"
    const sourceType = searchParams.get("sourceType") || "all"
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    // Filter agents based on criteria
    let filteredAgents = [...mockAgents]

    // Filter by category
    if (category !== "all") {
      filteredAgents = filteredAgents.filter(agent => agent.category === category)
    }

    // Filter by search
    if (search.trim()) {
      const searchLower = search.toLowerCase()
      filteredAgents = filteredAgents.filter(agent => 
        agent.name.toLowerCase().includes(searchLower) ||
        agent.description.toLowerCase().includes(searchLower) ||
        agent.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    }

    // Filter by pricing
    if (pricing !== "all") {
      filteredAgents = filteredAgents.filter(agent => agent.pricing === pricing)
    }

    // Filter by source type
    if (sourceType !== "all") {
      filteredAgents = filteredAgents.filter(agent => agent.source_type === sourceType)
    }

    // Sort agents
    switch (sortBy) {
      case "autonomy":
        filteredAgents.sort((a, b) => b.autonomy - a.autonomy)
        break
      case "users":
        filteredAgents.sort((a, b) => b.users_count - a.users_count)
        break
      case "newest":
        filteredAgents.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        break
      case "name":
        filteredAgents.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        filteredAgents.sort((a, b) => b.popularity - a.popularity)
    }

    const total = filteredAgents.length
    const agents = filteredAgents.slice(offset, offset + limit)

    return NextResponse.json({
      agents,
      total,
      hasMore: offset + limit < total,
      page: Math.floor(offset / limit) + 1,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error("Error fetching agents:", error)
    return NextResponse.json({ error: "Failed to fetch agents" }, { status: 500 })
  }
}
