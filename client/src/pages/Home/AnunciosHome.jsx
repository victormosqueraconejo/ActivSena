import React from 'react'
import "./styles/AnunciosHome.css"

import AnuncioCardComponent from './HomeComponents/AnuncioCardComponent.jsx'

let services = [{
  title: "Apoyo de Sostenimento",
  description: "Te ayudamos a desarrollar una visión clara y una hoja de ruta para que tu negocio alcance el éxito a largo plazo."
},{
  title: "Investigación de Mercado",
  description: "Realizamos análisis de mercado completos para identificar oportunidades y entender a tu competencia."
},
{
  title: "Asesoría Financiera",
  description: "Nuestros expertos financieros proporcionan orientación para optimizar el rendimiento y la rentabilidad de tu negocio."
}]

export default function AnunciosHome() {
  return (
    <section id="anuncios" className="anuncios-section-home">
      <div className="container-home">
        <div className="section-header-home">
          <h2 className='h2-home'>Anuncios Importantes</h2>
        </div>
        <section className='anuncios-grid-home'>
          <AnuncioCardComponent title={services[0].title} description={services[0].description} />
          <AnuncioCardComponent title={services[1].title} description={services[1].description} />
          <AnuncioCardComponent title={services[2].title} description={services[2].description} />
        </section>
      </div>
    </section>
  )
}