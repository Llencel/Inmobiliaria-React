import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import FormularioInmueble from "../components/FormularioCarga/FormularioCarga";


export default function AgentPage() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="formulario" element={<FormularioInmueble />} />
    </Routes>
  );
}
