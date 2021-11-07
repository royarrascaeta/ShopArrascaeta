import React from 'react';
import Item from '../Item/Item';
import "./ItemList.scss";


const ItemList = ({items}) => {
  return (
    <div className="item-list">
      {
        items.map(item => <Item key={item.id} detail={item} />)
      }
    </div>
  )
}

export default ItemList