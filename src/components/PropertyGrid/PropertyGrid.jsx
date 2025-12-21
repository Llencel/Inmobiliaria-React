import PropertyCard from "../PropertyCard/PropertyCard";

export default function PropertyGrid({ inmuebles }) {

  if (!inmuebles || inmuebles.length === 0) {
    return <p>No hay inmuebles disponibles</p>;
  }

  return (
    <div className="property-grid">
      {inmuebles.map((inmueble) => {
        console.log("Inmueble recibido:", inmueble);

        return (
          <PropertyCard
            key={inmueble.id}
            inmueble={inmueble}   // 👈 ESTA ES LA LÍNEA CRÍTICA
          />
        );
      })}
    </div>
  );
}

