import * as React from "react"
import { Input } from "./input"
import { Search } from "lucide-react"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  if (!isOpen) return null

  React.useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="h-4 w-4" />
            </div>
            <Input 
              type="text" 
              placeholder="Buscar hábitos para crear entradas" 
              className="w-full pl-10" 
              autoFocus
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground">
              <span className="kbd">Esc</span>
            </div>
          </div>
          <div className="space-y-2">
            {/* Habit list will be populated dynamically */}
          </div>
        </div>
      </div>
    </div>
  )
}

export { SearchModal }