// import Projects from "./pages/Projects";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import ProyectosLayout from "./pages/Projects.tsx";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout.tsx";
import PokemonsGrid from "./components/PokemonsGrid.tsx";
import PokemonDetail from "./pages/PokemonDatail.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Contacto from "./pages/Contacto.tsx";
import "./index.css";
import PageTransition from "./components/PageTransition.tsx";


function App() {
  const location = useLocation();

  return (
    <>
      <div className="App">
        <Header />

        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Home */}
              <Route 
                path="/" 
                element={
                <PageTransition>
                  <MainLayout />
                </PageTransition>
                }
              />

              {/* Proyectos */}
              <Route 
                path="/projects" 
                element={
                <PageTransition>
                  <ProyectosLayout />
                </PageTransition>
              }
            />

              {/* Lista de pokemons */}
              <Route 
                path="/pokemons" 
                element={
                <PageTransition>
                  <PokemonsGrid />
                </PageTransition>
                } 
                />
              {/* Página individual */}
              <Route 
                path="/pokemon/:id" 
                element={
                <PageTransition>
                  <PokemonDetail />
                </PageTransition>
                } 
                />
              {/* Contacto */}
              <Route 
                path="/contacto" 
                element={
                <PageTransition>
                  <Contacto />
                </PageTransition>
                } 
                />
            </Routes>
        </AnimatePresence>
          <Footer />
      </div>
    </>
  );
}
export default App;



