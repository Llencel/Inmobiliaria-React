import { Routes, Route } from "react-router-dom";

// Componentes
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Páginas
import HomePage from "./pages/HomePage";
import Apartamentos from "./pages/Apartamentos.jsx";
import Casas from "./pages/Casas.jsx";
import Terrenos from "./pages/Terrenos.jsx";
import Locales from "./pages/Locales.jsx";
import Nosotros from "./pages/Nosotros.jsx";

function App() {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apartamentos" element={<Apartamentos />} />
          <Route path="/casas" element={<Casas />} />
          <Route path="/terrenos" element={<Terrenos />} />
          <Route path="/locales" element={<Locales />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;
