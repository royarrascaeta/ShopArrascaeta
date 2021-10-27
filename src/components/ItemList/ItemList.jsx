import React, {useState, useEffect} from 'react';
import Item from '../Item/Item';
import "./ItemList.scss";
import {getData} from "../../helpers/getData";
import Loader from "../Loader/Loader";


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
        ? <Loader />
        : data.map(prod => <Item key={prod.id} info={prod} />)
      }
    </div>
  )
}

export default ItemList