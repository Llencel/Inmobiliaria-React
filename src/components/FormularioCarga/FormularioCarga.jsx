import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase/config";
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
      opciones: [
        "Centro Comercial",
        "Zona Industrial",
        "Zona Residencial",
        "Avenida",
        "Calle",
      ],
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
  const [formData, setFormData] = useState({});
  const [imagenPrincipal, setImagenPrincipal] = useState(null);
  const [galeria, setGaleria] = useState([]);

  useEffect(() => {
    setCampos(camposPorTipo[tipo] || []);
  }, [tipo]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const principalRef = ref(
        storage,
        `inmuebles/${Date.now()}_principal_${imagenPrincipal.name}`
      );

      await uploadBytes(principalRef, imagenPrincipal);
      const principalURL = await getDownloadURL(principalRef);

      const galeriaURLs = [];

      for (const img of galeria) {
        const imgRef = ref(storage, `inmuebles/${Date.now()}_${img.name}`);
        await uploadBytes(imgRef, img);
        const url = await getDownloadURL(imgRef);
        galeriaURLs.push(url);
      }

      await addDoc(collection(db, "inmuebles"), {
        ...formData,
        tipo,
        imagenes: {
          principal: principalURL,
          galeria: galeriaURLs,
        },
        creadoEn: new Date(),
      });

      alert("Inmueble guardado correctamente");

      setFormData({});
      setImagenPrincipal(null);
      setGaleria([]);
      setTipo("");

    } catch (error) {
      console.error("Error al guardar inmueble:", error);
      alert("Error al guardar el inmueble");
    }
  };

  return (
    <section className="form-wrapper">
      <h2>Registrar nuevo inmueble</h2>

      <form className="form-panel" onSubmit={handleSubmit}>
        {/* AQUÍ VA TODO TU JSX DE FORMULARIO */}
        {/* EXACTAMENTE COMO LO TENÍAS ANTES */}
        <button type="submit" className="btn-primary">
          Guardar inmueble
        </button>
      </form>
    </section>
  );
}
