
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import Error from './components/Error/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/'  element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailsContainer/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>

  
    </>
  )
}

export default App
