import React from 'react'
import "../src/index.css"
import "./styles/FormComponent.css"


export default function FormComponent() {

  return (
    <div className="contact-form">
    <form id="contactForm">
        <div className="form-group">
            <label htmlFor="name">Tu Nombre</label>
            <input type="text" id="name" name="name" className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Tu Correo</label>
            <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input type="text" id="subject" name="subject" className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="message">Tu Mensaje</label>
            <textarea id="message" name="message" className="form-control" required></textarea>
        </div>
        <button type="submit" className="btn-submit">Enviar Mensaje</button>
    </form>
</div>
  )
}
