import React from 'react';
import "./Item.scss";
import ItemCount from '../ItemCount/ItemCount';

const Item = ({detail}) => {

  return (
    <div className="item">
      <figure class="img">
        <img src={detail.pictureUrl} alt={detail.name} />
      </figure>
      <h4 class="title">{detail.name}</h4>
      <p class="description">{detail.description}</p>
      <span class="price">${detail.price}</span>
      <ItemCount stock={detail.stock} />
    </div>
  )
}

export default Item