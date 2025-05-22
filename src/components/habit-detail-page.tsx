import { HabitHeatmap } from "./ui/habit-heatmap"

export function HabitDetailPage() {
  // Sample data for the heatmap
  const habitData = {
    days: {
      "Mon": Array(52).fill(null).map((_, i) => i === 51 ? { value: 120, date: "2025-05-19" } : { value: 0, date: "" }),
      "Wed": Array(52).fill(null).map((_, i) => i === 51 ? { value: 30, date: "2025-05-21" } : { value: 0, date: "" }),
      "Fri": Array(52).fill(null).map((_, i) => i === 51 ? { value: 150, date: "2025-05-16" } : { value: 0, date: "" }),
      "": Array(52).fill(null).map((_, i) => i === 51 ? { value: 60, date: "2025-05-18" } : { value: 0, date: "" })
    },
    stats: {
      longestStreak: 2,
      currentStreak: 0,
      totalEntries: 6,
      average: "116.17 Minutos",
      standardDeviation: "67.33 Minutos",
      total: "697.00 Minutos"
    }
  };

  return (
    <div className="container px-4 py-6 max-w-5xl mx-auto">
      <HabitHeatmap 
        title="Aprender Inteligencia Artificial" 
        data={habitData} 
      />
    </div>
  )
}
