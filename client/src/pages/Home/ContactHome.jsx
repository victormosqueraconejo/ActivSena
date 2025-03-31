import React from 'react'
import "./styles/ContactHome.css"
import FormComponent from "./HomeComponents/FormComponent"

export default function ContactHome() {
  return (
    <section id="contact" className="contact-section-home">
      <div className="container-home">
        <div className="section-header-home">
          <h2 className='h2-home'>Contáctanos</h2>
        </div>
        <div className="contact-content-home">
          <div className="contact-info-home">
            <h3 className='h3-home'>Ponte en contacto con nosotros</h3>
            <div className="contact-item-home">
              <div className="contact-icon-home">
                <i className="icon-location-home i-home"></i>
              </div>
              <div className="contact-text-home">
                <h4 className='h4-home'>Nuestra Ubicación</h4>
                <p className='p-home'>123 Calle Negocios, Suite 100<br />Popayan, Colombia</p>
              </div>
            </div>
            <div className="contact-item-home">
              <div className="contact-icon-home">
                <i className="icon-phone-home i-home"></i>
              </div>
              <div className="contact-text-home">
                <h4 className='h4-home'>Número de Teléfono</h4>
                <p className='p-home'>+57 1234567890</p>
              </div>
            </div>
            <div className="contact-item-home">
              <div className="contact-icon-home">
                <i className="icon-email-home i-home"></i>
              </div>
              <div className="contact-text-home">
                <h4 className='h4-home'>Correo Electrónico</h4>
                <p className='p-home'>activsena@contacto.com</p>
              </div>
            </div>
          </div>
          <FormComponent />
        </div>
      </div>
    </section>
  )
}