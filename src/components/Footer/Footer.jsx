// Footer.jsx
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Teléfono: +57 300 000 0000</p>
          <p>Email: info@inmobiliaria.com</p>
          <p>Dirección: Bogotá, Colombia</p>
        </div>

        <div className="footer-section">
          <h3>Explora</h3>
          <ul>
            <li><a href="/apartamentos">Apartamentos</a></li>
            <li><a href="/casas">Casas</a></li>
            <li><a href="/locales">Locales</a></li>
            <li><a href="/oficinas">Oficinas</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Inmobiliaria. Todos los derechos reservados.</p>
      </div>

    </footer>
  );
};

export default Footer;
