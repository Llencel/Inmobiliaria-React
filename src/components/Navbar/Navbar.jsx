import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./navbar.css";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* IZQUIERDA: LOGO */}
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src="/logo_inmobiliaria.png" alt="Logo de la inmobiliaria" />
          </Link>
        </div>

        {/* CENTRO: NAVEGACIÓN */}
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/apartamentos">Apartamentos</Link></li>
          <li><Link to="/casas">Casas</Link></li>
          <li><Link to="/terrenos">Terrenos</Link></li>
          <li><Link to="/locales">Locales</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>

          {isAuthenticated && (
            <>
              <li><Link to="/AgentPage">Dashboard</Link></li>
              <li><Link to="/AgentPage/formulario">Cargar inmueble</Link></li>
            </>
          )}
        </ul>

        {/* DERECHA: AUTENTICACIÓN */}
        <div className="navbar-right">
          {!isAuthenticated ? (
            <Link to="/login" className="login-btn">
              Iniciar sesión
            </Link>
          ) : (
            <button onClick={logout} className="login-btn">
              Cerrar sesión
            </button>
          )}
        </div>

      </div>
    </nav>
  );
};

export default NavBar;