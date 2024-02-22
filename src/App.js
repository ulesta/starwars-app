import { useEffect, useReducer, useState } from "react";

import "./App.css";

import { peopleInitialState, peopleReducer } from "./reducers/peopleReducer";
import Pagination from "./components/Pagination/Pagination";
import { CardList } from "./components/CardList/CardList";
import { SpeciesContext } from "./context/SpeciesContext";

const PAGE_SIZE = 10;

function updateQueryParams(page) {
  const params = new URLSearchParams(window.location.search);
  params.set("page", page);
  window.history.replaceState(
    {},
    "",
    decodeURIComponent(`${window.location.pathname}?${params}`)
  );
}

function App() {
  const [state, dispatch] = useReducer(peopleReducer, peopleInitialState);
  const [page, setPage] = useState(1);
  const [speciesContext, setSpeciesContext] = useState({
    default: "rgb(155,155,90)",
  });

  useEffect(() => {
    updateQueryParams(page);

    dispatch({ type: "FETCH_PAGE" });
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          count: data.count,
          people: data.results,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", error });
      });
  }, [page]);

  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="List">
        {state.loading && <p>Loading...</p>}
        {state.error && <p>😭 Sorry about that! Something went wrong!</p>}

        {!state.loading && !state.error && state.people && (
          <SpeciesContext.Provider value={[speciesContext, setSpeciesContext]}>
            <CardList people={state.people} />
          </SpeciesContext.Provider>
        )}
      </div>

      {state.count && (
        <Pagination
          page={page}
          pageMax={Math.ceil(state.count / PAGE_SIZE)}
          onPrevClick={() => setPage(page - 1)}
          onNextClick={() => setPage(page + 1)}
        />
      )}
    </div>
  );
}

export default App;
