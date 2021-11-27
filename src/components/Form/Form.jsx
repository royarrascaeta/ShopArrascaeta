import React, {useState} from 'react';
import Button from '../Button/Button';
import { useCartContext } from '../../context/CartContext';
import "./Form.scss";


const Form = ({onsubmit}) => {
  const {cartList, removeAll} = useCartContext();

  const emptyForm = {
    name: "",
    phone: "",
    email: ""
  }

  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="form-container">
      <form onSubmit={(e)=> onsubmit(e, formData)} onChange={handleChange}>
        <h4>Completa tus datos para finalizar la compra</h4>
        <label htmlFor="name">Nombre y Apellido: 
        </label>
        <input type="text" name="name" placeholder="Nombre" defaultValue={formData.name} />
        <label htmlFor="phone">Teléfono:</label>
        <input type="text" name="phone" placeholder="Número de teléfono" defaultValue={formData.phone} />
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" placeholder="E-mail" defaultValue={formData.email} />
        <Button text="Finalizar Compra" addClass="full-width" />
      </form>
    </div>
  )
}

export default Form
