import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import "./ItemDetail.scss";

const ItemDetail = ({product}) => {
  const {addItem, cartList} = useCartContext();

  const available = cartList.find(item => item.id === product.id)
    ? product.stock - cartList.find(item => item.id === product.id).quantity
    : product.stock

  const onAdd = (qty) => {
    addItem({...product, quantity: qty});
  }
  
  return (
    <>
      <div className="detail-img">
        <img src={`../assets/img/products/${product.pictureUrl}`} alt="" />
      </div>
      <div className="detail-list">
        <div>
          <h2 className="title">{product.name}</h2>
          <span className="category">Categoria: <Link className="category-link" to={`/categoria/${product.category}`}>{product.category}</Link></span>
          <hr />
          <h4 className="description-title">Descripción:</h4>
          <p className="description">{product.description.split("-").map((el,index) => <li key={index}>{el}</li>)}</p>
        </div>
        <div>
          <span className="price">${product.price}</span>
          {
            available !== 0
              ? <ItemCount initial={available !== 0 ? 1 : available} stock={available} product={product} onAdd={onAdd} />
              : <>
                <Button addClass="full-width disabled" text="Producto sin stock" />
                <Link to="/cart" style={{gridColumn: "span 3"}}><Button text="Ver Carrito" addClass="full-width alt"/></Link>
                </>
          }
          
        </div>
      </div>
    </>
  )
}

export default ItemDetail