"use client"

import React, { useState } from "react"
import InicioSesion from "./InicioSesion"
import Registro from "./Registro"
import "./styles/estilos-generales-inicio.css"
import HeaderHome from "../src/pages/Home/HeaderHome"

// Iconos SVG

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
    <>
    <HeaderHome />
    <div className="contenedor-principal">

    {/*Aqui va el componente de header*/}

    
    

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
    </div>
    </>
  )
}
