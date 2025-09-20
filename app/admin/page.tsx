export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-card-foreground mb-4">Users</h2>
            <p className="text-muted-foreground">Manage user accounts and permissions</p>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-card-foreground mb-4">Content</h2>
            <p className="text-muted-foreground">Manage blog posts and pages</p>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-card-foreground mb-4">Settings</h2>
            <p className="text-muted-foreground">Configure application settings</p>
          </div>
        </div>
      </div>
    </div>
  )
}
