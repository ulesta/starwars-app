import React from "react";

import "./Card.css";
import CardFront from "./CardFront";
import CardDetails from "./CardDetails";

export default function Card({
  name,
  height,
  mass,
  birthYear,
  numOfFilms,
  dateAdded,
}) {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div
      className="Card"
      onMouseOver={() => {
        setShowDetails(true);
      }}
      onMouseOut={() => {
        setShowDetails(false);
      }}
    >
      {showDetails ? (
        <CardDetails
          name={"Han Solo"}
          birthYear={"1991"}
          dateAdded={"9323"}
          height={13}
          mass={41}
          numOfFilms={4}
        />
      ) : (
        <CardFront name={"Han Solo"} />
      )}
    </div>
  );
}
