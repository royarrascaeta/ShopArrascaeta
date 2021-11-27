import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import {getFirestore} from "../../helpers/getFirestore";
import firebase from "firebase";
import 'firebase/firestore';
import Button from '../Button/Button';
import Form from '../Form/Form';
import "./Cart.scss";

const Cart = () => {
  const {cartList, total, removeItem, removeAll} = useCartContext();

  const length = cartList.length;

  const generateOrder = (e, formData) => {
    e.preventDefault();

    let order = {
      buyer: formData,
      items: [],
      total: total,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    }
  
    order.items = cartList.map(item => ({
      id: item.id, 
      title: item.name,
      price: item.price,
      quantity: item.quantity
    }));
  
    console.log(order)

    const dbQuery = getFirestore();

    //Agregar
    dbQuery.collection("orders").add(order)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(()=> removeAll())

    //Modificar
    // dbQuery.collection("items").doc("idItem").update({
    //   stock: 3
    // })
    // .then(res => console.log(res))
    // .catch(err => console.log(err))


    //Actualizar varios
    const itemsToUpdate = dbQuery.collection("items").where(
      firebase.firestore.FieldPath.documentId(), 'in', cartList.map(item => item.id)
      )

    const batch = dbQuery.batch();

    itemsToUpdate.get()
    .then(collection => {
      collection.docs.forEach(docSnapShot => {
        batch.update(docSnapShot.ref, {
          stock: docSnapShot.data().stock - cartList.find(item => item.id === docSnapShot.id).quantity
        })
      })

      batch.commit().then(res => {
        console.log('Resultado batch: ', res)
      })
    })
  }

  return (
    length > 0
    ? 
    <div className="cart-container" style={{alignSelf: "flex-start"}}>
      <h2>Detalle del carrito</h2>
      <div className="cart-items">
        {
          cartList.map((item) => 
          <div key={item.id} className="cart-item">
            <img className="image" src={`../assets/img/products/${item.pictureUrl}`} alt={item.name} />
            <h4 className="name">{item.name}</h4>
            <span className="price">Precio unitario: ${item.price}</span>
            <span className="quantity">x{item.quantity}</span>
            <span className="sub-total">${item.price * item.quantity}</span>
            <button onClick={()=>removeItem(item.id)} className="btn-remove"><i className="fas fa-trash-alt"></i></button>
          </div>)
        }
        <Button onclick={removeAll} text="Limpiar Carrito" iconClass="fas fa-trash-alt" />
      </div>
      <div className="cart-total">
        <h3>Total de la compra: </h3>
        <span>${total}</span>
        <Form onsubmit={generateOrder}/>
      </div>
    </div>
    : 
    <div className="cart-container">
      <h2>No hay artículos en tu carrito</h2>
      <Link to="/" style={{gridColumn: "span 2"}}><Button text="Volver a la tienda" addClass="full-width"/></Link>
    </div>  
  )
}

export default Cart