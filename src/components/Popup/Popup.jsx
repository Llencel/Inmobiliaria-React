import { useState } from "react";
import "./popup.css";

export default function Popup({ propiedad, abierto, onCerrar }) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [confirmacion, setConfirmacion] = useState(false);

  if (!abierto) return null;

  const enviarFormulario = (e) => {
    e.preventDefault();

    // Aquí luego enviaremos a Firebase
    console.log({
      nombre,
      telefono,
      correo,
      mensaje,
      propiedad,
    });

    setConfirmacion(true);

    // limpiar
    setNombre("");
    setTelefono("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <div className="popup-interes">
      <div className="popup-content">
        <span
          className="cerrar"
          onClick={() => {
            setConfirmacion(false);
            onCerrar();
          }}
        >
          &times;
        </span>

        {!confirmacion ? (
          <>
            <h2>Estoy interesado en:</h2>
            <p id="propiedad-seleccionada">{propiedad}</p>

            <form id="interes-form" onSubmit={enviarFormulario}>
              <input
                type="text"
                placeholder="Tu nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />

              <input
                type="number"
                placeholder="Tu teléfono"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />

              <input
                type="email"
                placeholder="Tu correo"
                required
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />

              <textarea
                placeholder="Mensaje opcional"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />

              <button className="btn-enviar">Enviar</button>
            </form>
          </>
        ) : (
          <div className="popup-confirm">
            <p>
              Estás a un paso de adquirir tu propiedad ideal.
              <br />
              Uno de nuestros agentes se contactará muy pronto contigo.
            </p>

            <button
              className="btn-enviar"
              onClick={() => {
                setConfirmacion(false);
                onCerrar();
              }}
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
