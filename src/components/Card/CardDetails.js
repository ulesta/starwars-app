import React from "react";

import "./CardDetails.css";

import { UNKNOWN_VALUE } from "../../constants/contants";
import { convertCentimetresToMetres, formatDate } from "../../utils/utils";

export default function CardDetails({
  name,
  height,
  mass,
  birthYear,
  numOfFilms,
  dateAdded,
  species,
}) {
  return (
    <div className="CardDetails">
      <h1 className="CardDetails-header">{name}</h1>
      <ul className="CardDetails-details">
        <li className="CardDetails-detail-item">
          Height:{" "}
          {height !== UNKNOWN_VALUE
            ? `${convertCentimetresToMetres(height)}m`
            : UNKNOWN_VALUE}
        </li>
        <li className="CardDetails-detail-item">
          Mass: {mass !== UNKNOWN_VALUE ? `${mass}kg` : UNKNOWN_VALUE}
        </li>
        <li className="CardDetails-detail-item">
          Added: {formatDate(dateAdded)}
        </li>
        <li className="CardDetails-detail-item">Films: {numOfFilms}</li>
        <li className="CardDetails-detail-item">Birth year: {birthYear}</li>
        {/* <li className="CardDetails-detail-item">Species: {species}</li> */}
      </ul>
    </div>
  );
}
