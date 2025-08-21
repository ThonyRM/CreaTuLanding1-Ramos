
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import Error from './components/Error/Error'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './App.css'
function App() {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider  >
          
          <NavBar />
          <Routes>
            <Route path='/'  element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailsContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/*' element={<Error/>}/>
          </Routes>
        
        </CarritoProvider>
      </BrowserRouter>


    </>
  )
}

export default App
