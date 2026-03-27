import { Link } from "react-router-dom";
import { useState } from "react";
import Paragraph from "./Paragraph";

type CardArticleProps = {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
};

function CardArticle({ id, titulo, subtitulo, descripcion }: CardArticleProps) {
  const [expandida, setExpandida] = useState(false);

  return (
    <Link to={`/blog/hooks/${id}`}>
      <article
        className="
        group relative
        bg-neutral-900/80 backdrop-blur-sm
        min-h-[200px] rounded-xl p-5
        border border-stone-700

        transition-all duration-300 ease-out

        hover:-translate-y-2
        hover:border-cyan-500
        hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]

        cursor-pointer overflow-hidden
        active:scale-[0.98]
        "
      >
        {/* 🔥 Glow */}
        <div
          className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-500
          bg-linear-to-br from-cyan-500/10 via-transparent to-purple-500/10
          z-0 pointer-events-none
        "
        />

        {/* ✅ Contenido */}
        <div className="relative z-10">
          <h3
            className="
            font-medium text-2xl text-neutral-300 mb-4 leading-5
            transition-colors duration-300
            group-hover:text-cyan-400 group-hover:tracking-wide
            cursor-pointer
          "
          >
            {titulo}
          </h3>

          <h4 className="font-medium text-xl text-neutral-500 mb-4 leading-5 group-hover:text-neutral-300 transition-colors">
            {subtitulo}
          </h4>

          <Paragraph className="font-medium text-base text-neutral-300 mb-4 leading-relaxed">
            {expandida
              ? descripcion
              : `${descripcion.slice(0, 90)}...`}

            <button
              className="text-cyan-400 font-medium hover:underline block mt-2"
              onClick={(e) => {
                e.preventDefault(); // evita navegación
                setExpandida(!expandida);
              }}
            >
              {expandida ? "Leer menos" : "Leer más"}
            </button>
          </Paragraph>
        </div>
      </article>
    </Link>
  );
}

export default CardArticle;
