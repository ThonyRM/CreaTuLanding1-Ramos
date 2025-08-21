import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext";
import './Cart.css'
import { Link } from "react-router-dom";
import CartItem from '../CartItem/CartItem'

// Component to display the cart
// It will show the items in the cart, total price and a button to proceed to checkout
// If the cart is empty, it will show a message indicating that the cart is empty

const Cart = () => {
    const { carrito, total, clearCart , cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal===0){
        return (
            <div className="cart-empty">
                <h2>No hay productos en el carrito 🛒</h2>
                <Link to='/'><button className="btn-primary">Ver productos</button></Link>
            </div>
        )
    }
    return (
        <div className="cart">
            <div className="cart-items">
                {carrito.map(producto => <CartItem key={producto.item.id}{...producto}/>)}
            </div>
            <div className="cart-summary">
                <h3><span>Total $: {total}</span></h3>
                <h3><span>Cantidad Total : {cantidadTotal}</span></h3>
            
                <div className="cart-actions">
                    <button className="btn-secondary" onClick={()=>clearCart()}>Vaciar Carrito</button>
                    <Link to='/checkout'><button className="btn-primary">Finalizar Compra</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
