import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import PropertyGrid from "../PropertyGrid/PropertyGrid";
import "./PropertySection.css";

export default function PropertySection({ tituloSeccion }) {
  const [inmuebles, setInmuebles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInmuebles = async () => {
      try {
        const snapshot = await getDocs(collection(db, "inmuebles"));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setInmuebles(data);
      } catch (error) {
        console.error("Error cargando inmuebles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInmuebles();
  }, []);

  if (loading) return <p>Cargando inmuebles...</p>;

  return (
    <section className="property-section">
      <h2>{tituloSeccion}</h2>
      <PropertyGrid inmuebles={inmuebles} />
    </section>
  );
}
