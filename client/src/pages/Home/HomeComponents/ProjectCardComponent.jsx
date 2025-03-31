import React from 'react' 
import "../styles/HomeEstilosPrincipales.css"
import "./styles/ProjectCardComponent.css"


export default function ProjectCardComponent({title, description}) {
  return (
    <div className="project-card-home">
      <img src="https://placehold.co/600x400" alt="Proyecto 1" className="project-image-home img-home" />
      <div className="project-overlay-home">
        <div className="project-category-home">{title}</div>
        <h3 className="project-title-home h3-home">{description}</h3>
        <a href="#" className="project-link-home a-home">Ver Proyecto <i className="icon-arrow-right-long-home"></i></a>
      </div>
    </div>
  )
}