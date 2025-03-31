import React from 'react'
import "./styles/AboutComponent.css"

export default function AboutComponent() {
  return (
    <section id="about" className="about-section-home">
      <div className="container-home">
        <h2 className="section-title-home h2-home">Sobre Nosotros</h2>
        
        <div className="about-content-home">
          <div className="about-image-home">
            <img src="https://placehold.co/600x400" alt="Sobre ActivSena" className='img-home' />
          </div>
          <div className="about-text-home">
            <h3 className='h3-home'>Somos un equipo de innovadores apasionados por mejorar la experiencia educativa y recreativa</h3>
            <p className='p-home'>Nuestro objetivo es facilitar la organización y
              participación en actividades lúdicas y eventos a través de una plataforma
              digital moderna y accesible.</p>
            <p className='p-home'>Con una fuerte visión hacia la sostenibilidad,
              buscamos reducir el uso de papel y optimizar los procesos administrativos,
              permitiendo a la institución enfocarse en lo que realmente importa:</p>
            <p className='p-home'>Ofrecer experiencias enriquecedoras y significativas</p>
            
            <div className="about-features-home">
              <div className="feature-item-home">
                <div className="feature-icon-home">
                  <i className="icon-check-home"></i>
                </div>
                <div className="feature-text-home">
                  <h4 className='h4-home'>Planificación de Negocios // Ejemplo</h4>
                  <p className='p-home'>Te ayudamos a crear un plan de negocios integral que guiará el crecimiento de tu empresa.</p>
                </div>
              </div>
              <div className="feature-item-home">
                <div className="feature-icon-home">
                  <i className="icon-check-home"></i>
                </div>
                <div className="feature-text-home">
                  <h4 className='h4-home'>Estrategia Financiera // Ejemplo</h4>
                  <p className='p-home'>Nuestros expertos financieros te ayudarán a optimizar el rendimiento financiero de tu empresa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}