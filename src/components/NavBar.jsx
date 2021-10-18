import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.scss";

const NavBar = () => {
  return(
    <div className="container">
      <div className="nav">
        <div className="nav_logo">
          <a href="index.html"><span>$</span><span>erendipia</span><span>SHOP</span></a>
        </div>
        <nav className="nav_menu">
          <ul>
            <li><a>Home</a></li>
            <li className="main">
              <a>Categorias <i class="fas fa-chevron-down"></i></a>
              <ul className="sub">
                <li><a>Categoría #1</a></li>
                <li><a>Categoría #2</a></li>
                <li><a>Categoría #3</a></li>
                <li><a>Categoría #4</a></li>
                <li><a>Categoría #5</a></li>
                <li><a>Categoría #6</a></li>
                <li><a>Categoría con mucho texto #7</a></li>
                <li><a>Categoría #8</a></li>
              </ul>
            </li>
            <li><a>Nosotros</a></li>
            <li><a>Contacto</a></li>
            <CartWidget />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;