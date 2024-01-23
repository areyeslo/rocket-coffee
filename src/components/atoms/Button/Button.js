import React from 'react'
import "../../../theme.css";
import "./Button.css"

function Button({onClick, children, ...props}) {
  return <button onClick={onClick} {...props}>{children}</button>
}

export default Button