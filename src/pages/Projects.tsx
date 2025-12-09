import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.tsx";

function Projects() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen p-10">

      {/* HERO */}
      <section className="text-center mt-20 px-4">
        <div className="
          mx-auto max-w-4xl 
          p-14 
          rounded-3xl 
          bg-white/10 
          backdrop-blur-xl 
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          relative overflow-hidden
        ">
          <div className="absolute inset-0 bg-linear-to-br from-purple-700/30 to-blue-600/30 pointer-events-none"></div>

          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg relative z-10">
            Mis Proyectos
          </h1>

          <p className="text-gray-200 text-xl mt-4 relative z-10 max-w-2xl mx-auto">
            Una colección de demos y experimentos creados mientras aprendo y evoluciono como desarrollador 💻⚡
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

        <ProjectCard
          title="Pokédex Explorer"
          description="Explora Pokémon, páginas individuales y diseño con efectos visuales avanzados."
          image="/src/assets/pokedex-banner.jpg"
          onClick={() => navigate("/pokemons")}
        />

        <ProjectCard
          title="React Hooks Series"
          description="Mis artículos sobre los hooks de React más importantes."
          image="/src/assets/hooks-cover.jpg"
          onClick={() => navigate("/")}
        />

        <ProjectCard
          title="UI Experiments"
          description="Componentes visuales, glassmorphism y animaciones."
          image="/src/assets/ui-experiments.jpg"
        />

      </section>
    </main>
  );
}
export default Projects