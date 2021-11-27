import React from 'react';
import "./Button.scss";

const Button = ({text, onclick, iconClass, addClass}) => {
  return (
    <button onClick={onclick} className={addClass ? `button ${addClass}` : "button"}>
      {
        iconClass && <i className={iconClass}></i>
      }
      {text}
    </button>
  )
}

export default Button
