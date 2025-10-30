import { useState } from "react";

import hooksData from "../../data/HooksData.json";
import ButtonLeerMas from "./ButtonLeerMas";


function CardArticle({ titulo, subtitulo, descripcion }) {

  const [expandida, setExpandida] = useState(false);

  return (
    <>

        <article className="bg-neutral-900 shadow min-h-[200px] rounded-lg p-4 border border-stone-700
        transform transition-all duration-300 hover:translate-y-lg hover:shadow-cyan-500/20 hover:border-cyan-600">
          <div>
            <h3 className="font-medium text-2xl text-neutral-300 mb-4 leading-5">{titulo}</h3>
            <h4 className="font-semibold text-neutral-400 mb-4 leading-5">{subtitulo}</h4>
              <p className="text-neutral-500 mb-4 leading-5 line-clamp-4">{descripcion}</p>
          </div>
          <ButtonLeerMas />
        </article>

        <button 
        onClick={() => setExpandida(!expandida)}
        className="mt-4 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">

    {/*TERNARIO VA PALI?*/}
    { expandida? "Leer más ▲" : "Leer menos ▼" }

        </button>


    </>
  )
}

export default CardArticle