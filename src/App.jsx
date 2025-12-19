import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Páginas públicas
import HomePage from "./pages/HomePage";
import Apartamentos from "./pages/Apartamentos.jsx";
import Casas from "./pages/Casas.jsx";
import Terrenos from "./pages/Terrenos.jsx";
import Locales from "./pages/Locales.jsx";
import Nosotros from "./pages/Nosotros.jsx";

// Auth / privadas
import Login from "./pages/Login.jsx";
import AgentPage from "./pages/AgentPage.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/apartamentos" element={<Apartamentos />} />
        <Route path="/casas" element={<Casas />} />
        <Route path="/terrenos" element={<Terrenos />} />
        <Route path="/locales" element={<Locales />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />

        {/* Privada – agentes */}
        <Route
          path="/AgentPage/*"
          element={
            <ProtectedRoute>
              <AgentPage />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
