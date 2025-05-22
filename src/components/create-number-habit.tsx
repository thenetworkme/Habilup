import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function CreateNumberHabit() {
  const [habitTitle, setHabitTitle] = useState("");
  const [habitMetric, setHabitMetric] = useState("");
  const [startDay, setStartDay] = useState("Mondays");
  const [privacyOption, setPrivacyOption] = useState("Private");
  
  // Stats to track
  const [trackStreak, setTrackStreak] = useState(true);
  const [trackLongestStreak, setTrackLongestStreak] = useState(false);
  const [trackAverage, setTrackAverage] = useState(true);
  const [trackStandardDeviation, setTrackStandardDeviation] = useState(false);
  const [trackTotal, setTrackTotal] = useState(false);
  const [trackNumberOfDays, setTrackNumberOfDays] = useState(false);
  
  // Days for streak calculation
  type WeekdayKey = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

  const [streakDays, setStreakDays] = useState({
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: true,
    Sunday: true
  });
  
  // Color selection
  const [habitColor, setHabitColor] = useState("Lemonade");
  
  const handleCreateHabit = () => {
    // In a real app, you would save this data to your backend/database
    console.log("Creating habit", {
      title: habitTitle,
      metric: habitMetric,
      startDay,
      privacyOption,
      trackingOptions: {
        streak: trackStreak,
        longestStreak: trackLongestStreak,
        average: trackAverage,
        standardDeviation: trackStandardDeviation,
        total: trackTotal,
        numberOfDays: trackNumberOfDays
      },
      streakDays,
      color: habitColor
    });
    
    // Navigate back to habits page
    window.location.href = "/my-habits";
  };
  
  const toggleStreakDay = (day: WeekdayKey) => {
    setStreakDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };
  
  return (
    <div className="container max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Track a new habit</h1>
      
      {/* Basic Information */}
      <div className="space-y-6 mb-8">
        <div className="space-y-2">
          <label className="text-gray-500 block">Enter a title for your habit:</label>
          <Input
            type="text"
            value={habitTitle}
            onChange={(e) => setHabitTitle(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-gray-500 block">Choose a metric, i.e. kilometer, minute, step:</label>
          <Input
            type="text"
            value={habitMetric}
            onChange={(e) => setHabitMetric(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-gray-500 block">Pick a day to start your week:</label>
          <div className="relative">
            <select 
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 appearance-none"
              value={startDay}
              onChange={(e) => setStartDay(e.target.value)}
            >
              <option>Mondays</option>
              <option>Sundays</option>
              <option>Saturdays</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-gray-500 block">Privacy option (hides this habit on your profile, even when your profile is public):</label>
          <div className="relative">
            <select 
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 appearance-none"
              value={privacyOption}
              onChange={(e) => setPrivacyOption(e.target.value)}
            >
              <option>Private</option>
              <option>Public</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Selection */}
      <div className="space-y-4 mb-8">
        <h2 className="text-gray-500">Select your desired statistics:</h2>
        
        <div className="border rounded-md p-4">
          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              id="streak" 
              checked={trackStreak} 
              onChange={() => setTrackStreak(!trackStreak)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="streak" className="font-semibold block">Streak</label>
              <p className="text-gray-400 text-sm">Number of consecutive entries. Resets to 0 if a day is missed.</p>
              
              <div className="mt-2">
                <p className="text-gray-400 text-sm mb-2">Calculate streak only on the following days:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="monday" 
                      checked={streakDays.Monday} 
                      onChange={() => toggleStreakDay('Monday')}
                    />
                    <label htmlFor="monday" className="text-gray-600">Monday</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="tuesday" 
                      checked={streakDays.Tuesday} 
                      onChange={() => toggleStreakDay('Tuesday')}
                    />
                    <label htmlFor="tuesday" className="text-gray-600">Tuesday</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="wednesday" 
                      checked={streakDays.Wednesday} 
                      onChange={() => toggleStreakDay('Wednesday')}
                    />
                    <label htmlFor="wednesday" className="text-gray-600">Wednesday</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="thursday" 
                      checked={streakDays.Thursday} 
                      onChange={() => toggleStreakDay('Thursday')}
                    />
                    <label htmlFor="thursday" className="text-gray-600">Thursday</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="friday" 
                      checked={streakDays.Friday} 
                      onChange={() => toggleStreakDay('Friday')}
                    />
                    <label htmlFor="friday" className="text-gray-600">Friday</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="saturday" 
                      checked={streakDays.Saturday} 
                      onChange={() => toggleStreakDay('Saturday')}
                    />
                    <label htmlFor="saturday" className="text-gray-600">Saturday</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="sunday" 
                      checked={streakDays.Sunday} 
                      onChange={() => toggleStreakDay('Sunday')}
                    />
                    <label htmlFor="sunday" className="text-gray-600">Sunday</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              id="longestStreak" 
              checked={trackLongestStreak} 
              onChange={() => setTrackLongestStreak(!trackLongestStreak)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="longestStreak" className="font-semibold block">Longest streak</label>
              <p className="text-gray-400 text-sm">Longest streak ever recorded.</p>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              id="average" 
              checked={trackAverage} 
              onChange={() => setTrackAverage(!trackAverage)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="average" className="font-semibold block">Average</label>
              <p className="text-gray-400 text-sm">Statistical average of your entries.</p>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              id="standardDeviation" 
              checked={trackStandardDeviation} 
              onChange={() => setTrackStandardDeviation(!trackStandardDeviation)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="standardDeviation" className="font-semibold block">Standard deviation</label>
              <p className="text-gray-400 text-sm">Statistical measure of dispersion, how much your entries vary.</p>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              id="total" 
              checked={trackTotal} 
              onChange={() => setTrackTotal(!trackTotal)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="total" className="font-semibold block">Total</label>
              <p className="text-gray-400 text-sm">Sum of all your entries.</p>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              id="numberOfDays" 
              checked={trackNumberOfDays} 
              onChange={() => setTrackNumberOfDays(!trackNumberOfDays)}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="numberOfDays" className="font-semibold block">Number of days</label>
              <p className="text-gray-400 text-sm">Number of entries recorded.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Color Selection */}
      <div className="space-y-2 mb-8">
        <label className="text-gray-500 block">Pick a color:</label>
        <div className="relative">
          <div className="flex items-center pl-3 border rounded-md h-10">
            <div className="w-4 h-4 rounded-sm bg-yellow-400 mr-2"></div>
            <select 
              className="w-full h-10 bg-transparent border-none outline-none appearance-none"
              value={habitColor}
              onChange={(e) => setHabitColor(e.target.value)}
            >
              <option>Lemonade</option>
              <option>Ocean</option>
              <option>Lavender</option>
              <option>Tomato</option>
              <option>Forest</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Preview Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Preview</h2>
        <div className="border rounded-md p-4">
          {/* This is a simplified version of the heatmap preview */}
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              {["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"].map(month => (
                <span key={month}>{month}</span>
              ))}
            </div>
            {["Mon", "Wed", "Fri", ""].map((day, dayIndex) => (
              <div key={dayIndex} className="flex items-center mb-1">
                <span className="w-8 text-xs text-gray-500">{day}</span>
                <div className="flex-1 flex gap-0.5">
                  {Array.from({length: 52}).map((_, i) => {
                    // Random coloring for preview
                    const intensity = Math.random();
                    let bgColor = "bg-gray-100 border border-gray-200";
                    if (intensity > 0.7) bgColor = "bg-yellow-400";
                    else if (intensity > 0.5) bgColor = "bg-yellow-300";
                    else if (intensity > 0.3) bgColor = "bg-yellow-200";
                    else if (intensity > 0.1) bgColor = "bg-yellow-100";
                    
                    return (
                      <div 
                        key={i} 
                        className={`w-2.5 h-2.5 ${bgColor} ${i % 4 === 0 ? "ml-0.5" : ""}`}
                      ></div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-4">
            <div className="space-y-1">
              <div className="text-sm text-gray-500">Streak: <span className="text-gray-700">199 days</span></div>
              <div className="text-sm text-gray-500">Average: <span className="text-gray-700">4.98</span></div>
            </div>
            <div className="text-right">
              <div className="text-gray-700 font-medium">Today: 7.89 ✓</div>
              <div className="text-xs text-gray-400 italic">Your daily habit journal will appear here!</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Create Button */}
      <div className="flex justify-end">
        <Button 
          onClick={handleCreateHabit}
          className="bg-gray-800 hover:bg-gray-700 text-white"
        >
          Create Habit
        </Button>
      </div>
    </div>
  );
}
