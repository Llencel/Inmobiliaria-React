import { Link } from "react-router-dom";
import MainContainer from "../components/MainContainer/MainContainer";
import PropertySection from "../components/PropertySection/PropertySection";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

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

      {/* ACCIÓN PRINCIPAL */}
      <PropertySection tituloSeccion="Gestión de inmuebles">
        <Link to="/AgentPage/formulario" className="primary-btn">
          + Cargar nuevo inmueble
        </Link>
      </PropertySection>

      {/* MIS INMUEBLES (DESDE FIRESTORE) */}
      <PropertySection tituloSeccion="Mis inmuebles" />

    </MainContainer>
  );
}
