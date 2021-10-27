import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.scss";

const ItemDetail = ({detail}) => {
  return (
    <>
      <div className="detail-img">
        <figure>
          <img src={detail.pictureUrl} alt="" />
        </figure>
      </div>
      <div className="detail-list">
        <div>
          <h2 className="title">{detail.name}</h2>
          <p>{detail.description}</p>
        </div>
        <div>
          <span className="price">${detail.price}</span>
          <ItemCount stock={detail.stock} />
        </div>
      </div>
    </>
  )
}

export default ItemDetail
