import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* IZQUIERDA: LOGO */}
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src="/logo_inmobiliaria.png" alt="Logo de la inmobiliaria" />
          </Link>
        </div>

        {/* CENTRO: LINKS */}
        <ul className="nav-links">
          <li><Link to="/apartamentos">Apartamentos</Link></li>
          <li><Link to="/casas">Casas</Link></li>
          <li><Link to="/terrenos">Terrenos</Link></li>
          <li><Link to="/locales">Locales</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/">Inicio</Link></li>
        </ul>

        {/* DERECHA: LOGIN */}
        <div className="navbar-right">
          <Link to="/login" className="login-btn">
            Iniciar sesión
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
