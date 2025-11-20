// import Projects from "./pages/Projects";

import ProyectosLayout from "./pages/Projects.tsx";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout.tsx";
import PokemonsGrid from "./components/PokemonsGrid.tsx";
import PokemonDetail from "./pages/PokemonDatail.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import "./index.css";
import Contacto from "./pages/Contacto.tsx";


function App() {
  return (
    <>
      <div className="App">

        <Header />
        <Routes>
          {/* Home */}
          <Route path="/" element={<MainLayout />} />
          {/* Proyectos */}
          <Route path="/projects" element={<ProyectosLayout />} />
          {/* Lista de pokemons */}
          <Route path="/pokemons" element={<PokemonsGrid />} />
          {/* Página individual */}
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          {/* Contacto */}
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
          <Footer />
      </div>
    </>
  );
}
export default App;



