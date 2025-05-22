
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { cn } from "../lib/utils"
import { SearchModal } from "./ui/search-modal"
import { HabitTypeMenu } from "./ui/habit-type-menu"
import { HabitHeatmap } from "./ui/habit-heatmap"
import { Search, Plus } from "lucide-react"

export function HabitsPage() {
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [habits, setHabits] = useState<any[]>([])
  
  // Sample habit data for demonstration
  useEffect(() => {
    // In a real app, this would be loaded from an API or local storage
    setHabits([
      {
        id: 1,
        title: "Aprender Inteligencia Artificial",
        data: {
          days: {
            "Mon": Array(52).fill(null).map(() => ({ value: 0, date: "" })),
            "Wed": Array(52).fill(null).map(() => ({ value: 0, date: "" })),
            "Fri": Array(52).fill(null).map(() => ({ value: 0, date: "" })),
            "": Array(52).fill(null).map(() => ({ value: 0, date: "" }))
          },
          stats: {
            longestStreak: 2,
            currentStreak: 0,
            totalEntries: 0,
            average: "116.17 Minutos",
            standardDeviation: "67.33 Minutos",
            total: "697.00 Minutos"
          }
        }
      }
    ])
  }, [])

  return (
    <div className="container px-4 py-6 max-w-6xl mx-auto">
      <div className="flex flex-row justify-center items-center mb-6 gap-2">
        <div 
          className="relative w-full max-w-2xl cursor-pointer" 
          onClick={() => setSearchModalOpen(true)}
        >
          <Input 
            type="text" 
            placeholder="Buscar hábitos" 
            className={cn(
              "pl-10 w-full", 
              "hover:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-500"
            )}
            readOnly
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground">
            <span className="kbd">Ctrl</span>
            <span className="kbd">K</span>
          </div>
        </div>
        <div className="flex items-center">
          <HabitTypeMenu 
            trigger={
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Crear hábito
              </Button>
            } 
          />
        </div>
      </div>
      
      {/* Lista de hábitos y contenido principal */}
      <div className="space-y-6 mt-6">
        {habits.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-500">No habits created yet</h3>
            <p className="text-gray-400 mt-2">Create your first habit using the button above</p>
          </div>
        ) : (
          habits.map(habit => (
            <div key={habit.id}>
              <HabitHeatmap 
                title={habit.title} 
                data={habit.data} 
              />
            </div>
          ))
        )}
      </div>
      
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
    </div>
  )
}
