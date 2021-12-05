import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import "./CartWidget.scss"

const CartWidget = () => {
  const {quantity} = useCartContext();

  return (
    <div className="cart">
      <Link to={"/cart"}>
        <i className="fas fa-shopping-cart"></i>
        {quantity !== 0 && <span className="quantity">{quantity}</span>}
        </Link>
      </div>
  )
}

export default CartWidget