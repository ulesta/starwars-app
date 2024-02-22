import { useContext, useEffect } from "react";

import { SpeciesContext } from "../../context/SpeciesContext";
import Card from "../Card/Card";

import "./CardList.css";

export function CardList({ people, onCardClick }) {
  const [speciesContext, setSpeciesContext] = useContext(SpeciesContext);

  useEffect(() => {
    if (!people || people.length === 0) {
      return null;
    }

    people.forEach((person) => {
      person.species.forEach((spec) => {
        if (!speciesContext[spec]) {
          setSpeciesContext({
            ...speciesContext,
            [spec]: `rgba(${Math.floor(Math.random() * 256)},${Math.floor(
              Math.random() * 256
            )},${Math.floor(Math.random() * 256)}, 255)`,
          });
        }
      });
    });
  }, [people, speciesContext, setSpeciesContext]);

  if (!people || people.length === 0) {
    return null;
  }

  return (
    <ul className="CardList">
      {people.map((person) => (
        <li
          className="CardList-item"
          tabIndex={0}
          key={person.name}
          onClick={() => onCardClick && onCardClick(person)}
        >
          <Card
            backgroundColor={
              speciesContext[
                person.species.length ? person.species[0] : "default"
              ]
            }
            name={person.name}
            birthYear={person.birth_year}
            dateAdded={person.created}
            height={person.height}
            mass={person.mass}
            numOfFilms={person.films.length}
            species={person.species[0]}
          />
        </li>
      ))}
    </ul>
  );
}
