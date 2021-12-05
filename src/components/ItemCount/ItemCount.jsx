import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useCartContext } from '../../context/CartContext';
import "./ItemCount.scss"

const ItemCount = ({initial, stock, onAdd}) => {
  //Variables de estado
  const [count, setCount] = useState(initial);
  const [button, setButton] = useState(false);

  const { quantity} = useCartContext();

  const handlerOnAdd = () => {
    onAdd(count);
    setButton(true);
  }

  const backButton = () => {
    setButton(false);
  }

  //Renderizado del componente
  return (
    button
    ?
      <div className="item-count">
        <Link style={{gridColumn: "span 3"}} to="/cart"><Button text="Finalizar Compra" addClass="full-width"/></Link>
        <Button onclick={backButton} text="Seguir Comprando" addClass="full-width alt" />
      </div>
    : 
      <div className="item-count">
        <button className="quantity-btn" disabled={count === initial} onClick={()=>setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button className="quantity-btn" disabled={count === stock} onClick={()=>setCount(count + 1)}>+</button>
        <span className="available">Disponibles: {stock}</span>
        <Button onclick={handlerOnAdd} text="Agregar al carrito" addClass="full-width"/>
        {
          quantity !== 0 && <Link to="/cart" style={{gridColumn: "span 3"}}><Button text="Ver Carrito" addClass="full-width alt"/></Link>
        }    
      </div>
  )
}

export default ItemCount;