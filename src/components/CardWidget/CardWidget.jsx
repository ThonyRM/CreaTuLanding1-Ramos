import React from 'react'
import './CartWidget.css'
const imgCarrito = 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png'
const CardWidget = () => {
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
    </div>
  )
}

export default CardWidget
