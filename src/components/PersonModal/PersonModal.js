import React, { useContext, useEffect, useReducer } from "react";

import "./PersonModal.css";

import Header from "../Header/Header";

import { UNKNOWN_VALUE } from "../../constants/contants";
import {
  homeworldInitialState,
  homeworldReducer,
} from "../../reducers/homeworldReducer";
import { SkeletonText } from "../SkeletonText/SkeletonText";
import { SpeciesContext } from "../../context/SpeciesContext";
import { convertCentimetresToMetres, formatDate } from "../../utils/utils";

export default function PersonModal({ title, onDismiss, person }) {
  const [homeworld, dispatch] = useReducer(
    homeworldReducer,
    homeworldInitialState
  );
  const [speciesContext] = useContext(SpeciesContext);

  useEffect(() => {
    if (person.homeworld) {
      // TODO: we can cache this homeworld
      dispatch({ type: "FETCH_PAGE" });

      fetch(person.homeworld)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "FETCH_HOMEWORLD_SUCCESS", details: data });
        })
        .catch((error) => {
          dispatch({ type: "FETCH_HOMEWORLD_ERROR", error });
        });
    }
  }, [person]);

  return (
    <div className="PersonModal" tabIndex={-1}>
      <div
        className="PersonModal-container"
        style={{
          backgroundColor:
            speciesContext[
              person.species && person.species.length
                ? person.species[0]
                : "default"
            ],
        }}
      >
        <Header title={title} onActionClick={() => onDismiss()}></Header>
        <div className="PersonModal-content">
          <ul className="PersonModal-details">
            <li className="PersonModal-details-item">
              Height:{" "}
              {person.height !== UNKNOWN_VALUE
                ? `${convertCentimetresToMetres(person.height)}m`
                : UNKNOWN_VALUE}
            </li>
            <li className="PersonModal-details-item">
              Mass:{" "}
              {person.mass !== UNKNOWN_VALUE
                ? `${person.mass}kg`
                : UNKNOWN_VALUE}
            </li>
            <li className="PersonModal-details-item">
              Birth year: {person.birth_year}
            </li>
            <li className="PersonModal-details-item">
              Films: {person.films.length}
            </li>
            <li className="PersonModal-details-item">
              Added: {formatDate(person.created)}
            </li>
          </ul>

          {homeworld.loading && (
            <>
              <SkeletonText />
              <SkeletonText />
              <SkeletonText />
            </>
          )}

          {!homeworld.loading && homeworld.details && (
            <>
              <h2>Homeworld</h2>

              <ul className="PersonModal-details">
                <li className="PersonModal-details-item">
                  Name: {homeworld.details?.name || UNKNOWN_VALUE}
                </li>
                <li className="PersonModal-details-item">
                  Terrain: {homeworld.details?.terrain || UNKNOWN_VALUE}
                </li>
                <li className="PersonModal-details-item">
                  Climate: {homeworld.details?.climate || UNKNOWN_VALUE}
                </li>
                <li className="PersonModal-details-item">
                  Residents:{" "}
                  {homeworld.details?.residents?.length || UNKNOWN_VALUE}
                </li>
              </ul>
            </>
          )}

          {!homeworld && homeworld.error && (
            <p className="PersonModal-error">
              🌋 Sorry about that! Something went wrong loading their homeworld!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
