"use client"

import React, { useState } from "react"
import InicioSesion from "./InicioSesion"
import Registro from "./Registro"
import "./styles/estilos-generales-inicio.css"

// Iconos SVG
const IconoChat = () => (
  <svg className="icono-chat icono-chat-desktop" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const IconoMenu = () => (
  <svg className="icono-menu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const IconoCerrar = () => (
  <svg className="icono-menu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default function Cuenta() {
  const [esLogin, setEsLogin] = useState(true)
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false)

  const manejarInicioSesion = async (datos) => {
    console.log("Iniciando sesión con:", datos)
    // Aquí iría la lógica de autenticación
    alert("Inicio de sesión exitoso!")
  }

  const manejarRegistro = async (datos) => {
    console.log("Registrando usuario:", datos)
    // Aquí iría la lógica de registro
    alert("Registro exitoso!")
  }

  const manejarClicEnlace = (evento) => {
    evento.preventDefault()
    console.log("Navegando a:", evento.target.textContent)
  }

  return (
    <div className="contenedor-principal">
      {/* Imagen de fondo */}
      <div className="fondo-imagen">
        <img src="/images/hero-bg.png" alt="Fondo" className="imagen-fondo" />
        <div className="superposicion-fondo" />
      </div>

      {/* Navegación */}
      <nav className="barra-navegacion">
        <div className={`contenedor-navegacion ${!menuMovilAbierto ? "contenedor-navegacion-desktop" : ""}`}>
          <div className="logo-contenedor">
            <div className="logo-icono">
              <span className="logo-letra">A</span>
            </div>
            <span className={`logo-texto ${!menuMovilAbierto ? "logo-texto-desktop" : ""}`}>
              Activ<span className="logo-texto-verde">Sena</span>
            </span>
          </div>

          {/* Menú Desktop */}
          <div className="menu-desktop menu-desktop-visible">
            <a href="#" className="enlace-menu enlace-menu-activo" onClick={manejarClicEnlace}>
              INICIO
            </a>
            <a href="#" className="enlace-menu" onClick={manejarClicEnlace}>
              NOSOTROS
            </a>
            <a href="#" className="enlace-menu" onClick={manejarClicEnlace}>
              ANUNCIOS
            </a>
            <a href="#" className="enlace-menu" onClick={manejarClicEnlace}>
              PROYECTOS
            </a>
            <a href="#" className="enlace-menu" onClick={manejarClicEnlace}>
              CONTACTO
            </a>
          </div>

          {/* Botón menú móvil */}
          <button className="boton-menu-movil" onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}>
            {menuMovilAbierto ? <IconoCerrar /> : <IconoMenu />}
          </button>
        </div>

        {/* Menú móvil */}
        {menuMovilAbierto && (
          <div className="menu-movil">
            <div className="contenedor-menu-movil">
              <a href="#" className="enlace-menu enlace-menu-activo" onClick={manejarClicEnlace}>
                INICIO
              </a>
              <a href="#" className="enlace-menu" onClick={manejarClicEnlace}>
                NOSOTROS
              </a>
              <a href="#" className="enlace-menu" onClick={manejarClicEnlace}>
                ANUNCIOS
              </a>
              <a href="#" className="enlace-menu" onClick={manejarClicEnlace}>
                PROYECTOS
              </a>
              <a href="#" className="enlace-menu" onClick={manejarClicEnlace}>
                CONTACTO
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Contenido principal */}
      <div className="contenido-principal contenido-principal-desktop">
        <div className="contenedor-tarjeta">
          <div className="tarjeta-auth">
            <div className="encabezado-tarjeta encabezado-tarjeta-desktop">
              <h1 className="titulo-tarjeta titulo-tarjeta-desktop">{esLogin ? "Iniciar Sesión" : "Registrarse"}</h1>
              <p className="descripcion-tarjeta descripcion-tarjeta-desktop">
                {esLogin ? "Accede a la plataforma más innovadora" : "Únete a la plataforma más innovadora"}
              </p>
            </div>
            <div className="contenido-tarjeta contenido-tarjeta-desktop">
              {esLogin ? <InicioSesion alEnviar={manejarInicioSesion} /> : <Registro alEnviar={manejarRegistro} />}

              <div className="contenedor-cambio-formulario">
                <button
                  onClick={() => setEsLogin(!esLogin)}
                  className="boton-cambio-formulario boton-cambio-formulario-desktop"
                >
                  {esLogin ? "¿No tienes cuenta? Regístrate aquí" : "¿Ya tienes cuenta? Inicia sesión aquí"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widget de chat */}
      <div className="widget-chat widget-chat-desktop">
        <button className="boton-chat">
          <IconoChat />
        </button>
        <div className="notificacion-chat notificacion-chat-desktop">1</div>
      </div>
    </div>
  )
}
