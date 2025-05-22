import { Navbar } from './components/navbar'
import { HabitsPage } from './components/habits-page'
import { ProfilePage } from './components/profile-page'
import { SettingsPage } from './components/settings-page'
import { HabitDetailPage } from './components/habit-detail-page'
import { CreateNumberHabit } from './components/create-number-habit'
import { useEffect, useState } from 'react'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    
    if (window.location.pathname === '/') {
      window.history.replaceState({}, '', '/my-habits')
      setCurrentPath('/my-habits')
    }

    // Manejar cambios en la navegación
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleNavigation)
    
  
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        e.preventDefault()
        const path = anchor.pathname
        window.history.pushState({}, '', path)
        setCurrentPath(path)
      }
    })

    return () => {
      window.removeEventListener('popstate', handleNavigation)
    }
  }, [])


  const renderPage = () => {
    // Handle create-habit with query parameters
    if (currentPath === '/create-habit') {
      const urlParams = new URLSearchParams(window.location.search);
      const type = urlParams.get('type');
      
      if (type === 'NUMBER') {
        return <CreateNumberHabit />
      }
      // Add a case for CHECKBOX type if needed
      
      // Default to habits page if type is not specified
      return <HabitsPage />
    }
    
    switch (currentPath) {
      case '/my-habits':
        return <HabitsPage />
      case '/profile':
        return <ProfilePage />
      case '/habit-detail':
        return <HabitDetailPage />
      case '/settings':
        return <SettingsPage />
      default:
        return <HabitsPage />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPath={currentPath} />
      <main className="flex-1">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
