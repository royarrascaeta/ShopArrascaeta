import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.scss";

const Item = ({detail}) => {

  return (
    <div className="item">
        <Link className="link" to={`/detalle/${detail.id}`}>
          <figure className="img">
            <img src={`http://localhost:3000/assets/img/products/${detail.pictureUrl}`} alt={detail.name} />
          </figure>
          <h4 className="title">{detail.name}</h4>
        </Link>
          <span className="price">${detail.price}</span>
      </div>
  )
}

export default Item;