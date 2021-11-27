import { createContext, useState, useContext, useEffect} from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([]);

  const [total, setTotal] = useState(0);

  const [quantity, setQuantity] = useState(0);
  
  useEffect(() => {
    totalValue();
    calcQuantity();
  }, [cartList])

  const addItem = (product) => {
    const itemInCart = isInCart(product.id);

    if(!itemInCart){
      setCartList([...cartList, product])

    }else{
      const newCartList = cartList.map((item) => {
        if(item.id === itemInCart.id){
          return {
            ...item,
            quantity: item.quantity + product.quantity
          }
        }
        
        return item;
      })
      setCartList(newCartList);
    }
  }

  const removeItem = (id) => {
    const newCartList = [...cartList];
    const indexItem = newCartList.findIndex(item => item.id === id);

    if(newCartList[indexItem].quantity === 1){
      newCartList.splice(indexItem, 1)
    }else{
      newCartList[indexItem].quantity = newCartList[indexItem].quantity - 1;
    }

    setCartList(newCartList);
  }

  const removeAll = () => {
    setCartList([]);
    console.log("Items Borrados");
  }

  const totalValue = () => {
    let total = 0;

    for (let item of cartList) {
      total += item.price * item.quantity;
    }

    setTotal(total);
  }

  const calcQuantity = () => {
    let quantity = 0;

    for (let item of cartList) {
      quantity += item.quantity;
    }

    setQuantity(quantity);
  }

  const isInCart = (id) => cartList.find(item => item.id === id) || false;

  const showCartList = () => {
    console.log(cartList)
  }

  // showCartList();

  return (
    <CartContext.Provider value={{
      cartList,
      total,
      quantity,
      showCartList,
      addItem,
      removeItem,
      removeAll
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
