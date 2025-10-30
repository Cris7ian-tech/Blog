import hooksData from "../../data/HooksData.json";
import ButtonLeerMas from "./ButtonLeerMas";


function CardArticle({ titulo, subtitulo, descripcion }) {
  return (
    <>

        <article className="bg-neutral-900 shadow min-h-[200px] rounded-lg p-4 border border-stone-700">
          <div>
            <h3 className="font-medium text-2xl text-neutral-300 mb-4 leading-5">{titulo}</h3>
            <h4 className="font-semibold text-neutral-400 mb-4 leading-5">{subtitulo}</h4>
              <p className="text-neutral-500 mb-4 leading-5 line-clamp-4">{descripcion}</p>
          </div>
          <ButtonLeerMas />
        </article>

    </>
  )
}

export default CardArticle