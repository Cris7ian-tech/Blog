import { Card, CardHeader, CardBody, CardFooter, CardImage } from "./Card.tsx";

interface PokeCardProps {
  name:string;
  image: string;
  types: string[];
}

function PokeCards({ name, image, types }: PokeCardProps) {
  return (
    <Card className="p-4 hover:shadow-xl hover:-translate-y-1 transition">
      <CardImage src={image} alt={name} />

      <CardHeader>
        <h3 className="text-xl font-bold capitalize text-neutral-900">
          {name}
        </h3>
      </CardHeader>

      <CardBody>
        <div className="flex gap-2 flex-wrap">
          {types.map((type) => (
            <span
              key={type}
              className="px-3 py-1 rounded-full text-sm bg-neutral-300 capitalize"
            >
              {type}
            </span>
          ))}
        </div>
      </CardBody>

      <CardFooter>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Ver más
        </button>
      </CardFooter>

    </Card>
  )
}

export default PokeCards