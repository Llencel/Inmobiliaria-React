// src/pages/Casas.jsx
import Navbar from "../components/Navbar/Navbar.jsx";
import PropertyCard from "../components/PropertyCard/PropertyCard.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Casas() {

  const casas = [
    {
      titulo: "Casa Familiar en Zona Tranquila",
      fotos: [
        "casa_0001.jpg",
        "casa_0002.jpg",
        "casa_0003.jpg",
        "casa_0004.jpg",
        "casa_0005.jpg",
        "casa_0006.jpg"
      ],
      habitaciones: 3,
      baños: 2,
      area: "120 m²"
    }
  ];

  return (
    <>

      <main className="properties-container">
        {casas.map((casa, index) => (
          <PropertyCard
            key={index}
            {...casa}
          />
        ))}
      </main>

    </>
  );
}
