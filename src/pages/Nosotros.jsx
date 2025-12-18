// src/pages/Nosotros.jsx
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Nosotros() {
  return (
    <>
      <Navbar />

      <main className="nosotros-container">
        <h1>Sobre Nosotros</h1>
        <p>
          Somos una empresa dedicada a conectar personas con su espacio ideal.
          Trabajamos con transparencia, compromiso y pasión por el sector inmobiliario.
        </p>
      </main>

    </>
  );
}
