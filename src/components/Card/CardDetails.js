import React from "react";

import "./CardDetails.css";

export default function CardDetails({
  name,
  height,
  mass,
  birthYear,
  numOfFilms,
  dateAdded,
}) {
  return (
    <div className="CardDetails">
      <h1 className="CardDetails-header">{name}</h1>
      <ul className="CardDetails-details">
        <li className="CardDetails-detail-item">Height: {height}m</li>
        <li className="CardDetails-detail-item">Mass: {mass}kg</li>
        <li className="CardDetails-detail-item">Birth year: {birthYear}</li>
        <li className="CardDetails-detail-item">Films: {numOfFilms}</li>
        <li className="CardDetails-detail-item">Added: {dateAdded}</li>
      </ul>
    </div>
  );
}
