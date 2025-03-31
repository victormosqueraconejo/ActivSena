import React, { useState, useEffect } from 'react';
import "./styles/HeroHomeSection.css";

import img from "./img/img.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"

export default function HeroHomeSection() {
  const images = [
    img, 
    img2,
    img3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (direction) => {
    const totalSlides = images.length;
    setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + direction;

        if (newIndex < 0) newIndex = totalSlides - 1;
        if (newIndex >= totalSlides) newIndex = 0;

        return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <section 
      id="home" 
      className="hero-section-home" 
      style={{
        backgroundImage: images[currentIndex],
      }}
    >
      <div className="container-home">
        <div className="hero-content-home">
          <div className="hero-subtitle-home">
            PRESENTANDO ACTIV SENA <span>03/03</span>
          </div>
          <h1 className="hero-title-home h1-home">
            Gestiona <span className="highlight-home">Registra</span> en la plataforma mas innovadora
          </h1>
          <div className="hero-actions-home">
            <a href="#" className="btn-home btn-primary-home a-home">Registrarse</a>
            <a href="#" className="btn-home btn-primary-home a-home">Iniciar Sesión</a>
            <a href="#" className="play-btn-home a-home">
              <i className="icon-play-home"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-controls-home">
        <button 
          className="hero-control-home prev-home" 
          id="btn-prev-home"
          onClick={() => moveSlide(-1)}
        >
          <i className="icon-arrow-left-home"></i>
        </button>
        <button 
          className="hero-control-home next-home" 
          id="btn-next-home"
          onClick={() => moveSlide(1)}
        >
          <i className="icon-arrow-right-home i-home"></i>
        </button>
      </div>
    </section>
  );
}