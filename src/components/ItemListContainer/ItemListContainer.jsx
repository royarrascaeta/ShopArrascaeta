import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import Loader from "../Loader/Loader";
import { getFirestore } from '../../helpers/getFirestore';
import "./ItemListContainer.scss";

const ItemListContainer = ({limit, showCategory}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { idCategory } = useParams();

  useEffect(() => {

    const db = getFirestore();
    const dbQuery = (idCategory && idCategory !== "Todos") 
      ? db.collection("items").where("category","==",idCategory).get()
      : limit 
        ? db.collection("items").orderBy("name").limit(limit).get()
        : db.collection("items").get()
    dbQuery
    .then(res => setData(res.docs.map( item => ({id:item.id, ...item.data()}) )))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false));

  }, [idCategory])

  return (
    <div className="item-list-container">
      {
        loading 
        ? <Loader />
        : idCategory 
          ? data.length !== 0
            ? <>
                <h2><span>Categoría: </span>{idCategory}</h2>
                <ItemList items={data} />
              </>
            : <>
                <h2>Error: Categoría no encontrada</h2>
              </>
          : <>
              {showCategory && <h2><span>Categoría: </span>Todos</h2>}
              <ItemList items={data} />
            </>
      }
    </div>
  )
}

export default ItemListContainer