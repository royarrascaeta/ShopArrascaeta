import './App.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="Texto del componente ItemListContainer" />
      </main>
    </div>
  );
}

export default App;
