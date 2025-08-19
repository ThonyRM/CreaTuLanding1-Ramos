
import { useState } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id,nombre,precio,img, stock}) => {

    //Creamos estado local con la cantidad de productos agregados
    const[agregarCantidad,setAgregarCantidad ] = useState(0);

    // function manejadora de esa cantidad
    const manejadorCantidad = (cantidad)=>{
        setAgregarCantidad(cantidad);
        console.log("Productos agregados" + cantidad)
    }
    
    return (
        <div className="item-detail">
            <div className="item-detail__image">
                <img src={img} alt={nombre} />
            </div>

            <div className="item-detail__info">
                <h2>{nombre}</h2>
                <h3>Precio: ${precio}</h3>
                <h4>ID: {id}</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet eius
                dolore minus numquam eum ut dolor veritatis consequuntur tempore,
                beatae, vitae sequi quaerat nostrum obcaecati, dignissimos sunt
                similique maiores.
                </p>
                {
                    agregarCantidad > 0 ? 
                    (<Link to='/cart'><button className="btn-add">Terminar compra</button></Link>) : 
                    (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>) 
                }
                
            </div>
        </div>
    )
}

export default ItemDetail
