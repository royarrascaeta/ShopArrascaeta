import React from 'react';
import { Link } from 'react-router-dom';
import "./CartWidget.scss"

const CartWidget = () => {
  return (
    <div className="cart"><Link to={"/"}><i className="fas fa-shopping-cart"></i></Link></div>
  )
}

export default CartWidget
