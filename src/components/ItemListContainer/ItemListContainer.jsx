import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import {getData} from "../../helpers/getData";
import Loader from "../Loader/Loader";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { idCategory } = useParams();

  useEffect(() => {
    if(idCategory){
      console.log("filter: " + idCategory)
      getData
      .then(res => setData(res.filter(el => el.category === idCategory)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }else{
      getData
      .then(res => setData(res))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
  }, [idCategory])

  return (
    <div className="item-list-container">
      {
        loading 
        ? <Loader />
        : <ItemList products={data} />
      }
      {console.log(idCategory)}
    </div>
  )
}

export default ItemListContainer