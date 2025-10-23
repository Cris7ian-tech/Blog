import Navbar from "./components/Navbar";
import MainLayout from "./pages/MainLayout";
import "./index.css";

function App() {
  return (
    <>
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <MainLayout />
      </main>

      <footer className="bg-gray-900 text-gray-300 text-center py-4">
        <p>
          © {new Date().getFullYear()} Mi Blog — Creado con{" "}
          <span className="text-blue-300">React</span> y{" "}
          <span className="text-sky-400">Tailwind CSS</span>
        </p>
      </footer>
    </div>
    </>
  );
} 
export default App;