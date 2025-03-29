import React from 'react'
import "../src/index.css"
import "./styles/AboutComponent.css"

export default function AboutComponent() {
  return (
    <section id="about" className="about-section">
    <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        
        <div className="about-content">
            <div className="about-image">
                <img src="https://placehold.co/600x400" alt="Sobre ActivSena" />
            </div>
            <div className="about-text">
                <h3>Somos un equipo de innovadores apasionados por mejorar la experiencia educativa y recreativa</h3>
                <p>Nuestro objetivo es facilitar la organización y
                    participación en actividades lúdicas y eventos a través de una plataforma
                    digital moderna y accesible. </p>
                <p>Con una fuerte visión hacia la sostenibilidad,
                    buscamos reducir el uso de papel y optimizar los procesos administrativos,
                    permitiendo a la institución enfocarse en lo que realmente importa:</p>
                <p>Ofrecer experiencias enriquecedoras y significativas</p>
                
                <div className="about-features">
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="icon-check"></i>
                        </div>
                        <div className="feature-text">
                            <h4>Planificación de Negocios // Ejemplo</h4>
                            <p>Te ayudamos a crear un plan de negocios integral que guiará el crecimiento de tu empresa.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="icon-check"></i>
                        </div>
                        <div className="feature-text">
                            <h4>Estrategia Financiera // Ejemplo</h4>
                            <p>Nuestros expertos financieros te ayudarán a optimizar el rendimiento financiero de tu empresa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
