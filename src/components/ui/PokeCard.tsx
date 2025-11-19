import { Card, CardHeader, CardBody, CardFooter, CardImage } from "./Card";

interface PokeCardProps {
  name: string;
  image: string;
  types: string[];
}

function PokeCard({ name, image, types }: PokeCardProps) {
  return (
    <Card className="p-4 hover:shadow-xl hover:-translate-y-1 transition">
      
      <CardImage src={image} alt={name} />

      <CardHeader className="px-2">
        <h3 className="text-xl font-bold capitalize text-neutral-900">
          {name}
        </h3>
      </CardHeader>

      <CardBody className="px-2">
        <div className="flex gap-2 flex-wrap">
          {types.map((type) => (
            <span
              key={name + type}
              className="px-3 py-1 rounded-full text-sm bg-neutral-300 capitalize"
            >
              {type}
            </span>
          ))}
        </div>
      </CardBody>

      <CardFooter className="px-2 pb-2">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Ver más
        </button>
      </CardFooter>

    </Card>
  );
}

export default PokeCard;
