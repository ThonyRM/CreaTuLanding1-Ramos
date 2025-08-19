import CardWidget from "../CardWidget/CardWidget"
import "./NavBar.css"
import { Link , NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <img className="logo" src="../../../img/logo.jpg" alt="log" />
      </Link>

      <nav>
          <ul className="nav-links">
              <li>
                <NavLink to="categoria/alimentos"> Alimentos</NavLink>
              </li>
              <li>
                <NavLink to="categoria/limpieza"> Limpieza</NavLink>
              </li>
          </ul>
      </nav>
      <CardWidget />
    </header>
  )
}

export default NavBar
