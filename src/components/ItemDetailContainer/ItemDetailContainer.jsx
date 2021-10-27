import React, {useEffect, useState} from 'react';
import { getItem } from '../../helpers/getData';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from "../Loader/Loader";
import "./ItemDetailContainer.scss";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem
    .then(res => setProduct(res))
    .then(console.log(product))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])

  return (
    <div className="item-detail-container">
      {
        loading
        ? <Loader />
        : <ItemDetail detail={product} />
      }
    </div>
  )
}

export default ItemDetailContainer
