import React from "react";

import "./CardFront.css";

export default function CardFront({ name }) {
  return (
    <div className="CardFront">
      <h1 className="CardFront-header">{name}</h1>
    </div>
  );
}
