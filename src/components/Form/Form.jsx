import React, {useState} from 'react';
import Button from '../Button/Button';
import "./Form.scss";


const Form = ({onsubmit}) => {
  const emptyForm = {
    name: "",
    phone: "",
    email: "",
    emailConfirm: "",
  }

  const [formData, setFormData] = useState(emptyForm);

  const [validations, setValidations] = useState();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleKey = (e) => {
    e.target.value === formData.email 
    ? setValidations(true)
    : setValidations(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validations && onsubmit(e, formData)
  }

  return (
    <div className="form-container">
      <form onSubmit={(e)=> handleSubmit(e)} onChange={handleChange}>
        <h4>Completa tus datos para finalizar la compra</h4>
        <label htmlFor="name">Nombre y Apellido: 
        </label>
        <input type="text" name="name" placeholder="Nombre" defaultValue={formData.name} required/>
        <label htmlFor="phone">Teléfono:</label>
        <input type="text" name="phone" placeholder="Número de teléfono" defaultValue={formData.phone} required/>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" placeholder="E-mail" defaultValue={formData.email} required/>
        <label htmlFor="email-confirm">Confirma tu e-mail:</label>
        <input onKeyUp={handleKey} type="email" name="emailConfirm" placeholder="Confirma tu e-mail" defaultValue={formData.emailConfirm} autoComplete="none" required/>
        {validations === false && <span className="error-message"><i className="fas fa-exclamation-circle"></i> Los mails no coinciden</span>}
        <Button text="Finalizar Compra" addClass="full-width" />
      </form>
    </div>
  )
}

export default Form
