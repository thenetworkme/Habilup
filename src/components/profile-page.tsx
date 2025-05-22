export function ProfilePage() {
  return (
    <div className="container px-4 py-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Perfil</h1>
      
      <div className="border rounded-lg p-6 bg-card text-card-foreground">
        <div className="space-y-4">
          <p className="text-lg font-medium">Tu perfil</p>
          <p className="text-muted-foreground">
            Aquí podrás gestionar tu información personal y preferencias.
          </p>
        </div>
      </div>
    </div>
  )
}