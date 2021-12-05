import {BrowserRouter, Switch, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
import CartContextProvider, { CartContext } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Error404 from "./pages/Error404";
import SectionContainer from "./components/SectionContainer/SectionContainer";
import Home from "./components/Home/Home";
import './App.scss';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
        <NavBar />
            <main>
            <Switch>
              <Route exact path="/">
                <SectionContainer>
                  <Home />
                </SectionContainer>
              </Route>
              <Route exact path="/categoria/:idCategory">
                <ItemListContainer showCategory={true} />
              </Route>
              <Route exact path="/detalle/:idProduct">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route path="*">
                <Error404 />
              </Route>
            </Switch>
            </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
