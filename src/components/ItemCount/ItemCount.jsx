import React, { useState } from 'react'
import "./ItemCount.scss"

const ItemCount = ({product}) => {
  //Variables de estado
  const [count, setCount] = useState(1);

  const onAdd = () => {
    console.log(`Añadido al carrito '${product.name}' - Cantidad: ${count}`)
  }


  //Renderizado del componente
  return (
    <div className="item-count">
      <button disabled={count === 1 ? true : false} onClick={()=>setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button disabled={count === product.stock ? true : false} onClick={()=>setCount(count + 1)}>+</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;