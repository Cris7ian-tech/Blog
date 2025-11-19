
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, CardImage } from "./Card";
import { typeColors } from "../../utils/pokemonColors";

interface PokeCardProps {
  id: number;
  name: string;
  image: string;
  types: string[];
}

function PokeCard({ id, name, image, types }: PokeCardProps) {
  
  const navigate = useNavigate();
  const mainType = types[0];
  const color = typeColors[mainType] || "#888";

  return (
    <Card
      className="p-4 rounded-2xl transition transform hover:-translate-y-2 duration-200"
      style={{
        boxShadow: `0 4px 12px ${color}55`, // glow suave
        borderColor: color,
      }}
    >
      {/* Imagen */}
      <CardImage
        src={image}
        alt={name}
        className="transition scale-100 hover:scale-105 duration-200"
      />

      <CardHeader>
        <h3
          className="text-xl font-bold capitalize text-neutral-900 text-center"
          style={{ color }}
        >
          {name}
        </h3>
      </CardHeader>

      <CardBody>
        <div className="flex gap-2 flex-wrap justify-center">
          {types.map((type) => (
            <span
              key={type}
              className="px-3 py-1 text-sm font-semibold rounded-full capitalize text-white shadow"
              style={{
                backgroundColor: typeColors[type] || "#666",
              }}
            >
              {type}
            </span>
          ))}
        </div>
      </CardBody>

      <CardFooter>
        <button
          onClick={() => navigate(`/pokemon/${id}`)}
          className="w-full text-white py-2 rounded-lg font-semibold transition"
          style={{
            backgroundColor: color,
            boxShadow: `0 3px 6px ${color}55`,
          }}
        >
          Ver más
        </button>
      </CardFooter>
    </Card>
  );
}

export default PokeCard;
