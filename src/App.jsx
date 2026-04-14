import { useState } from "react";
import { catalogo } from "./data";
import CustomHeader from "./componentes/CustomHeader.jsx";
import CardGrid from "./componentes/CardGrid.jsx";
import "./index.css";

function App() {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const itemsFiltrados = catalogo.filter((item) =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <CustomHeader />

      <main>
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={handleBusqueda}
        />

        <CardGrid items={itemsFiltrados} />
      </main>

      <footer>© 2026</footer>
    </>
  );
}

export default App;