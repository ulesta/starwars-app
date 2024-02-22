import { useEffect, useReducer, useState } from "react";

import "./App.css";

import { peopleInitialState, peopleReducer } from "./reducers/peopleReducer";
import Pagination from "./components/Pagination/Pagination";
import { CardList } from "./components/CardList/CardList";
import { SpeciesContext } from "./context/SpeciesContext";
import PersonModal from "./components/PersonModal/PersonModal";
import { BASE_URL } from "./constants/contants";

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
  const [page, setPage] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [speciesContext, setSpeciesContext] = useState({
    default: "rgb(155,155,90)",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("page")) {
      try {
        setPage(parseInt(params.get("page")));
      } catch (error) {
        setPage(null);
      }
    } else {
      setPage(1);
    }
  }, []);

  useEffect(() => {
    if (!page) {
      dispatch({ type: "FETCH_ERROR", error: "Page not found" });
      return;
    }

    updateQueryParams(page);
    // TODO: we can cache this by page number
    dispatch({ type: "FETCH_PAGE" });
    fetch(`${BASE_URL}/people/?page=${page}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res);
        }
        return res.json();
      })
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
      <div className="List">
        {state.loading && <p className="Loading">🌘 Loading...</p>}
        {state.error && <p>😭 Sorry about that! Something went wrong!</p>}

        {!state.loading && !state.error && state.people && (
          <SpeciesContext.Provider value={[speciesContext, setSpeciesContext]}>
            <CardList
              people={state.people}
              onCardClick={(person) => setSelectedPerson(person)}
            />
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

      {selectedPerson && (
        <SpeciesContext.Provider value={[speciesContext]}>
          <PersonModal
            title={selectedPerson.name}
            onDismiss={() => setSelectedPerson(null)}
            person={selectedPerson}
          />
        </SpeciesContext.Provider>
      )}
    </div>
  );
}

export default App;
