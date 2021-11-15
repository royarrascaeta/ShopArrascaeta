import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Button from '../Button/Button';
import "./Cart.scss";

const Cart = () => {
  const {cartList, total, removeItem} = useCartContext();

  const length = cartList.length;

  return (
    length > 0
    ? 
    <div className="cart-container" style={{alignSelf: "flex-start"}}>
      <h2>Detalle del carrito</h2>
      <div className="cart-items">
        {
          cartList.map((item) => 
          <div key={item.id} className="cart-item">
            <img className="image" src={`../assets/img/products/${item.pictureUrl}`} alt={item.name} />
            <h4 className="name">{item.name}</h4>
            <span className="price">Precio unitario: ${item.price}</span>
            <span className="quantity">x{item.quantity}</span>
            <span className="sub-total">${item.price * item.quantity}</span>
            <button onClick={()=>removeItem(item.id)} className="btn-remove"><i className="fas fa-trash-alt"></i></button>
          </div>)
        }
      </div>
      <div className="cart-total">
        <h3>Total de la compra: </h3>
        <span>${total}</span>
      </div>
      
    </div>
    : 
    <div className="cart-container">
      <h2>No hay artículos en tu carrito</h2>
      <Link to="/" style={{gridColumn: "span 2"}}><Button text="Volver a la tienda"/></Link>
    </div>  
  )
}

export default Cart
