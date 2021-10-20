import React, { useEffect, useRef, useState } from 'react'
import "./ItemCount.scss"

const ItemCount = ({stock}) => {

  //Referencias de botones
  let btnAdd = useRef();
  let btnRemove = useRef();

  //Variables de estado
  const [count, setCount] = useState(1);

  //Efectos
  useEffect(() => {
    count === stock
    ? btnAdd.current.disabled = true
    : btnAdd.current.disabled = false

    count === 1
    ? btnRemove.current.disabled = true
    : btnRemove.current.disabled = false
  }, [count])

  //Renderizado del componente
  return (
    <div className="item-count">
      <button ref={btnRemove} onClick={()=> setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button ref={btnAdd} onClick={()=> setCount(count + 1)}>+</button>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
