
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
        backdrop-blur-2xl 
        bg-white/10 
        border border-white/20 
        rounded-3xl 
        overflow-hidden 
        
        transition-all duration-500 ease-out

        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]

        hover:-translate-y-2
        hover:border-[#fb7259]/40
        hover:bg-white/15
      "
    >
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="
          w-full h-52 object-cover 
          transition-transform duration-700 ease-out 
          group-hover:scale-110
          "
        />

      {/* Overlay sutil en hover */}
      <div className="
        absolute inset-0 
        bg-[#fb7259]/0 
        group-hover:bg-[#fb7259]/10
        transition duration-500
      " />
      </div>
      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-slate-300 mt-2">{description}</p>

        <button
          className="
            mt-4 w-full py-2
            rounded-xl
            bg-[#fb7259]
            text-white font-semibold
            transition-all duration-300
            shadow-[0_0_0_rgba(251,114,89,0)]
            hover:shadow-[0_0_25px_rgba(251,114,89,0.7)]
            hover:brightness-110
          "
        >
          Ver proyecto
        </button>
      </div>
    </div>
  );
}

