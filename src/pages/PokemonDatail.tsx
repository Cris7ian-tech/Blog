import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { typeColors } from "../utils/pokemonColors";

interface PokemonData {
  id: number;
  name: string;
  sprites: {
    other: { ["official-artwork"]: { front_default: string } };
  };
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
          throw new Error("No se encontró el Pokémon");
        }

        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemon data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [id]);

  if (loading)
    return <p className="text-center text-gray-200">Cargando...</p>;

  if (!pokemon)
    return (
      <p className="text-center text-red-400">Pokémon no encontrado</p>
    );

  const name = pokemon.name;
  const image =
    pokemon.sprites.other["official-artwork"].front_default;

  const types = pokemon.types.map((t) => t.type.name);
  const mainType = types[0];
  const color = typeColors[mainType] || "#777";

  return (
    <div
      className="min-h-screen p-8 pt-20 text-gray-100"
      style={{
        background: `linear-gradient(160deg, ${color}55, #1e1e1e 70%)`,
      }}
    >
      {/* Botón volver */}
      <button
        onClick={() => navigate(-1)}
        className="mb-10 px-5 py-2 rounded-lg font-semibold bg-black/30 backdrop-blur-md border border-white/20 hover:bg-white/10 transition"
      >
        ← Volver
      </button>

      {/* Contenedor principal */}
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/20 relative">
        {/* Imagen principal */}
        <img
          src={image}
          alt={name}
          className="w-72 mx-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105"
        />

        {/* Nombre */}
        <h1
          className="text-5xl font-extrabold capitalize text-center mt-6"
          style={{ color }}
        >
          {name}
        </h1>

        {/* Tipos */}
        <div className="flex justify-center gap-4 mt-4">
          {types.map((t) => (
            <span
              key={t}
              className="px-4 py-1 rounded-full text-white font-semibold shadow"
              style={{ backgroundColor: typeColors[t] }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Stats */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Estadísticas</h2>

        <div className="space-y-4">
          {pokemon.stats.map((s) => (
            <div key={s.stat.name}>
              <div className="flex justify-between mb-1">
                <span className="capitalize">{s.stat.name}</span>
                <span>{s.base_stat}</span>
              </div>
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${s.base_stat / 1.5}%`,
                    backgroundColor: color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
