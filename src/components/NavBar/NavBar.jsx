import React, {useRef} from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.scss";

const NavBar = () => {

  const navMenu = useRef(null);
  const btnIcon = useRef(null);

  const handleClick = (e) => {
    console.log(e)
    console.log("Click en boton")
    navMenu.current.classList.toggle("expand");
    btnIcon.current.classList.toggle("fa-times")
  }


  return(
    <header>
      <div className="container">
        <div className="nav">
          <div className="nav_logo">
            <Link to="/"><span>$</span><span>erendipia</span><span>SHOP</span></Link>
          </div>
          <nav className="nav_menu" ref={navMenu} >
            <ul>
              <li><Link className="links" to="/">Home</Link></li>
              <li className="main">
                <Link className="links">Categorias <i class="fas fa-chevron-down"></i></Link>
                <ul className="sub">
                  <li><Link className="links" to="/categoria/Verde">Verde</Link></li>
                  <li><Link className="links" to="/categoria/Azul">Azul</Link></li>
                  <li><Link className="links" to="/categoria/Rojo">Rojo</Link></li>
                </ul>
              </li>
              <li><Link className="links" to="">Nosotros</Link></li>
              <li><Link className="links" to="">Contacto</Link></li>
              <CartWidget />
            </ul>
          </nav>
        </div>
        <button className="nav_btn" onClick={(e)=> handleClick(e)}>
          <i className="fas fa-bars" ref={btnIcon}></i>
        </button>
      </div>
    </header>
  );
}

export default NavBar;