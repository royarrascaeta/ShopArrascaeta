import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./Item.scss";

const Item = ({detail}) => {

  return (
    <div className="item">
        <Link className="link" to={`/detalle/${detail.id}`}>
          <figure class="img">
            <img src={detail.pictureUrl} alt={detail.name} />
          </figure>
          <h4 class="title">{detail.name}</h4>
        </Link>
          <p class="description">{detail.description}</p>
          <span class="price">${detail.price}</span>
        <ItemCount stock={detail.stock} />
      </div>
  )
}

export default Item