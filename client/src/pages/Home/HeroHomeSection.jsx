import React, { useState, useEffect } from 'react';
import "../src/index.css";
import "./styles/HeroHomeSection.css";

export default function HeroHomeSection() {
  const images = [
    "url(../../img/img.jpg)",
    "url(../../img/img2.jpg)",
    "url(../../img/img3.jpg)"
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
      className="hero-section" 
      style={{
        backgroundImage: images[currentIndex],
      }}
    >
      <div className="container">
        <div className="hero-content">
          <div className="hero-subtitle">
            PRESENTANDO ACTIV SENA <span>03/03</span>
          </div>
          <h1 className="hero-title">
            Gestiona <span className="highlight">Registra</span> en la plataforma mas innovadora
          </h1>
          <div className="hero-actions">
            <a href="#" className="btn btn-primary">Registrarse</a>
            <a href="#" className="btn btn-primary">Iniciar Sesión</a>
            <a href="#" className="play-btn">
              <i className="icon-play"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-controls">
        <button 
          className="hero-control prev" 
          id="btn-prev"
          onClick={() => moveSlide(-1)}
        >
          <i className="icon-arrow-left"></i>
        </button>
        <button 
          className="hero-control next" 
          id="btn-next"
          onClick={() => moveSlide(1)}
        >
          <i className="icon-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}
