import { NextResponse } from "next/server"

// Dữ liệu mẫu cho hệ sinh thái AI agents
const ecosystemData = [
  // Agent Observability Tools
  {
    id: "1",
    name: "AgentOps",
    description: "Nền tảng quan sát và giám sát toàn diện cho AI agents, cung cấp insights về hiệu suất và hành vi.",
    category: "Công cụ quan sát Agent",
    logo: "/agentops-logo.png",
    website: "https://agentops.ai",
    popularity: 8,
    pricing: "Freemium" as const,
    tags: ["Monitoring", "Analytics", "Performance"],
  },
  {
    id: "2",
    name: "Arize AI",
    description: "Platform ML observability giúp theo dõi, debug và cải thiện mô hình AI trong production.",
    category: "Công cụ quan sát Agent",
    logo: "/arize-ai-logo.png",
    website: "https://arize.com",
    popularity: 9,
    pricing: "Enterprise" as const,
    tags: ["ML Ops", "Monitoring", "Debugging"],
  },
  {
    id: "3",
    name: "Helicone",
    description: "Open-source observability platform cho LLM applications với real-time monitoring.",
    category: "Công cụ quan sát Agent",
    logo: "/helicone-logo.png",
    website: "https://helicone.ai",
    popularity: 7,
    pricing: "Free" as const,
    tags: ["Open Source", "LLM", "Real-time"],
  },

  // AI Model Serving Platforms
  {
    id: "4",
    name: "Groq",
    description: "Nền tảng inference siêu nhanh cho LLM với chip AI chuyên dụng, tốc độ vượt trội.",
    category: "Nền tảng phục vụ mô hình AI",
    logo: "/groq-logo-representation.png",
    website: "https://groq.com",
    popularity: 9,
    pricing: "Freemium" as const,
    tags: ["Fast Inference", "LLM", "Hardware"],
  },
  {
    id: "5",
    name: "Replicate",
    description: "Platform chạy và deploy mô hình AI với API đơn giản, hỗ trợ nhiều framework.",
    category: "Nền tảng phục vụ mô hình AI",
    logo: "/generic-circular-logo.png",
    website: "https://replicate.com",
    popularity: 8,
    pricing: "Paid" as const,
    tags: ["API", "Model Deployment", "Multi-framework"],
  },

  // Programming Assistants
  {
    id: "6",
    name: "GitHub Copilot",
    description: "AI pair programmer giúp viết code nhanh hơn với suggestions thông minh từ OpenAI.",
    category: "Trợ lý lập trình",
    logo: "/github-copilot-logo.png",
    website: "https://github.com/features/copilot",
    popularity: 10,
    pricing: "Paid" as const,
    tags: ["Code Generation", "IDE Integration", "OpenAI"],
  },
  {
    id: "7",
    name: "Cursor",
    description: "AI-first code editor với khả năng hiểu context và generate code thông minh.",
    category: "Trợ lý lập trình",
    logo: "/cursor-logo.png",
    website: "https://cursor.sh",
    popularity: 9,
    pricing: "Freemium" as const,
    tags: ["Code Editor", "AI-first", "Context Aware"],
  },
  {
    id: "8",
    name: "Aider",
    description: "AI pair programming trong terminal, giúp edit code với natural language commands.",
    category: "Trợ lý lập trình",
    logo: "/aider-logo.png",
    website: "https://aider.chat",
    popularity: 7,
    pricing: "Free" as const,
    tags: ["Terminal", "Natural Language", "Open Source"],
  },

  // Personal AI Assistants
  {
    id: "9",
    name: "ChatGPT",
    description: "Trợ lý AI đa năng từ OpenAI, hỗ trợ chat, viết văn, phân tích và nhiều tác vụ khác.",
    category: "Trợ lý AI cá nhân",
    logo: "/chatgpt-logo-inspired.png",
    website: "https://chat.openai.com",
    popularity: 10,
    pricing: "Freemium" as const,
    tags: ["Conversational AI", "Multi-purpose", "OpenAI"],
  },
  {
    id: "10",
    name: "Claude",
    description: "AI assistant từ Anthropic với khả năng reasoning mạnh và an toàn cao.",
    category: "Trợ lý AI cá nhân",
    logo: "/claude-logo.png",
    website: "https://claude.ai",
    popularity: 9,
    pricing: "Freemium" as const,
    tags: ["Reasoning", "Safety", "Anthropic"],
  },
  {
    id: "11",
    name: "Gemini",
    description: "AI assistant từ Google với khả năng multimodal và tích hợp sâu với Google services.",
    category: "Trợ lý AI cá nhân",
    logo: "/gemini-logo.png",
    website: "https://gemini.google.com",
    popularity: 9,
    pricing: "Freemium" as const,
    tags: ["Multimodal", "Google", "Integration"],
  },

  // AI Agent Development Frameworks
  {
    id: "12",
    name: "LangChain",
    description: "Framework phổ biến nhất để xây dựng applications với LLM, hỗ trợ nhiều tính năng.",
    category: "Framework phát triển AI Agent",
    logo: "/langchain-logo.png",
    website: "https://langchain.com",
    popularity: 10,
    pricing: "Free" as const,
    tags: ["Framework", "LLM", "Popular"],
  },
  {
    id: "13",
    name: "CrewAI",
    description: "Framework để tạo multi-agent systems với role-based collaboration.",
    category: "Framework phát triển AI Agent",
    logo: "/crewai-logo.png",
    website: "https://crewai.com",
    popularity: 8,
    pricing: "Free" as const,
    tags: ["Multi-agent", "Collaboration", "Role-based"],
  },
  {
    id: "14",
    name: "AutoGen",
    description: "Framework từ Microsoft để tạo conversational AI systems với multiple agents.",
    category: "Framework phát triển AI Agent",
    logo: "/autogen-logo.png",
    website: "https://microsoft.github.io/autogen",
    popularity: 8,
    pricing: "Free" as const,
    tags: ["Microsoft", "Conversational", "Multi-agent"],
  },

  // Content Creation Agents
  {
    id: "15",
    name: "Jasper AI",
    description: "AI writing assistant cho marketing content, blog posts và creative writing.",
    category: "Agents tạo nội dung",
    logo: "/abstract-ai-logo.png",
    website: "https://jasper.ai",
    popularity: 8,
    pricing: "Paid" as const,
    tags: ["Writing", "Marketing", "Creative"],
  },
  {
    id: "16",
    name: "Copy.ai",
    description: "AI copywriting tool giúp tạo content marketing, ads và social media posts.",
    category: "Agents tạo nội dung",
    logo: "/copy-ai-logo.png",
    website: "https://copy.ai",
    popularity: 7,
    pricing: "Freemium" as const,
    tags: ["Copywriting", "Marketing", "Social Media"],
  },

  // Customer Service Agents
  {
    id: "17",
    name: "Intercom",
    description: "Platform customer service với AI chatbot thông minh và automation.",
    category: "Agents dịch vụ khách hàng",
    logo: "/generic-chat-bubble-logo.png",
    website: "https://intercom.com",
    popularity: 9,
    pricing: "Paid" as const,
    tags: ["Customer Service", "Chatbot", "Automation"],
  },
  {
    id: "18",
    name: "Zendesk AI",
    description: "AI-powered customer support với intelligent ticket routing và responses.",
    category: "Agents dịch vụ khách hàng",
    logo: "/zendesk-logo.png",
    website: "https://zendesk.com",
    popularity: 8,
    pricing: "Paid" as const,
    tags: ["Support", "Ticketing", "Routing"],
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(ecosystemData)
  } catch (error) {
    console.error("Error fetching ecosystem data:", error)
    return NextResponse.json({ error: "Failed to fetch ecosystem data" }, { status: 500 })
  }
}
