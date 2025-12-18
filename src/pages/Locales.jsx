// src/pages/Locales.jsx
import Header from "../components/Header/Header.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import PropertyCard from "../components/PropertyCard/PropertyCard.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Locales() {

  const locales = [
    {
      titulo: "Local ideal para emprendimiento",
      fotos: [
        "local_0001.jpg",
        "local_0002.jpg",
        "local_0003.jpg",
        "local_0004.jpg",
        "local_0005.jpg",
        "local_0006.jpg"
      ],
      habitaciones: "1 espacio amplio",
      baños: 1,
      area: "45 m²"
    }
  ];

  return (
    <>

      <main className="properties-container">
        {locales.map((local, index) => (
          <PropertyCard
            key={index}
            {...local}
          />
        ))}
      </main>

    </>
  );
}
