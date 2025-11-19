import { useParams } from "react-router-dom"
import { usePokemons } from "../hooks/usePokemons"

function PokemonLayout() {
  const { id } = useParams();
  const { pokemons, loading, error } = usePokemons(120);

  if (loading) return <p className="text-center text-gray-200">Cargando...</p>
  if (error) return <p className="text-center text-red-400">{error}</p>;

  const pokemon = pokemons.find(p => p.id === Number(id));

  if (!pokemon) return <p className="text-center text-red-400">Pokémon no encontrado</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto text-center text-gray-200">
      <img src={pokemon.image} alt={pokemon.name} className="w-64 mx-auto drop-shadow-lg" />
      <h1 className="text-4xl font-bold capitalize mt-4">{pokemon.name}</h1>

      <div className="flex justify-center gap-3 mt-4">
        {pokemon.types.map((t) => (
          <span key={t} className="px-4 py-1 rounded-full bg-gray-800 capitalize border">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonLayout