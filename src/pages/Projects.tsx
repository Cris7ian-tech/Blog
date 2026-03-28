import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.tsx";

function Projects() {
  const navigate = useNavigate();

  return (
    
    <main className="relative min-h-screen bg-[#020617] text-white overflow-hidden p-10">
      <div className="max-w-7xl mx-auto">
      {/* Fondo radial glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,114,89,0.15),transparent_60%)]" />
      </div>

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

          transition-all duration-500
          hover:shadow-[0_0_40px_rgba(251,114,89,0.2)]
        ">
          <div className="absolute inset-0 pointer-events-none">
  
            {/* Glow coral */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,114,89,0.35),transparent_70%)]" />
            
            {/* Glow secundario */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#fb7259]/10 blur-[100px] rounded-full" />

          </div>

          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg relative z-10">
            Mis Proyectos
          </h1>

          <p className="text-slate-300-200 text-xl mt-4 relative z-10 max-w-2xl mx-auto">
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

      </div>

    </main>
  );
}
export default Projects