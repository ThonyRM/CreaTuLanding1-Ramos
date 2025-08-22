import { createContext , useState} from "react";

export const CarritoContext = createContext({

    // Initial values for the context
    carrito: [],
    total:0,
    cantidadTotal: 0,

})

export const CarritoProvider = ({children})=>{

    //Create stato to cart, total and quantity
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

console.log("CarritoContext", carrito);

    // Function to add an item to the cart
    const addItem = (item,cantidad) => {
        const existingItem = carrito.find(product => product.item.id === item.id)
        if(existingItem) {

            const updatedCart = carrito.map(product => {
                if(product.item.id === item.id) {
                    return {...product, cantidad: product.cantidad + cantidad}
                } else {
                    return product;
                }
            });
            setCarrito(updatedCart);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));

        }else {
            setCarrito(prev => [...prev, {item, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
           
        }
    }

    const deleteItem = (id) => {
        const itemToDelete = carrito.find(product => product.item.id === id);
        //if(itemToDelete) {
            setCarrito(carrito.filter(product => product.item.id !== id));
            setCantidadTotal(prev => prev - itemToDelete.cantidad);
            setTotal(prev => prev - (itemToDelete.item.precio * itemToDelete.cantidad));
        //}
    }
    const clearCart = () => {
        setCarrito([]),
        setCantidadTotal(0),
        setTotal(0)
    }

    return (
        <CarritoContext.Provider value={{carrito,  total,  cantidadTotal,  addItem, deleteItem, clearCart}}>
            {children}
        </CarritoContext.Provider>
    )
}; 
