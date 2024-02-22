import React from "react";

import "./CardFront.css";

export default function CardFront({ name, backgroundColor, hidden }) {
  return (
    <div
      className={`CardFront ${hidden ? "hidden" : ""}`}
      style={{ backgroundColor }}
    >
      <h1 className="CardFront-header">{name}</h1>
    </div>
  );
}
