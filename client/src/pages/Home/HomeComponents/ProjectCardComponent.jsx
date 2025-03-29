import React from 'react' 
import "../src/index.css"
import "./styles/ProjectCardComponent.css"

export default function ProjectCardComponent({title, description}) {
  return (
    <div className="project-card">
    <img src="https://placehold.co/600x400" alt="Proyecto 1" className="project-image" />
    <div className="project-overlay">
        <div className="project-category">{title}</div>
        <h3 className="project-title">{description}</h3>
        <a href="#" className="project-link">Ver Proyecto <i className="icon-arrow-right-long"></i></a>
    </div>
</div>
  )
}
