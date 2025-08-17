"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Edit, Trash2 } from "lucide-react"
import { CategoryForm } from "@/components/admin/category-form"

interface Category {
  id: number
  name: string
  slug: string
  description: string
  icon: string
  created_at: string
}

export default function CategoriesManagement() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/admin/categories")
      const data = await response.json()
      setCategories(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this category?")) return

    try {
      await fetch(`/api/admin/categories/${id}`, { method: "DELETE" })
      fetchCategories()
    } catch (error) {
      console.error("Error deleting category:", error)
    }
  }

  const handleEdit = (category: Category) => {
    setEditingCategory(category)
    setShowForm(true)
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingCategory(null)
    fetchCategories()
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Categories Management</h1>
          <p className="text-gray-600 mt-2">Organize your AI agents into categories</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-lg">{category.icon || "📁"}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">/{category.slug}</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{category.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span>Created: {new Date(category.created_at).toLocaleDateString()}</span>
              </div>

              <div className="flex justify-end space-x-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(category)}>
                  <Edit className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleDelete(category.id)}>
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {categories.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">No categories found</div>
          <Button onClick={() => setShowForm(true)}>Create your first category</Button>
        </div>
      )}

      {showForm && <CategoryForm category={editingCategory} onClose={handleFormClose} />}
    </div>
  )
}
