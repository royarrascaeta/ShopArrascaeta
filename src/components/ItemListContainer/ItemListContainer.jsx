import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import {getData} from "../../helpers/getData";
import Loader from "../Loader/Loader";
import { getFirestore } from '../../helpers/getFirestore';
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { idCategory } = useParams();

  useEffect(() => {
    if(idCategory){
      const db = getFirestore();
      const dbQuery = db.collection("items").where("category","==",idCategory).get();
      dbQuery
      .then(res => setData(res.docs.map( item => ({id:item.id, ...item.data()}) )))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false));
    }else{
      const db = getFirestore();
      const dbQuery = db.collection("items").get();
      dbQuery
      .then(res => setData(res.docs.map( item => ({id:item.id, ...item.data()}) )))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false));
    }
  }, [idCategory])

  return (
    <div className="item-list-container">
      {
        loading 
        ? <Loader />
        : idCategory 
          ? <>
              <h2><span>Categoría: </span>{idCategory}</h2>
              <ItemList  items={data} />
            </>
          : <>
              <h2><span>Categoría: </span>Todos</h2>
              <ItemList items={data} />
            </>
      }
    </div>
  )
}

export default ItemListContainer