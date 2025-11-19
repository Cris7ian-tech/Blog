import {usePokemons} from "../hooks/usePokemons";
import type {Pokemon} from "../hooks/usePokemons";

import PokeCard from "./ui/PokeCard";

function PokemonsGrid() {
  const { pokemons, loading, error } = usePokemons(120);

  if (loading) {
    return (
      <p className="text-center text-gray-200 py-10 text-xl">
        Cargando pokemones...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-400 py-10 text-xl">
        {error}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {pokemons.map((pokemon: Pokemon) => (
        <PokeCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
}

export default PokemonsGrid;