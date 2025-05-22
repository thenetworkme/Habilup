// Habit Heatmap Component
import { Button } from "./button"

interface HabitHeatmapProps {
  title: string
  data: {
    days: {
      [key: string]: {
        value: number;
        date: string;
      }[]
    };
    stats: {
      longestStreak: number;
      currentStreak: number;
      totalEntries: number;
      average: string;
      standardDeviation: string;
      total: string;
    }
  }
}

export function HabitHeatmap({ title, data }: HabitHeatmapProps) {
  const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
  const weekdays = ["Mon", "Wed", "Fri", ""];

  // Generate color based on value
  const getColor = (value: number) => {
    if (value === 0) return "bg-gray-100 border border-gray-200";
    if (value < 60) return "bg-red-200";
    if (value < 120) return "bg-red-300";
    return "bg-red-500";
  };

  return (
    <div className="w-full bg-white rounded-lg border p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <div className="flex gap-2">
          <button className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </button>
          <button className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex">
          <div className="w-12">
            {/* Empty space for alignment */}
          </div>
          <div className="flex-1 grid grid-cols-12 gap-1">
            {months.map((month, i) => (
              <div key={i} className="text-xs text-center text-gray-500">{month}</div>
            ))}
          </div>
        </div>

        {weekdays.map((day, dayIndex) => (
          <div key={dayIndex} className="flex items-center h-6">
            <div className="w-12 text-xs text-gray-500">{day}</div>
            <div className="flex-1 grid grid-cols-12 gap-x-1">
              {Array.from({ length: 52 }).map((_, weekIndex) => {
                // Logic to determine if there's data for this day/week
                const dayData = data.days[day]?.[weekIndex];
                const value = dayData?.value || 0;
                
                return (
                  <div 
                    key={weekIndex} 
                    className={`w-4 h-4 ${getColor(value)} ${weekIndex % 4 === 0 ? "ml-0.5" : ""}`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-1.5 text-sm text-gray-500">
        <div>Longest streak: <span className="font-medium text-gray-700">{data.stats.longestStreak} days</span></div>
        <div>Streak: <span className="font-medium text-gray-700">{data.stats.currentStreak} days</span></div>
        <div>Number of entries: <span className="font-medium text-gray-700">{data.stats.totalEntries}</span></div>
        <div>Average: <span className="font-medium text-gray-700">{data.stats.average}</span></div>
        <div>Standard deviation: <span className="font-medium text-gray-700">{data.stats.standardDeviation}</span></div>
        <div>Total: <span className="font-medium text-gray-700">{data.stats.total}</span></div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button className="flex items-center gap-1 bg-white hover:bg-gray-100 text-gray-800 border">
          Log today 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Button>
      </div>
    </div>
  )
}
