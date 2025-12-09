import { motion } from "framer-motion";
import { useState } from "react";
import Pagination from "./Pagination.tsx"
import PokeCard from "./PokeCard.tsx";
import { usePaginatedPokemons } from "../hooks/usePaginatedPokemons.ts"

function PokemonsGrid() {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const { pokemons, loading } = usePaginatedPokemons(currentPage, pageSize);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {loading && (
        <p className="text-center text-gray-200 py-10 text-xl">
          Cargando pokemones...
        </p>
      )}

      {!loading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {pokemons.map((p) => (
              <PokeCard
                key={p.id}
                id={p.id}
                name={p.name}
                image={p.image}
                types={p.types}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(1302 / pageSize)}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      )}
    </motion.div>
  );
}

export default PokemonsGrid;
