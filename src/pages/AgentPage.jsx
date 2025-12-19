import { Link } from "react-router-dom";
import MainContainer from "../components/MainContainer/MainContainer";
import PropertySection from "../components/PropertySection/PropertySection";
import PropertyGrid from "../components/PropertyGrid/PropertyGrid";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import { useAuth } from "../context/AuthContext";

export default function AgentPage() {
  const { user } = useAuth();

  // Mock inicial de inmuebles del agente
  const misInmuebles = [
    {
      titulo: "Apartamento Publicado",
      fotos: ["img1.jpg"],
      habitaciones: 2,
      baños: 2,
      area: "85 m²",
    },
    {
      titulo: "Casa en Venta",
      fotos: ["img1.jpg"],
      habitaciones: 4,
      baños: 3,
      area: "160 m²",
    },
  ];

  return (
    <MainContainer>
      {/* BIENVENIDA */}
      <section style={{ marginBottom: "2rem" }}>
        <h1>Panel del Agente</h1>
        <p>
          Bienvenido{user?.email ? `, ${user.email}` : ""}.  
          Desde aquí puedes administrar tus inmuebles.
        </p>
      </section>

      {/* ACCIONES RÁPIDAS */}
      <PropertySection
        title="Acciones rápidas"
        subtitle="Gestiona tu actividad"
      >
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
    
          <Link to="/AgentPage/formulario" className="primary-btn">
            + Cargar nuevo inmueble
          </Link>

        </div>
      </PropertySection>

      {/* MIS INMUEBLES */}
      <PropertySection
        title="Mis inmuebles"
        subtitle="Propiedades que has publicado"
      >
        <PropertyGrid>
          {misInmuebles.map((item, index) => (
            <PropertyCard key={index} {...item} />
          ))}
        </PropertyGrid>
      </PropertySection>
    </MainContainer>
  );
}
