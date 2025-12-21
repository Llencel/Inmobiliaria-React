import "./propertyCard.css";

export default function PropertyCard({ inmueble }) {
  if (!inmueble) return null;

  const {
    titulo,
    tipo,
    imagenes = {},
    direccion,
    precio,
  } = inmueble;

  // DEBUG CONTROLADO (opcional)
  console.log("IMÁGENES RECIBIDAS:", imagenes);

  const principal = imagenes?.principal || null;
  const galeria = imagenes?.galeria || [];

  const renderDetalles = () => {
    switch (tipo) {
      case "casa":
        return (
          <>
            <tr><td>Habitaciones</td><td>{inmueble.habitaciones ?? "—"}</td></tr>
            <tr><td>Baños</td><td>{inmueble.banos ?? "—"}</td></tr>
            <tr><td>Pisos</td><td>{inmueble.pisos ?? "—"}</td></tr>
            <tr><td>Garaje</td><td>{inmueble.garaje ? "Sí" : "No"}</td></tr>
            <tr><td>Patio</td><td>{inmueble.patio ? "Sí" : "No"}</td></tr>
          </>
        );

      case "apartamento":
        return (
          <>
            <tr><td>Habitaciones</td><td>{inmueble.habitaciones ?? "—"}</td></tr>
            <tr><td>Baños</td><td>{inmueble.banos ?? "—"}</td></tr>
            <tr><td>Piso</td><td>{inmueble.piso ?? "—"}</td></tr>
            <tr><td>Estacionamiento</td><td>{inmueble.estacionamiento ? "Sí" : "No"}</td></tr>
          </>
        );

      case "local":
        return (
          <>
            <tr><td>Área útil</td><td>{inmueble.area_util ?? "—"} m²</td></tr>
            <tr><td>Baños</td><td>{inmueble.banos ?? "—"}</td></tr>
            <tr><td>Zona</td><td>{inmueble.zona ?? "—"}</td></tr>
          </>
        );

      case "terreno":
        return (
          <>
            <tr><td>Agua</td><td>{inmueble.agua ? "Sí" : "No"}</td></tr>
            <tr><td>Luz</td><td>{inmueble.luz ? "Sí" : "No"}</td></tr>
            <tr><td>Alcantarillado</td><td>{inmueble.alcantarillado ? "Sí" : "No"}</td></tr>
            <tr><td>Delimitado</td><td>{inmueble.limites ? "Sí" : "No"}</td></tr>
          </>
        );

      case "oficina":
        return (
          <>
            <tr><td>Espacios</td><td>{inmueble.espacios ?? "—"}</td></tr>
            <tr><td>Baños</td><td>{inmueble.banos ?? "—"}</td></tr>
          </>
        );

      default:
        return (
          <tr>
            <td colSpan="2">Información no disponible</td>
          </tr>
        );
    }
  };

  return (
    <article className="property-card">

        {/* IMÁGENES */}
        <div className="grid-fotos">
          {Array.isArray(imagenes) && imagenes.length > 0 ? (
            <>
              {/* Imagen principal */}
              <img
                src={imagenes[0]}
                className="foto foto-principal"
                alt={titulo || direccion || "Inmueble"}
                loading="lazy"
              />

              {/* Galería (si hay más imágenes) */}
              {imagenes.slice(1).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className="foto"
                  alt={`Galería ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </>
          ) : (
            <div className="foto foto-principal placeholder">
              Sin imagen
            </div>
          )}
        </div>
        
      {/* INFORMACIÓN */}
      <fieldset>
        <legend>{titulo || direccion || "Inmueble"}</legend>

        <table>
          <tbody>
            <tr><td>Precio</td><td>{precio ?? "—"}</td></tr>
            {renderDetalles()}
          </tbody>
        </table>

        <button className="btn-interes">
          Me interesa
        </button>
      </fieldset>

    </article>
  );
}
