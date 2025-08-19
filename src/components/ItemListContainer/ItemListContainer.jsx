import {useState, useEffect} from 'react'
import { getProductos , getProductosByCategoria} from '../../../asynmock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
const ItemListContainer = () => {
  const [productos, setProductos]= useState([]);

  const { categoria } = useParams();

  useEffect(() => {

    const functionProductos= categoria ? getProductosByCategoria : getProductos;
    functionProductos(categoria)
      .then((respuesta) => {
        
        setProductos(respuesta);
      })
      .catch((error) => {
        console.error("Error fetching products by category:", error);
      });

  }, [categoria]);

  return (
    <div> 
      <h2 className="textStyle">
        Mis productos{categoria ? ` - ${categoria}` : ""}
      </h2>
        <div className='container'>
          <ItemList productos={productos} />
        </div>
    </div>
  )
}

export default ItemListContainer
