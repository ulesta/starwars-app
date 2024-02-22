import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card
          name={"Han Solo"}
          birthYear={"1991"}
          dateAdded={"9323"}
          height={13}
          mass={41}
          numOfFilms={4}
        />
      </header>
    </div>
  );
}

export default App;
