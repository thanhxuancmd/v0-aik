"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AgentForm } from "@/components/admin/agent-form"

interface Agent {
  id: number
  name: string
  description: string
  category: string
  image_url: string
  demo_url: string
  github_url: string
  author_name: string
  author_avatar: string
  tags: string[]
  pricing: string
  source_type: string
  users_count: number
  autonomy: number
  popularity: number
  featured: boolean
  created_at: string
  updated_at: string
}

const PlusIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
)

const EditIcon = () => (
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
)

const TrashIcon = () => (
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const GithubIcon = () => (
  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

export default function AgentsManagement() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingAgent, setEditingAgent] = useState<Agent | null>(null)

  useEffect(() => {
    fetchAgents()
  }, [])

  const fetchAgents = async () => {
    try {
      const response = await fetch("/api/admin/agents")
      const data = await response.json()
      setAgents(data)
    } catch (error) {
      console.error("Error fetching agents:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this agent?")) return

    try {
      await fetch(`/api/admin/agents/${id}`, { method: "DELETE" })
      fetchAgents()
    } catch (error) {
      console.error("Error deleting agent:", error)
    }
  }

  const handleEdit = (agent: Agent) => {
    setEditingAgent(agent)
    setShowForm(true)
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingAgent(null)
    fetchAgents()
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý Agents</h1>
          <p className="text-gray-600 mt-2">Quản lý các AI agents trong cửa hàng của bạn</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="flex items-center gap-2">
          <PlusIcon />
          Thêm Agent
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <Card key={agent.id} className="relative">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  {agent.image_url && (
                    <img
                      src={agent.image_url || "/placeholder.svg"}
                      alt={agent.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  )}
                  <div>
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                    <CardDescription>{agent.category}</CardDescription>
                  </div>
                </div>
                {agent.featured && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Featured
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{agent.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {agent.tags?.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {agent.tags?.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{agent.tags.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>Người dùng: {agent.users_count}</span>
                <span>Tự động: {agent.autonomy}/10</span>
                <span>{agent.pricing}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {agent.demo_url && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={agent.demo_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon />
                      </a>
                    </Button>
                  )}
                  {agent.github_url && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={agent.github_url} target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                      </a>
                    </Button>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(agent)}>
                    <EditIcon />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(agent.id)}>
                    <TrashIcon />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {showForm && <AgentForm agent={editingAgent} onClose={handleFormClose} />}
    </div>
  )
}
