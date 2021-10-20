import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemListContainer.scss";

const ItemListContainer = ({greeting}) => {
  return (
    <div class="item-list-container">
      {greeting}
      <ItemCount />
    </div>
  )
}

export default ItemListContainer