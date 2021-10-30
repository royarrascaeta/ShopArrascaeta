import {BrowserRouter, Switch, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
import './App.scss';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar />
          <Switch>
            <main>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/categoria/:idCategory">
              <ItemListContainer />
            </Route>
            <Route exact path="/detalle/:idProduct">
              <ItemDetailContainer />
            </Route>
            </main>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
