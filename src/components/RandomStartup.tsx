import { cleanDescription } from "../lib"
import { Startup } from "../types"

interface RandomStartupProps {
  startup: Startup
  font: string
}

export function RandomStartup(p: RandomStartupProps) {
  const description = cleanDescription(p.startup.description, [p.startup.startup_one_name, p.startup.startup_two_name], p.startup.name)
  return (
    <div className="flex flex-col items-center flex-1 max-w-96">
      <div className="text-3xl py-6 flex items-center text-red-800" style={{ fontFamily: p.font }}>{p.startup.name}</div>
      <div className="h-1/3 text-center px-1">{description}</div>
      <div className="text-center">from:</div>
      <div className="text-lg flex h-1/3 flex-row justify-between w-full">
        <div className="text-center w-1/2">
          <div className="font-bold text-sm pb-3">{p.startup.startup_one_name}</div>
          <div className="text-xs">{p.startup.startup_one_description}</div>
        </div>
        <div className="text-center w-1/2">
          <div className="font-bold text-sm pb-3">{p.startup.startup_two_name}</div>
          <div className="text-xs">{p.startup.startup_two_description}</div>
        </div>
      </div>
    </div>
  )
}