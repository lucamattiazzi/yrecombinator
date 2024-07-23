import { useEffect, useState } from "react"
import { RandomStartup } from "./components/RandomStartup"
import { getRandomGoogleFont } from "./lib"
import { getRandomStartup } from "./supabaseClient"
import { Startup } from "./types"

function App() {
  const [startup, setStartup] = useState<Startup | null>(null)
  const [font, setFont] = useState<string>("")

  async function getNewStartup() {
    const randomStartup = await getRandomStartup()
    const randomFont = await getRandomGoogleFont()
    setFont(randomFont)
    setStartup(randomStartup)
  }

  useEffect(() => {
    getNewStartup()
  }, [])

  if (!startup) return null

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="pt-8 w-full flex flex-col items-center justify-center relative">
        <div className="text-4xl z-10 pb-3">yRecombinator</div>
        <div className="text-xs text-center z-10">Combining two random startups from yCombinator.</div>
        <div className="text-xs text-center z-10 pb-3">For fun.</div>
        <div className="text-4xl text-center cursor-pointer z-10" onClick={getNewStartup}>🔄</div>
        <img className="absolute h-full opacity-50" src="/logo.png"/>
      </div>
      {startup && <RandomStartup startup={startup} font={font}/>}
    </div>
  )
}
export default App