import React, {useEffect, useState} from 'react';
import { getData } from '../../helpers/getData';
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
    // getData
    // .then(res => setProduct(res.find(prod => prod.id === parseInt(idProduct))))
    // .catch(err => console.log(err))
    // .finally(()=> setLoading(false))

    const db = getFirestore();
    const dbQuery = db.collection("items").doc(idProduct).get();
    dbQuery
    .then(res => setProduct({id: res.id, ...res.data()}))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false));

  }, [idProduct])

  return (
    <div className="item-detail-container">
      {
        loading
        ? <Loader />
        : <ItemDetail product={product} />
      }
    </div>
  )
}

export default ItemDetailContainer
