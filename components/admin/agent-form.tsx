"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Agent {
  id?: number
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
  autonomy: number
  popularity: number
  featured: boolean
}

interface AgentFormProps {
  agent?: Agent | null
  onClose: () => void
}

export function AgentForm({ agent, onClose }: AgentFormProps) {
  const [formData, setFormData] = useState<Agent>({
    name: "",
    description: "",
    category: "",
    image_url: "",
    demo_url: "",
    github_url: "",
    author_name: "",
    author_avatar: "",
    tags: [],
    pricing: "Free",
    source_type: "Open Source",
    autonomy: 5,
    popularity: 0,
    featured: false,
  })
  const [tagsInput, setTagsInput] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (agent) {
      setFormData({
        ...agent,
        name: agent.name || "",
        description: agent.description || "",
        category: agent.category || "",
        image_url: agent.image_url || "",
        demo_url: agent.demo_url || "",
        github_url: agent.github_url || "",
        author_name: agent.author_name || "",
        author_avatar: agent.author_avatar || "",
        tags: agent.tags || [],
        pricing: agent.pricing || "Free",
        source_type: agent.source_type || "Open Source",
        autonomy: agent.autonomy || 5,
        popularity: agent.popularity || 0,
        featured: agent.featured || false,
      })
      setTagsInput(agent.tags?.join(", ") || "")
    }
  }, [agent])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const tags = tagsInput
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
      const dataToSubmit = { ...formData, tags }

      const url = agent ? `/api/admin/agents/${agent.id}` : "/api/admin/agents"
      const method = agent ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSubmit),
      })

      if (response.ok) {
        onClose()
      }
    } catch (error) {
      console.error("Error saving agent:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{agent ? "Edit Agent" : "Add New Agent"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="image_url">Image URL</Label>
              <Input
                id="image_url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="demo_url">Demo URL</Label>
              <Input
                id="demo_url"
                value={formData.demo_url}
                onChange={(e) => setFormData({ ...formData, demo_url: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="github_url">GitHub URL</Label>
              <Input
                id="github_url"
                value={formData.github_url}
                onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="author_name">Author Name</Label>
              <Input
                id="author_name"
                value={formData.author_name}
                onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="AI, Chatbot, Assistant"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="pricing">Pricing</Label>
              <Select value={formData.pricing} onValueChange={(value) => setFormData({ ...formData, pricing: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Free">Free</SelectItem>
                  <SelectItem value="Freemium">Freemium</SelectItem>
                  <SelectItem value="Paid">Paid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="autonomy">Autonomy (1-10)</Label>
              <Input
                id="autonomy"
                type="number"
                min="1"
                max="10"
                value={formData.autonomy}
                onChange={(e) => setFormData({ ...formData, autonomy: Number.parseInt(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="popularity">Popularity</Label>
              <Input
                id="popularity"
                type="number"
                min="0"
                value={formData.popularity}
                onChange={(e) => setFormData({ ...formData, popularity: Number.parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={formData.featured}
              onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
            />
            <Label htmlFor="featured">Featured Agent</Label>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : agent ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
