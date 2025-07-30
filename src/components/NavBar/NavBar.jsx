import CardWidget from "../CardWidget/CardWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
      <h1>Proyecto Tienda</h1>
      <nav>
          <ul>
              <li>Lacteos</li>
              <li>Bebidas</li>
              <li>Alamacen</li>
          </ul>
      </nav>
      <CardWidget />
    </header>
  )
}

export default NavBar
