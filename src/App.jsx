import { Routes, Route } from "react-router-dom";

// Componentes
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Páginas
import Apartamentos from "./pages/Apartamentos.jsx";
import Casas from "./pages/Casas.jsx";
import Terrenos from "./pages/Terrenos.jsx";
import Locales from "./pages/Locales.jsx";
import Nosotros from "./pages/Nosotros.jsx";

function App() {
  return (
    <>
      <Header />
      <Navbar />

        <Routes>
          <Route path="/" element={<Apartamentos />} />
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
