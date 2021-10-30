import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.scss";

const ItemDetail = ({product}) => {
  return (
    <>
      <div className="detail-img">
        <figure>
          <img src={product.pictureUrl} alt="" />
        </figure>
      </div>
      <div className="detail-list">
        <div>
          <h2 className="title">{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <div>
          <span className="price">${product.price}</span>
          <ItemCount stock={product.stock} />
        </div>
      </div>
    </>
  )
}

export default ItemDetail
