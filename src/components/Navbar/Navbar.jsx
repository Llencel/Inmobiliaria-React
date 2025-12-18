import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/logo_inmobiliaria.png" alt="Logo de la inmobiliaria" />
          </Link>
        </div>

        {/* Links */}
        <ul className="nav-links">
          <li><Link to="/apartamentos">Apartamentos</Link></li>
          <li><Link to="/casas">Casas</Link></li>
          <li><Link to="/terrenos">Terrenos</Link></li>
          <li><Link to="/locales">Locales</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default NavBar;

