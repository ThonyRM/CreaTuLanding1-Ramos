import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext";
//import './CartItem.css'

const CartItem = ({item, cantidad}) => {
    const { deleteItem } = useContext(CarritoContext);

console.log("CartItem", item);
    return (
        <div  className="cart-item" >
            <div className="cart-item__info">
                <h4>{item.nombre}</h4>               
                <p>Cantidad: {cantidad}</p>
                <p>Precio: ${item.precio}</p>
            </div>
            <button className="btn-remove" onClick={() => deleteItem(item.id)}>Eliminar</button>
        </div>
                    
    )
}

export default CartItem
