import { Link } from "react-router-dom";
import MainContainer from "../components/MainContainer/MainContainer";
import PropertySection from "../components/PropertySection/PropertySection";
import PropertyGrid from "../components/PropertyGrid/PropertyGrid";
import PropertyCard from "../components/PropertyCard/PropertyCard";

export default function HomePage() {
  const apartamentos = [
    {
      titulo: "Apartamento Moderno",
      fotos: ["img1.jpg"],
      habitaciones: 2,
      baños: 2,
      area: "80 m²",
    },
    {
      titulo: "Apartamento Familiar",
      fotos: ["img1.jpg"],
      habitaciones: 3,
      baños: 2,
      area: "95 m²",
    },
  ];

  const casas = [
    {
      titulo: "Casa Campestre",
      fotos: ["img1.jpg"],
      habitaciones: 4,
      baños: 3,
      area: "180 m²",
    },
    {
      titulo: "Casa Urbana Moderna",
      fotos: ["img1.jpg"],
      habitaciones: 3,
      baños: 2,
      area: "140 m²",
    },
  ];

  const locales = [
    {
      titulo: "Local Comercial Centro",
      fotos: ["img1.jpg"],
      area: "60 m²",
    },
    {
      titulo: "Local en Zona Empresarial",
      fotos: ["img1.jpg"],
      area: "85 m²",
    },
  ];

  const terrenos = [
    {
      titulo: "Terreno Residencial",
      fotos: ["img1.jpg"],
      area: "300 m²",
    },
    {
      titulo: "Terreno Campestre",
      fotos: ["img1.jpg"],
      area: "1200 m²",
    },
  ];

  return (
    <MainContainer>

      {/* APARTAMENTOS */}
      <PropertySection
        title="Apartamentos"
        subtitle="Opciones modernas y funcionales"
        action={
          <Link to="/apartamentos" className="section-link">
            Ver todos
          </Link>
        }
      >
        <PropertyGrid>
          {apartamentos.map((item, index) => (
            <PropertyCard key={index} {...item} />
          ))}
        </PropertyGrid>
      </PropertySection>

      {/* CASAS */}
      <PropertySection
        title="Casas"
        subtitle="Espacios ideales para tu familia"
        action={
          <Link to="/casas" className="section-link">
            Ver todas
          </Link>
        }
      >
        <PropertyGrid>
          {casas.map((item, index) => (
            <PropertyCard key={index} {...item} />
          ))}
        </PropertyGrid>
      </PropertySection>

      {/* LOCALES */}
      <PropertySection
        title="Locales Comerciales"
        subtitle="Impulsa tu negocio"
        action={
          <Link to="/locales" className="section-link">
            Ver todos
          </Link>
        }
      >
        <PropertyGrid>
          {locales.map((item, index) => (
            <PropertyCard key={index} {...item} />
          ))}
        </PropertyGrid>
      </PropertySection>

      {/* TERRENOS */}
      <PropertySection
        title="Terrenos"
        subtitle="Invierte en el futuro"
        action={
          <Link to="/terrenos" className="section-link">
            Ver todos
          </Link>
        }
      >
        <PropertyGrid>
          {terrenos.map((item, index) => (
            <PropertyCard key={index} {...item} />
          ))}
        </PropertyGrid>
      </PropertySection>

    </MainContainer>
  );
}
