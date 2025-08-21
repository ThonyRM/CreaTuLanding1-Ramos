import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className='cart-widget'>
      <Link to='/cart' className='linkCarrito'>
        {/*<span className='material-symbols-outlined'>shopping_cart</span>*/}
        <img  className='imgCarrito' src="../../../img/carrito.png" alt="Carrito de compras" />
      </Link> 
      
      {
        cantidadTotal > 0 && (
          <span className='cantidadCarrito'>{cantidadTotal}</span>
        )
      }
    </div>
  )
}

export default CardWidget
