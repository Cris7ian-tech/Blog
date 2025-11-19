
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export default function ProjectCard({ title, description, image, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer 
        group 
        backdrop-blur-xl 
        bg-white/10 
        border border-white/20 
        rounded-3xl 
        overflow-hidden 
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        transition-all duration-300 
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
        hover:-translate-y-2
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>

        <button
          className="
            mt-4 w-full py-2 
            rounded-xl 
            bg-linear-to-r from-purple-500 to-blue-500 
            text-white font-semibold 
            transition shadow-md
            hover:shadow-lg hover:brightness-110
          "
        >
          Ver proyecto
        </button>
      </div>
    </div>
  );
}

