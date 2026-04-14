import "./Cardgridmodule.css";
import ItemCard from "./ItemCard.jsx";
import React from "react";

function CardGrid({ items }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardGrid;
