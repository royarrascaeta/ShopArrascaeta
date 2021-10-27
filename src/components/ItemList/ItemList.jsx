import React, {useState, useEffect} from 'react';
import Item from '../Item/Item';
import "./ItemList.scss";
import {getData} from "../../helpers/getData";


const ItemList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData
    .then(res => setData(res))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])


  return (
    <div className="item-list">
      {
        loading 
        ? <h3>Cargando...</h3>
        : data.map(prod => <Item key={prod.id} info={prod} />)
      }
    </div>
  )
}

export default ItemList