import { useState } from "react";
import "./ItemCard.css";

function ItemCard({ item }) {
  const [fav, setFav] = useState(false);
  const [imgError, setImgError] = useState(false);

  const hasImage = Boolean(item.imagen && item.imagen.trim());

  return (
    <div className={`card ${item.destacado ? "borde-dorado" : ""} ${fav ? "fondo-favorito" : ""}`}>
      
      {hasImage && !imgError ? (
        <img 
          src={item.imagen} 
          alt={item.titulo}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="no-image">Imagen no disponible</div>
      )}

      <div className="overlay">
        <h3>{item.titulo}</h3>

        <button onClick={() => setFav(!fav)}>
          {fav ? "💛 Me gusta" : "🤍 Me gusta"}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;