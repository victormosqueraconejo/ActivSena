"use client"

import React, { useState } from "react"
import "./styles/inicio.css"


// Iconos SVG
const IconoMail = () => (
  <svg className="icono-input-inicio" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
)

const IconoCandado = () => (
  <svg className="icono-input-inicio" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
)

export default function InicioSesion({ alEnviar }) {
  const [datosFormulario, setDatosFormulario] = useState({
    correo: "",
    contrasena: "",
    recordarme: false,
  })
  const [cargando, setCargando] = useState(false)

  const manejarCambio = (evento) => {
    const { name, value, type, checked } = evento.target
    setDatosFormulario((anterior) => ({
      ...anterior,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const manejarEnvio = async (evento) => {
    evento.preventDefault()
    setCargando(true)

    try {
      if (alEnviar) {
        await alEnviar(datosFormulario)
      }
      console.log("Datos de inicio de sesión:", datosFormulario)
    } catch (error) {
      console.error("Error al iniciar sesión:", error)
    } finally {
      setCargando(false)
    }
  }

  return (
    <form className="formulario-inicio-sesion" onSubmit={manejarEnvio}>
      <div className="grupo-campo-inicio">
        <label htmlFor="correo-inicio" className="etiqueta-inicio etiqueta-inicio-desktop">
          Correo Electrónico
        </label>
        <div className="contenedor-input-inicio">
          <IconoMail />
          <input
            id="correo-inicio"
            name="correo"
            type="email"
            placeholder="tu@email.com"
            className="campo-input-inicio"
            value={datosFormulario.correo}
            onChange={manejarCambio}
            required
          />
        </div>
      </div>

      <div className="grupo-campo-inicio">
        <label htmlFor="contrasena-inicio" className="etiqueta-inicio etiqueta-inicio-desktop">
          Contraseña
        </label>
        <div className="contenedor-input-inicio">
          <IconoCandado />
          <input
            id="contrasena-inicio"
            name="contrasena"
            type="password"
            placeholder="••••••••"
            className="campo-input-inicio"
            value={datosFormulario.contrasena}
            onChange={manejarCambio}
            required
          />
        </div>
      </div>

      <div className="contenedor-opciones-inicio contenedor-opciones-inicio-desktop">
        <label className="etiqueta-checkbox-inicio">
          <input
            type="checkbox"
            name="recordarme"
            className="checkbox-inicio"
            checked={datosFormulario.recordarme}
            onChange={manejarCambio}
          />
          <span className="texto-checkbox-inicio">Recordarme</span>
        </label>
        <a href="#" className="enlace-recuperar-inicio">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <button type="submit" className="boton-inicio-sesion" disabled={cargando}>
        {cargando ? "Iniciando sesión..." : "Iniciar Sesión"}
      </button>
    </form>
  )
}
