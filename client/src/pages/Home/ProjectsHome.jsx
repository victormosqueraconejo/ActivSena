import React from 'react'
import "../src/index.css"
import "./styles/ProjectsHome.css"
import ProjectCardComponent from '../components/ProjectCardComponent'

let projects = [
    {   title: "Gestion Eficiente",
        description: "Optimiza tus procesos y gestiona tus actividades de manera efectiva."
    }, 
    {   title: "Comunidad Activa",
        description: "Conéctate con otros usuarios y comparte conocimientos."
    },
    {   title: "Eventos y Actividades",
        description: "Participa en eventos y actividades exclusivas para nuestros usuarios."
    }
]


export default function ProjectsHome() {
  return (
    <section id="projects" className="projects-section">
            <div  className="container">
                <div className="section-header">
                    <h2>Nuestros Proyectos</h2>
                </div>
                <div className="projects-grid">
                  <ProjectCardComponent title={projects[0].title} description={projects[0].description} />
                  <ProjectCardComponent title={projects[1].title} description={projects[1].description} />
                  <ProjectCardComponent title={projects[2].title} description={projects[2].description} />
                </div>
            </div>
        </section>
  )
}
