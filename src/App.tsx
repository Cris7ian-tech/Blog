

import {Card, CardHeader, CardBody, CardFooter} from "./components/ui/Card.tsx";
import MainLayout from "./pages/MainLayout.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import "./index.css";


function App() {
  return (
    <>
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <MainLayout />
        <Card className="w-[480px] h-[220xp]">

          <CardHeader>
            <div className="bg-gray-400 font-semibold rounded-t-xl p-4">
              <h2 className="text-xl font-bold text-white">Bienvenido/a a esta sección!</h2>
            </div>
          </CardHeader>

          <CardBody  className="flex justify-between p-4">
            <div className="p-2">
              <p className="mt-4 text-sm text-gray-700 ">Quizas te interesa esto. Estamos aprendiendo React Hooks y compound components, seguramente esto este mal, pero por algo se comienza.</p>
            </div>
            <img 
            className="w-[180px h-[156px] rounded-xl"
            src="https://images.pexels.com/photos/34212916/pexels-photo-34212916.jpeg" alt="codigo"/>

          </CardBody>

          <CardFooter className="bg-gray-300 p-4 rounded-b-2xl">
            <div className="flex justify-around">
              <button className="border border-orange-300 rounded-full p-2 bg-orange-400 text-white">Leer Post</button>
              <button><img src="/src/assets/share.svg" alt="compartir"/></button>
            </div>
          </CardFooter>

        </Card>
        
      </main>
      <div>
        
      </div>

      <footer>
        <Footer />
      </footer>

    </div>
    </>
  );
} 
export default App;