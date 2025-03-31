import React from 'react'
import "../styles/HomeEstilosPrincipales.css"
import "./styles/AnuncioCardComponent.css"

export default function AnuncioCardComponent({title, description}) {
  return (
    <div className="anuncio-card-home">
        <div className="anuncio-icon-home">
            <i className="icon-check-home"></i>
        </div>
        <h3 className='h3-home'>{title}</h3>
        <p className='p-home'>{description}</p>
        <a href="#" className="anuncio-link-home a-home">Saber Más <i className="icon-arrow-right-long-home"></i></a>
    </div>
  )
}