import React, {useState} from "react";
import "../src/index.css"
import "./styles/HeaderHome.css"

export default function HeaderHome () {

    const [menuDesplegado, setMenuDesplegado] = useState(false)

    const cambiarEstadoMenu = () => {
        setMenuDesplegado(!menuDesplegado)
    }

    
    return (
        <header className="site-header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <a href="index.html">
                            <span className="logo-waso">Activ</span>
                            <span className="logo-strategy">Sena</span>
                        </a>
                    </div>
                    
                    <nav className="main-nav">
                        <button className={`menu-toggle ${menuDesplegado ? "active": ""} ` } id="menuToggle" onClick={cambiarEstadoMenu} aria-expanded={!menuDesplegado ? "true" : "false"}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                        <ul className={`nav-menu ${menuDesplegado ? "active": ""} ` } id="navMenu">
                            <li><a href="#home" onClick={cambiarEstadoMenu} className="active">INICIO</a></li>
                            <li><a href="#about" onClick={cambiarEstadoMenu} >NOSOTROS</a></li>
                            <li><a href="#anuncios" onClick={cambiarEstadoMenu}>ANUNCIOS</a></li>
                            <li><a href="#projects" onClick={cambiarEstadoMenu}>PROYECTOS</a></li>
                            <li><a href="#contact" onClick={cambiarEstadoMenu}>CONTACTO</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


