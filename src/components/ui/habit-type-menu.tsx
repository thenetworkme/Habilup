import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { Button } from "./button"
import { Hash, CheckSquare } from "lucide-react"

interface HabitTypeMenuProps {
  trigger?: React.ReactNode
}

const HabitTypeMenu = ({ trigger }: HabitTypeMenuProps) => {
  const handleTypeSelection = (type: string) => {
    window.location.href = `/create-habit?type=${type}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger || <Button>Crear hábito</Button>}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <div className="p-4">
          <h3 className="mb-2 text-base font-medium">Elige tu tipo de hábito</h3>
          <div className="space-y-3">
            <DropdownMenuItem className="flex flex-col items-start p-0 focus:bg-transparent hover:bg-transparent" onClick={() => handleTypeSelection('NUMBER')}>
              <div className="w-full p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-start space-x-2">
                  <Hash className="h-5 w-5 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-medium">Number</span>
                    <span className="text-xs text-gray-500">Unidad personalizable, ej. millas caminadas, páginas leídas, o minutos meditados.</span>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start p-0 focus:bg-transparent hover:bg-transparent" onClick={() => handleTypeSelection('CHECKBOX')}>
              <div className="w-full p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <div className="flex items-start space-x-2">
                  <CheckSquare className="h-5 w-5 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-medium">Checkbox</span>
                    <span className="text-xs text-gray-500">Seguimiento de una tarea que solo puede hacerse una vez, ej. ir al gimnasio, despertar antes de las 7.</span>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { HabitTypeMenu }