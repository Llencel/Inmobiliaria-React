// src/pages/Apartamentos.jsx
import MainContainer from "../components/MainContainer/MainContainer";
import PropertySection from "../components/PropertySection/PropertySection";
import PropertyGrid from "../components/PropertyGrid/PropertyGrid";
import PropertyCard from "../components/PropertyCard/PropertyCard";

export default function Apartamentos() {
  const apartamentos = [
    {
      titulo: "Apartamento Moderno en el Centro",
      fotos: ["img1.jpg"],
      habitaciones: 2,
      baños: 2,
      area: "80 m²",
    },
    {
      titulo: "Apartamento Familiar en Zona Norte",
      fotos: ["img1.jpg"],
      habitaciones: 3,
      baños: 2,
      area: "95 m²",
    },
    {
      titulo: "Apartamento Tipo Loft",
      fotos: ["img1.jpg"],
      habitaciones: 1,
      baños: 1,
      area: "55 m²",
    },
    {
      titulo: "Apartamento de Lujo con Vista",
      fotos: ["img1.jpg"],
      habitaciones: 4,
      baños: 3,
      area: "140 m²",
    },
  ];

  return (
    <MainContainer>
      <PropertySection title="Apartamentos disponibles">
        <PropertyGrid>
          {apartamentos.map((apt, index) => (
            <PropertyCard key={index} {...apt} />
          ))}
        </PropertyGrid>
      </PropertySection>
    </MainContainer>
  );
}

