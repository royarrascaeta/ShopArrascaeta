import React from 'react';
import { Link } from 'react-router-dom';
import "./CartItem.scss";

const CartItem = ({item, remove}) => {
  return (
    <div key={item.id} className="cart-item">
      <img className="image" src={`../assets/img/products/${item.pictureUrl}`} alt={item.name} />
      <Link className="name" to={`/detalle/${item.id}`}><h4>{item.name}</h4></Link>
      <span className="price">Precio unitario: ${item.price}</span>
      <span className="quantity">x{item.quantity}</span>
      <span className="sub-total">${item.price * item.quantity}</span>
      <button onClick={()=>remove(item.id)} className="btn-remove"><i className="fas fa-trash-alt"></i></button>
    </div>)
}

export default CartItem
