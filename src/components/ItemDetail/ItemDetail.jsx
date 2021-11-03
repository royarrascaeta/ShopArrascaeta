import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./ItemDetail.scss";

const ItemDetail = ({product}) => {
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
          <ItemCount product={product} />
        </div>
      </div>
    </>
  )
}

export default ItemDetail
