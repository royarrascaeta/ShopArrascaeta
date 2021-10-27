import React from 'react';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.scss";

const ItemListContainer = ({greeting}) => {
  return (
    <div className="item-list-container">
      {greeting}
      <ItemList />
    </div>
  )
}

export default ItemListContainer