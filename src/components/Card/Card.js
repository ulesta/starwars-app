import React from "react";

import "./Card.css";
import CardFront from "./CardFront";
import CardDetails from "./CardDetails";

export default function Card({
  backgroundColor,
  name,
  height,
  mass,
  birthYear,
  numOfFilms,
  dateAdded,
  species,
}) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div
      className={`Card ${showDetails ? "hover" : ""}`}
      style={{ backgroundColor }}
      onMouseOver={() => {
        setShowDetails(true);
      }}
      onMouseOut={() => {
        setShowDetails(false);
      }}
    >
      <CardFront
        hidden={showDetails}
        name={name}
        backgroundColor={backgroundColor}
      />
      <CardDetails
        name={name}
        birthYear={birthYear}
        dateAdded={dateAdded}
        height={height}
        mass={mass}
        numOfFilms={numOfFilms}
        species={species}
      />
    </div>
  );
}
