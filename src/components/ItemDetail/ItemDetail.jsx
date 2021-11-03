import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
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
          <p>{product.description.split("-").map((el,index) => <li key={index}>{el}</li>)}</p>
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
