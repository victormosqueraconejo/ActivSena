import React,{ useState } from "react";
import './styles/FeedbackStyle.css'
import eventos from './img/eventos.jpg'
import futsal from './img/futsal.jpg'
import competicion from './img/competicion.jpg';



const images = [eventos, futsal, competicion];

export default function Feedbacks() {
  const [currentIndex, setImagenActual] = useState(0);

  const imagenAnterior = () => {
    setImagenActual((imagenAnterior) => (imagenAnterior === 0 ? images.length - 1 : imagenAnterior - 1));
  };

  const imagenSiguiente = () => {
    setImagenActual((imagenAnterior) => (imagenAnterior === images.length - 1 ? 0 : imagenAnterior + 1));
  };

  return (
    
    <div className="carousel-container">
        <h2>FEEDBACK DE EVENTOS</h2>
      <div className="carousel">
        <img src={images[currentIndex]} alt="carrusel" className="carousel-image" />
        <button className="carousel-button left" onClick={imagenAnterior}>&lt;</button>
        <button className="carousel-button right" onClick={imagenSiguiente}>&gt;</button>
      </div>
      <div className="carousel-indicators">
        {images.map((imagen, index) => (
          <button 
            key={index} 
            className={index === currentIndex ? "active" : ""} 
            onClick={() => setImagenActual(index)}
          >
            
          </button>
        ))}
        
      </div>
    </div>
  );
}