import React from 'react';
import "./Button.scss";

const Button = ({text, onclick}) => {
  return (
    <button onClick={onclick} className="button">
      {text}
    </button>
  )
}

export default Button
