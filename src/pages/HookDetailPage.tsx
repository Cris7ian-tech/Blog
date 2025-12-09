import { useParams } from "react-router-dom";
import hooksData from "../data/HooksData.json";

const HookDetailPage = () => {
  const { id } = useParams();

  // Obtener el hook correcto desde el JSON
  const hook = hooksData.HooksDataCards.find((h) => h.id === id);

  if (!hook) {
    return (
      <main className="p-10 text-center text-gray-200">
        <h1 className="text-3xl font-bold mb-4">Hook no encontrado</h1>
        <p>El hook solicitado no existe o fue eliminado.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 md:p-12 text-gray-100 max-w-4xl mx-auto">

      {/* TÍTULO */}
      <h1 className="text-5xl font-bold mb-4">{hook.titulo}</h1>
      <h2 className="text-xl text-gray-400 mb-8">{hook.subtitulo}</h2>

      {/* DESCRIPCIÓN GENERAL */}
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        {hook.descripcion}
      </p>

      {/* EJEMPLO DE USO */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">Ejemplo básico</h3>
        <pre className="bg-neutral-900 p-4 rounded-lg border border-neutral-700 overflow-x-auto">
{`
import { ${hook.titulo} } from "react";

function Demo() {
  // usa el hook aquí
}
`}
        </pre>
      </section>

      {/* BUENAS PRÁCTICAS */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">Buenas prácticas</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Utiliza el hook dentro de componentes funcionales.</li>
          <li>No lo llames dentro de condicionales o loops.</li>
          <li>Mantén las dependencias claras y explícitas.</li>
        </ul>
      </section>

      {/* VIDEO */}
      <section className="mb-16">
        <h3 className="text-3xl font-semibold mb-4">Video recomendado</h3>

        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-xl border border-neutral-700"
            src="https://www.youtube.com/embed/dpw9EHDh2bM"
            title="React Hook Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </main>
  );
};

export default HookDetailPage;
