import PokemonsGrid from "../components/PokemonsGrid.tsx";
import hooksData from "../data/HooksData.json";
import CardArticle from "../components/ui/CardArticle.tsx";

const MainLayout = () => {
  return (
    <>
    <main className="min-h-screen p-4 sm:p-6 md:p-12 lg:p-20">
      
      {/* SECCIÓN PRESENTACIÓN */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        
        {/* IMAGEN */}
        <div className="md:col-span-2 rounded-lg overflow-hidden bg-gray-700">
          <img
            src="/src/assets/react.svg"
            alt="react logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXTOS */}
        <div className="md:col-span-3 rounded-lg bg-[#eb7d69] px-4 py-6">
          <h2 className="text-gray-100 text-2xl font-bold py-2">
            Hola! soy Cristian ✌️
          </h2>

          <p className="text-lg text-gray-100 mb-4 leading-relaxed">
            Soy un <strong>desarrollador web en proceso</strong> y este es mi
            blog, donde comparto mis proyectos y experiencias en la programación.
          </p>

          <p className="text-lg text-gray-100 mb-4 leading-relaxed">
            La primera publicación será sobre <strong>React</strong> y sus{" "}
            <strong>Hooks</strong>, una herramienta clave para crear aplicaciones
            modernas y dinámicas.
          </p>

          <p className="text-lg text-gray-100 leading-relaxed">
            Si estás empezando con React o querés mejorar tu forma de trabajar
            con componentes funcionales, <strong>este espacio es para vos.</strong>
          </p>
        </div>
      </div>

      {/* ARTÍCULOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {hooksData.HooksDataCards.map((hook, index) => (
          <CardArticle
            key={index}
            titulo={hook.titulo}
            subtitulo={hook.subtitulo}
            descripcion={hook.descripcion}
          />
        ))}
      </div>

      {/* POKEMONS TEMPORAL PARA TESTEAR */}
      {/* <div className="mt-12">
        <h2 className="text-4xl font-bold text-gray-100 mb-4 text-center">Pokemons Api TesT</h2>
        
        <PokemonsGrid />
      </div> */}
      <div className="mt-16 bg-neutral-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10">
        <h2 className="text-4xl font-extrabold text-cyan-300 mb-6 text-center tracking-tight drop-shadow">
          Pokemons API Test
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
          Renderizando 120 pokemones desde <strong>PokeAPI</strong>, usando tu propio
          <span className="text-cyan-400"> hook personalizado</span> y tus componentes
          de Card. Esta sección pronto será su propia página.
        </p>

        <PokemonsGrid />
      </div>

    </main>
    </>
  );
};

export default MainLayout;
