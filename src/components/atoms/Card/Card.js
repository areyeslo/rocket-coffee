import React from 'react'
import "./Card.css"

function Card({ children, highlight }) {
  return <div className="card">{children}</div>;
}

export default Card