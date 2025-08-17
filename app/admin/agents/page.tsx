"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, ExternalLink, Github } from "lucide-react"
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
          <h1 className="text-3xl font-bold text-gray-900">Agents Management</h1>
          <p className="text-gray-600 mt-2">Manage AI agents in your store</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Agent
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
                <span>Users: {agent.users_count}</span>
                <span>Autonomy: {agent.autonomy}/10</span>
                <span>{agent.pricing}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {agent.demo_url && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={agent.demo_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                  {agent.github_url && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={agent.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(agent)}>
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(agent.id)}>
                    <Trash2 className="h-3 w-3" />
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
