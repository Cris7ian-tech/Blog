import CardArticle from "../components/ui/CardArticle";
import hooksData from "../data/HooksData.json";

const BlogHooksPage = () => {
  const articles = hooksData.HooksDataCards;

  return (
    <main className="min-h-screen p-6 md:p-12 text-gray-100">

      {/* ENCABEZADO */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-3">React Hooks Series</h1>
        <p className="text-lg text-gray-300 max-w-4xl">
          Una colección de artículos explicados de forma clara, con ejemplos reales y buenas prácticas modernas.
        </p>
      </header>

      {/* GRID DE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <CardArticle
            id={a.id}
            key={a.titulo}
            titulo={a.titulo}
            subtitulo={a.subtitulo}
            descripcion={a.descripcion}
          />
        ))}
      </section>

    </main>
  );
};

export default BlogHooksPage;
