
import MainLayout from "./pages/MainLayout";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
    </>
  );
} 
export default App;