import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <div>
          Información Legal: Esta tienda es ficticia. Los productos e imagenes son propiedad de <a target="_blank" rel="noreferrer" href="https://www.famusic.com.ar">FAMUSIC</a>
        </div>
        <div>
          Desarrollado por <a target="_blank" rel="noreferrer" href="https://royarrascaeta.netlify.app">Roy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
