import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductoById } from "../../../asynmock"
import { useParams } from "react-router-dom"

const ItemDetailsContainer = () => {

    const[producto,setProdutos]= useState(null)
    const{idItem} = useParams();
    useEffect(()=>{
       
        getProductoById(idItem)
        .then(respuesta => setProdutos(respuesta))
    },[idItem])

    return (
        <div>
            <ItemDetail {...producto}/>
            
        </div>
    )
}

export default ItemDetailsContainer
