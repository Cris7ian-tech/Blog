// import Projects from "./pages/Projects";

import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import ProyectosLayout from "./pages/Projects.tsx";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout.tsx";
import PokemonsGrid from "./shared/ui/PokemonsGrid.tsx";
import PokemonDetail from "./pages/PokemonDatail.tsx";
import Footer from "./components/layout/Footer.tsx";
import Header from "./components/layout/Header.tsx";
import Contacto from "./pages/contacto/Contacto.tsx";
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

              {/* React Hooks Series */}
              <Route 
                path="/blog/hooks" 
                element={
                  <PageTransition>
                    <h1 className="p-10 text-3xl text-white">React Hooks Series — Próximamente 🚀</h1>
                  </PageTransition>
                }
              />

              {/* UI Experiments */}
              <Route 
                path="/projects/ui-experiments" 
                element={
                  <PageTransition>
                    <h1 className="p-10 text-3xl text-white">UI Experiments — Próximamente 🎨</h1>
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



