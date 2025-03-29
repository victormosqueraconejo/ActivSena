import React from 'react'
import "../src/index.css"
import "./styles/FooterHome.css"

export default function FooterHome() {
  return (
    <footer className="site-footer">
    <div className="container">
        <div className="footer-content">
            <div className="footer-about">
                <div className="footer-logo">
                    <span className="footer-logo-waso">Activ</span>
                    <span className="footer-logo-strategy">Sena</span>
                </div>
                <p>Somos una firma de consultoría de negocios profesional dedicada a ayudar a las empresas a crecer y tener éxito en el mercado competitivo actual.</p>
                <div className="footer-social">
                    <a href="#" className="footer-social-icon"><i className="icon-facebook"></i></a>
                    <a href="#" className="footer-social-icon"><i className="icon-pinterest"></i></a>
                    <a href="#" className="footer-social-icon"><i className="icon-twitter"></i></a>
                    <a href="#" className="footer-social-icon"><i className="icon-youtube"></i></a>
                </div>
            </div>
            <div className="footer-links">
                <h3 className="footer-title">Enlaces Rápidos</h3>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3 className="footer-title">Información de Contacto</h3>
                <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                        <i className="icon-location"></i>
                    </div>
                    <div className="footer-contact-text">
                        123 Calle Negocios, Suite 100, Popayan, Colombia 28001
                    </div>
                </div>
                <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                        <i className="icon-phone"></i>
                    </div>
                    <div className="footer-contact-text">
                        +57 1234567890
                    </div>
                </div>
                <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                        <i className="icon-email"></i>
                    </div>
                    <div className="footer-contact-text">
                        activsena@contacto.com
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2023 ActivSena. Todos los Derechos Reservados.</p>
        </div>
    </div>
</footer>
  )
}
