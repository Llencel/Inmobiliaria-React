import { useEffect, useState } from "react";
import "./formularioCarga.css";

const camposPorTipo = {
  casa: [
    { nombre: "habitaciones", label: "Habitaciones", tipo: "number" },
    { nombre: "banos", label: "Baños", tipo: "number" },
    { nombre: "garaje", label: "¿Tiene garaje?", tipo: "checkbox" },
    { nombre: "patio", label: "¿Tiene patio?", tipo: "checkbox" },
    { nombre: "pisos", label: "Número de pisos", tipo: "number" },
  ],
  apartamento: [
    { nombre: "habitaciones", label: "Habitaciones", tipo: "number" },
    { nombre: "banos", label: "Baños", tipo: "number" },
    { nombre: "piso", label: "Piso", tipo: "text" },
    { nombre: "estacionamiento", label: "¿Tiene estacionamiento?", tipo: "checkbox" },
  ],
  local: [
    { nombre: "area_util", label: "Área útil (m²)", tipo: "number" },
    { nombre: "banos", label: "Baños", tipo: "number" },
    {
      nombre: "zona",
      label: "Tipo de ubicación",
      tipo: "list",
      opciones: ["Centro Comercial", "Zona Industrial", "Zona Residencial", "Avenida", "Calle"],
    },
  ],
  terreno: [
    { nombre: "agua", label: "¿Tiene agua?", tipo: "checkbox" },
    { nombre: "luz", label: "¿Tiene luz?", tipo: "checkbox" },
    { nombre: "limites", label: "¿Está delimitado?", tipo: "checkbox" },
    { nombre: "alcantarillado", label: "¿Tiene alcantarillado?", tipo: "checkbox" },
  ],
  oficina: [
    { nombre: "espacios", label: "N° de espacios", tipo: "number" },
    { nombre: "banos", label: "Baños", tipo: "number" },
  ],
  otro: [
    { nombre: "descripcion", label: "Descripción general", tipo: "textarea" },
  ],
};

export default function FormularioCarga() {
  const [tipo, setTipo] = useState("");
  const [campos, setCampos] = useState([]);

  useEffect(() => {
    setCampos(camposPorTipo[tipo] || []);
  }, [tipo]);

  return (
    <section className="form-wrapper">
      <h2>Registrar nuevo inmueble</h2>

      <form className="form-panel">

        {/* Información general */}
        <div className="card-seccion">
          <h3>Información general</h3>

          <label>Título</label>
          <input type="text" required />

          <label>Tipo de inmueble</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
            <option value="">Seleccione un tipo</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="local">Local</option>
            <option value="terreno">Terreno</option>
            <option value="oficina">Oficina</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Tamaño */}
        <div className="card-seccion">
          <h3>Tamaño del inmueble</h3>

          {tipo === "terreno" ? (
            <input type="number" placeholder="Ingrese m² exactos" required />
          ) : (
            <select required>
              <option value="">Seleccione un rango</option>
              <option>25 - 35 m²</option>
              <option>35 - 45 m²</option>
              <option>45 - 55 m²</option>
              <option>55 - 75 m²</option>
              <option>75 - 100 m²</option>
              <option>150+</option>
            </select>
          )}
        </div>

        {/* Ubicación */}
        <div className="card-seccion">
          <h3>Ubicación</h3>
          <input type="text" placeholder="Dirección" required />
          <input type="text" placeholder="Zona o municipio" required />

          <div className="map-placeholder">[Mapa aquí]</div>
        </div>

        {/* Precio */}
        <div className="card-seccion">
          <h3>Precio</h3>
          <select required>
            <option value="">Seleccione un rango</option>
            <option>0 - 5.000.000</option>
            <option>5.000.000 - 10.000.000</option>
            <option>10.000.000 - 15.000.000</option>
            <option>15.000.000 - 20.000.000</option>
            <option>20.000.000 - 30.000.000</option>
            <option>30.000.000 - 50.000.000</option>
            <option>50.000.000+</option>
          </select>
        </div>

        {/* Campos dinámicos */}
        <div className="card-seccion">
          <h3>Características del inmueble</h3>

          {campos.map((campo) => {
            if (campo.tipo === "checkbox") {
              return (
                <label key={campo.nombre} className="checkbox-row">
                  <input type="checkbox" /> {campo.label}
                </label>
              );
            }

            if (campo.tipo === "textarea") {
              return <textarea key={campo.nombre} placeholder={campo.label} />;
            }

            if (campo.tipo === "list") {
              return (
                <select key={campo.nombre}>
                  <option value="">Seleccione</option>
                  {campo.opciones.map((op) => (
                    <option key={op}>{op}</option>
                  ))}
                </select>
              );
            }

            return <input key={campo.nombre} type={campo.tipo} placeholder={campo.label} />;
          })}
        </div>

        {/* Fotos */}
        <div className="card-seccion">
          <h3>Fotos</h3>
          <input type="file" accept="image/*" required />
          <input type="file" accept="image/*" multiple required />
        </div>

        <button className="btn-primary">Guardar inmueble</button>
      </form>
    </section>
  );
}
