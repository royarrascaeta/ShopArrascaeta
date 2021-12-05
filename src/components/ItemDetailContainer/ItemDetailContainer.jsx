import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from "../Loader/Loader";
import "./ItemDetailContainer.scss";
import { getFirestore } from '../../helpers/getFirestore';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { idProduct } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = db.collection("items").doc(idProduct).get();
    dbQuery
    .then(res => res.exists && setProduct({id: res.id, ...res.data()}))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false));

  }, [idProduct])

  return (
    <div className="item-detail-container">
      {
        loading
        ? <Loader />
        : Object.keys(product).length !== 0 
          ? <ItemDetail product={product} />
          : <h4>Producto inexistente</h4>
      }
    </div>
  )
}

export default ItemDetailContainer
