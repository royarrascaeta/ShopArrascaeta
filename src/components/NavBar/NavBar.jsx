import React, {useRef} from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.scss";

const NavBar = () => {
  const navMenu = useRef(null);
  const btnIcon = useRef(null);

  const handleClick = (e) => {
    navMenu.current.classList.toggle("expand");
    btnIcon.current.classList.toggle("fa-times")
  }

  return(
    <header>
      <div className="container">
        <div className="nav">
          <div className="nav_logo">
            <Link to="/"><span>$</span><span>erendipia</span><span>MUSIC</span></Link>
          </div>
          <nav className="nav_menu" ref={navMenu} >
            <ul>
              <li><Link className="links" to="/">Home</Link></li>
              <li className="main">
                <span className="links">Categorias <i className="fas fa-chevron-down"></i></span>
                <ul className="sub">
                  <li><Link className="links" to="/categoria/Todos">Todos</Link></li>
                  <li><Link className="links" to="/categoria/Guitarras Eléctricas">Guitarras Eléctricas</Link></li>
                  <li><Link className="links" to="/categoria/Pianos">Pianos</Link></li>
                  <li><Link className="links" to="/categoria/Ukeleles">Ukeleles</Link></li>
                </ul>
              </li>
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