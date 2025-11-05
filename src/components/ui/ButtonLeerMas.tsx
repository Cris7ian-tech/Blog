import { useState } from "react"

const ButtonLeerMas = () => {
  const [expandida, setExpandida] = useState(true);

  return (
    // <button className="border border-cyan-400 font-semibold px-4 py-2 rounded-full text-gray-400 cursor-pointer hover:bg-cyan-400 hover:text-black">Leer más</button>
  <button 
        onClick={() => setExpandida(!expandida)}
        className="mt-4 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
    {/*TERNARIO VA PALI?*/}
    { expandida? "Leer más +" : "Leer menos -" }
        </button>
  )
}

export default ButtonLeerMas