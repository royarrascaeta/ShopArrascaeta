import React, { useState } from 'react'
import "./ItemCount.scss"

const ItemCount = ({stock}) => {
  //Variables de estado
  const [count, setCount] = useState(1);

  //Renderizado del componente
  return (
    <div className="item-count">
      <button disabled={count === 1 ? true : false} onClick={()=>setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button disabled={count === stock ? true : false} onClick={()=>setCount(count + 1)}>+</button>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;