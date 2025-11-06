import { useState } from "react";

import Paragraph from "../Paragraph";

type CardArticleProps = {
  titulo: string;
  subtitulo: string;
  descripcion: string;
};

function CardArticle({ titulo, subtitulo, descripcion }: CardArticleProps) {
  const [expandida, setExpandida] = useState(false);
  return (
    <>

        <article className="bg-neutral-900 shadow min-h-[200px] rounded-lg p-4 border border-stone-700
        transform transition-all duration-300 hover:translate-y-lg hover:shadow-cyan-500/20 hover:border-cyan-600">
          <div>
              <Paragraph className="font-medium text-2xl text-neutral-300 mb-4 leading-5">
                <h3 className="font-medium text-2xl text-neutral-300 mb-4 leading-5">{titulo}</h3>
                <h4 className="font-medium text-xl text-neutral-500 mb-4 leading-5">{subtitulo}</h4>
                {expandida ? descripcion : `${descripcion.slice(0, 90)}...`  }
                <button
                  className="text-cyan-400 font-medium hover:underline self-start block"
                  onClick={() => setExpandida(!expandida)}>
                  {expandida ? 'Leer menos' : 'Leer más'}
                </button>
              </Paragraph>
          </div>
        </article>
    </>
  )
}

export default CardArticle