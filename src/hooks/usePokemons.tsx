import { useEffect, useState } from "react";


interface PokemonBasic {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface UsePokemonsReturn {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
}

export function usePokemons(limit: number = 220): UsePokemonsReturn {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const data = await res.json();
        console.log("BASIC LIST:", data.results);
        const basicPokemons: PokemonBasic[] = data.results;

        const detailed = await Promise.all(
          basicPokemons.map(async (poke) => {
            const pokeRes = await fetch(poke.url);
            const pokeData = await pokeRes.json();

            return {
              id: pokeData.id,
              name: pokeData.name,
              image: pokeData.sprites.other["official-artwork"].front_default,
              types: pokeData.types.map((t: any) => t.type.name),
            };
          })
        );

        setPokemons(detailed);
      } catch {
        setError("No se pudieron cargar los pokemones");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [limit]);

  return { pokemons, loading, error };
}

