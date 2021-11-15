import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
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
        <Link style={{gridColumn: "span 3"}} to="/cart"><Button text="Finalizar Compra"/></Link>
      </div>
    : 
      <div className="item-count">
        <button className="quantity-btn" disabled={count === initial} onClick={()=>setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button className="quantity-btn" disabled={count === stock} onClick={()=>setCount(count + 1)}>+</button>
        <span className="available">Disponibles: {stock}</span>
        <Button onclick={handlerOnAdd} text="Agregar al carrito"/>      
      </div>
  )
}

export default ItemCount;