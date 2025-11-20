import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

  // FETCH
  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error("No se encontró el Pokémon");

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
    return <p className="text-center text-red-400">Pokémon no encontrado</p>;

  // DATA
  const name = pokemon.name;
  const image = pokemon.sprites.other["official-artwork"].front_default;
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
      {/* Volver */}
      <button
        onClick={() => navigate(-1)}
        className="mb-10 px-5 py-2 rounded-lg font-semibold bg-black/30 backdrop-blur-md border border-white/20 hover:bg-white/10 transition"
      >
        ← Volver
      </button>

      {/* Card principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/20 relative"
      >
        {/* Imagen con float + glow */}
        <motion.img
          src={image}
          alt={name}
          className="w-72 mx-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: `drop-shadow(0px 0px 25px ${color}80)`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />

        {/* Nombre */}
        <motion.h1
          className="text-5xl font-extrabold capitalize text-center mt-6"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {name}
        </motion.h1>

        {/* Tipos */}
        <motion.div
          className="flex justify-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {types.map((t) => (
            <motion.span
              key={t}
              className="px-4 py-1 rounded-full text-white font-semibold shadow"
              style={{ backgroundColor: typeColors[t] }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Estadísticas</h2>

        <div className="space-y-4">
          {pokemon.stats.map((s, i) => (
            <motion.div
              key={s.stat.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="flex justify-between mb-1">
                <span className="capitalize">{s.stat.name}</span>
                <span>{s.base_stat}</span>
              </div>

              {/* Barra animada */}
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${s.base_stat / 1.5}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default PokemonDetail;
