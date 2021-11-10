import {BrowserRouter, Switch, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
import CartContextProvider, { CartContext } from "./context/CartContext";
import './App.scss';
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
        <NavBar />
            <main>
            <Switch>
              <Route exact path="/">
                <ItemListContainer/>
              </Route>
              <Route exact path="/categoria/:idCategory">
                <ItemListContainer />
              </Route>
              <Route exact path="/detalle/:idProduct">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
            </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
