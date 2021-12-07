import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import "./Home.scss";

const Home = () => {

  const categories = [
    {
      id: 1,
      name: "Bajos",
      img: "bajos.jpg"
    },
    {
      id: 2,
      name: "Baterias",
      img: "baterias.jpg"
    },
    {
      id: 3,
      name: "Guitarras Eléctricas",
      img: "guitarras.jpg"
    },
    {
      id: 4,
      name: "Pianos",
      img: "pianos.jpg"
    },
    {
      id: 5,
      name: "Ukeleles",
      img: "ukeleles.jpg"
    },
    {
      id: 6,
      name: "Saxos",
      img: "saxos.jpg"
    }
  ];

  return (
    <div className="home">
      <h2>Categorías:</h2>
      <div className="categories-grid">
        {
          categories.map(category => (
            <div key={category.id} className="categories-item">
                <Link className="link" to={`/categoria/${category.name}`}>
                  <img src={`../assets/img/categories/${category.img}`} alt="" />
                  <span>{category.name}</span>
                </Link>
              </div>
          ))
        }
      </div>
      <div className="featured-products">
        <h2>Productos Destacados:</h2>
        <ItemListContainer limit={5} />
        <Link className="link" to="/categoria/Todos"><Button text="Ver más productos"/></Link>
      </div>
    </div>
  )
}

export default Home
