import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ItemCount.scss"

const ItemCount = ({initial, stock, onAdd}) => {
  //Variables de estado
  const [count, setCount] = useState(initial);
  const [button, setButton] = useState(false);

  const handlerOnAdd = () => {
    onAdd(count);
    setButton(true);
  }

  //Renderizado del componente
  return (
    button
    ?
      <div className="item-count">
        <Link className="checkout-btn" to="/cart">Finalizar Compra</Link>
      </div>
    : 
      <div className="item-count">
        <button disabled={count === initial} onClick={()=>setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button disabled={count === stock} onClick={()=>setCount(count + 1)}>+</button>
        <span className="available">Disponibles: {stock}</span>
        <button onClick={handlerOnAdd}>Agregar al carrito</button>      
      </div>
  )
}

export default ItemCount;