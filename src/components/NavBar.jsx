import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return(
    <div className="container">
      <div className="nav">
        <div className="nav_logo">
          <span>$</span><span>erendipia</span><span>Shop</span>
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
                <li><a>Categoría #7</a></li>
                <li><a>Categoría #8</a></li>
              </ul>
            </li>
            <li><a>Nosotros</a></li>
            <li><a>Contacto</a></li>
            <li class="cart"><a><i class="fas fa-shopping-cart"></i></a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;