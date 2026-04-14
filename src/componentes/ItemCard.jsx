import { useState } from "react";
import "./ItemCard.css";

function ItemCard({ item }) {
  const [fav, setFav] = useState(false);

  return (
    <div className="card">
      <img src={item.imagen} alt={item.titulo} />

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