import React from 'react'
import "../src/index.css"
import "./styles/ContactHome.css"
import FormComponent from "../components/FormComponent"

export default function ContactHome() {
  return (
    <section id="contact" className="contact-section">
    <div  className="container">
        <div className="section-header">
            <h2>Contáctanos</h2>
        </div>
        <div className="contact-content">
            <div className="contact-info">
                <h3>Ponte en contacto con nosotros</h3>
                <div className="contact-item">
                    <div className="contact-icon">
                        <i className="icon-location"></i>
                    </div>
                    <div className="contact-text">
                        <h4>Nuestra Ubicación</h4>
                        <p>123 Calle Negocios, Suite 100<br />Popayan, Colombia</p>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="contact-icon">
                        <i className="icon-phone"></i>
                    </div>
                    <div className="contact-text">
                        <h4>Número de Teléfono</h4>
                        <p>+57 1234567890</p>
                    </div>
                </div>
                <div className="contact-item">
                    <div className="contact-icon">
                        <i className="icon-email"></i>
                    </div>
                    <div className="contact-text">
                        <h4>Correo Electrónico</h4>
                        <p>activsena@contacto.com</p>
                    </div>
                </div>
            </div>
            <FormComponent />
        </div>
    </div>
</section>
  )
}
