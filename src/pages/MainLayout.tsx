import PokemonsGrid from "../components/PokemonsGrid.tsx";
import hooksData from "../data/HooksData.json";
import CardArticle from "../components/ui/CardArticle.tsx";
import UserAvatarCard from "../components/UserAvatarCard.tsx.tsx";

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

        {/* Probamos generador de avatar */}
          <UserAvatarCard />

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

      {/* HERO POKEDEX */}
<section className="mt-20 text-center px-4">
  <div className="
    mx-auto max-w-3xl 
    p-10 
    rounded-3xl 
    bg-white/10 
    backdrop-blur-md 
    border border-white/20
    shadow-xl
    bg-linear-to-br from-purple-800/40 to-blue-700/40
  ">
    <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
      Pokédex Explorer
    </h2>

    <p className="text-gray-200 text-lg mt-4">
      Descubre, explora y colecciona tus Pokémon favoritos con estilo ✨
    </p>
  </div>
</section>

{/* GRID DE POKEMONS */}
  <div className="mt-16 px-4">
    <div className="
      p-6 
      rounded-3xl 
      bg-white/5 
      backdrop-blur-md 
      border border-white/10 
      shadow-lg
    ">
      <PokemonsGrid />
    </div>
  </div>

    </main>
    </>
  );
};

export default MainLayout;
