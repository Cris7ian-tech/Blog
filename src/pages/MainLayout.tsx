
import { useNavigate } from "react-router-dom";
import UserAvatarCard from "../components/UserAvatarCard.tsx";
import ProjectCard from "../components/ProjectCard.tsx";

const MainLayout = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Pokedex Explorer",
      description: "Explorá todos los Pokémon: búsqueda, paginación, filtros y detalles.",
      image: "/src/assets/pokedex.png",
      link: "/pokemons",
    },
    {
      title: "React Hooks Series",
      description: "Artículos profundizando en los Hooks de React.",
      image: "/src/assets/hooks.png",
      link: "/blog/hooks",
    },
    {
      title: "UI Experiments",
      description: "Animaciones, microinteracciones y experimentos visuales.",
      image: "/src/assets/ui-experiments.png",
      link: "/projects/ui-experiments",
    }
  ];

  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-12 lg:p-20">

      {/* PRESENTACIÓN */}
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

          <UserAvatarCard />

          <p className="text-lg text-gray-100 mb-4 leading-relaxed">
            Soy un <strong>desarrollador web en proceso</strong> y este es mi blog.
          </p>

          <p className="text-lg text-gray-100 leading-relaxed">
            Acá comparto mis proyectos, experimentos y aprendizajes.
          </p>
        </div>
      </div>

      {/* PROYECTOS DESTACADOS */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">
          Proyectos destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              image={p.image}
              onClick={() => navigate(p.link)}
            />
          ))}
        </div>
      </section>

    </main>
  );
};

export default MainLayout;
