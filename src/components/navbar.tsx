

import { useState } from "react"
import { cn } from "../lib/utils"
import { SearchModal } from "./ui/search-modal"

interface NavbarProps {
  currentPath: string
}

export function Navbar({ currentPath }: NavbarProps) {
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <div className="w-full flex justify-center border-b">
      <div className="container max-w-5xl flex h-16 items-center justify-center px-4">
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <a 
              href="/my-habits" 
              className={cn(
                "text-base font-medium flex items-center gap-1.5 rounded-md px-3 py-2 transition-colors",
                currentPath === "/my-habits" 
                  ? "text-purple-600 font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted navbar-link"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              Mis hábitos
            </a>
            <a 
              href="/profile" 
              className={cn(
                "text-base font-medium flex items-center gap-1.5 rounded-md px-3 py-2 transition-colors",
                currentPath === "/profile" 
                  ? "text-purple-600 font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted navbar-link"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Perfil
            </a>

            <a 
              href="/settings" 
              className={cn(
                "text-base font-medium flex items-center gap-1.5 rounded-md px-3 py-2 transition-colors",
                currentPath === "/settings" 
                  ? "text-purple-600 font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted navbar-link"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Configuración
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
        </div>
      </div>
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </div>
  )
}
