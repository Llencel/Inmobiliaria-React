// src/pages/Terrenos.jsx
import Header from "../components/Header/Header.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import PropertyCard from "../components/PropertyCard/PropertyCard.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Terrenos() {

  const terrenos = [
    {
      titulo: "Terreno amplio para proyecto",
      fotos: [
        "terreno_0001.jpg",
        "terreno_0002.jpg",
        "terreno_0003.jpg",
        "terreno_0004.jpg",
        "terreno_0005.jpg",
        "terreno_0006.jpg"
      ],
      habitaciones: "-",
      baños: "-",
      area: "400 m²"
    }
  ];

  return (
    <>

      <main className="properties-container">
        {terrenos.map((terreno, index) => (
          <PropertyCard
            key={index}
            {...terreno}
          />
        ))}
      </main>

    </>
  );
}
