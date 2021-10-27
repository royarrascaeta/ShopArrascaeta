import React from 'react';
import "./Item.scss";
import ItemCount from '../ItemCount/ItemCount';

const Item = ({info}) => {

  return (
    <div className="item">
      <figure class="img">
        <img src={info.pictureUrl} alt={info.name} />
      </figure>
      <h4 class="title">{info.name}</h4>
      <p class="description">{info.description}</p>
      <span class="price">${info.price}</span>
      <ItemCount stock={info.stock} />
    </div>
  )
}

export default Item