import React from "react";
import "./propertyCard.css";


export default function PropertyCard({ titulo, fotos, habitaciones, baños, area, onInteres }) {

  return (
    <article className="property-card">

      {/* GRID DE FOTOS */}
      <div className="grid-fotos">
        {fotos.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`foto ${index === 0 ? "foto-principal" : ""}`}
            alt={titulo}
          />
        ))}
      </div>

      {/* INFORMACIÓN */}
      <fieldset>
        <legend>{titulo}</legend>

        <table>
          <tbody>
            <tr><td><b>Habitaciones</b></td><td className="centrado">{habitaciones}</td></tr>
            <tr><td><b>Baños</b></td><td className="centrado">{baños}</td></tr>
            <tr><td><b>Área</b></td><td className="centrado">{area} m²</td></tr>
          </tbody>
        </table>

        {/* BOTÓN – Viene conectado al popup */}
        <button
          className="btn-interes"
          onClick={() => onInteres(titulo)}
        >
          Me interesa
        </button>
      </fieldset>
    </article>
  );
}
