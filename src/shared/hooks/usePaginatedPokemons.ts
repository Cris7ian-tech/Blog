import { useEffect, useState } from "react";

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export function usePaginatedPokemons(page: number, pageSize: number) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);

      const offset = (page - 1) * pageSize;

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pageSize}`);
      const data = await res.json();

      const detailed = await Promise.all(
        data.results.map(async (p: any) => {
          const res = await fetch(p.url);
          const d = await res.json();

          return {
            id: d.id,
            name: d.name,
            image: d.sprites.other["official-artwork"].front_default,
            types: d.types.map((t: any) => t.type.name)
          };
        })
      );

      setPokemons(detailed);
      setLoading(false);
    }

    fetchPokemons();
  }, [page, pageSize]);

  return { pokemons, loading };
}
