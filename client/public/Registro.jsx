"use client"

import React, { useState } from "react"
import "./styles/registro.css"


// Iconos SVG
const IconoMail = () => (
  <svg className="icono-input-registro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
)

const IconoCandado = () => (
  <svg className="icono-input-registro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
)

const IconoUsuario = () => (
  <svg className="icono-input-registro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const IconoTelefono = () => (
  <svg className="icono-input-registro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const IconoTarjeta = () => (
  <svg className="icono-input-registro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
)

export default function Registro({ alEnviar }) {
  const [datosFormulario, setDatosFormulario] = useState({
    identificacion: "",
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    contrasena: "",
    aceptaTerminos: false,
  })
  const [errores, setErrores] = useState({})
  const [cargando, setCargando] = useState(false)

  const validarCampo = (nombre, valor) => {
    const nuevosErrores = { ...errores }

    switch (nombre) {
      case "identificacion":
        if (!valor) {
          nuevosErrores.identificacion = "La identificación es obligatoria"
        } else if (valor.length > 50) {
          nuevosErrores.identificacion = "La identificación no puede tener más de 50 dígitos"
        } else if (!/^\d+$/.test(valor)) {
          nuevosErrores.identificacion = "La identificación debe contener solo números"
        } else {
          delete nuevosErrores.identificacion
        }
        break

      case "nombre":
        if (!valor) {
          nuevosErrores.nombre = "El nombre es obligatorio"
        } else if (valor.length > 100) {
          nuevosErrores.nombre = "El nombre no puede tener más de 100 caracteres"
        } else {
          delete nuevosErrores.nombre
        }
        break

      case "apellido":
        if (!valor) {
          nuevosErrores.apellido = "El apellido es obligatorio"
        } else if (valor.length > 100) {
          nuevosErrores.apellido = "El apellido no puede tener más de 100 caracteres"
        } else {
          delete nuevosErrores.apellido
        }
        break

      case "correo":
        if (!valor) {
          nuevosErrores.correo = "El correo es obligatorio"
        } else if (valor.length > 255) {
          nuevosErrores.correo = "El correo no puede tener más de 255 caracteres"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
          nuevosErrores.correo = "El formato del correo no es válido"
        } else {
          delete nuevosErrores.correo
        }
        break

      case "contrasena":
        if (!valor) {
          nuevosErrores.contrasena = "La contraseña es obligatoria"
        } else if (valor.length < 6) {
          nuevosErrores.contrasena = "La contraseña debe tener al menos 6 caracteres"
        } else {
          delete nuevosErrores.contrasena
        }
        break

      default:
        break
    }

    setErrores(nuevosErrores)
  }

  const manejarCambio = (evento) => {
    const { name, value, type, checked } = evento.target
    const nuevoValor = type === "checkbox" ? checked : value

    setDatosFormulario((anterior) => ({
      ...anterior,
      [name]: nuevoValor,
    }))

    if (type !== "checkbox") {
      validarCampo(name, value)
    }
  }

  const manejarEnvio = async (evento) => {
    evento.preventDefault()
    setCargando(true)

    // Validar todos los campos
    Object.keys(datosFormulario).forEach((campo) => {
      if (campo !== "telefono" && campo !== "aceptaTerminos") {
        validarCampo(campo, datosFormulario[campo])
      }
    })

    if (Object.keys(errores).length === 0 && datosFormulario.aceptaTerminos) {
      try {
        if (alEnviar) {
          await alEnviar(datosFormulario)
        }
        console.log("Datos de registro:", datosFormulario)
      } catch (error) {
        console.error("Error al registrar:", error)
      }
    }

    setCargando(false)
  }

  return (
    <form className="formulario-registro" onSubmit={manejarEnvio}>
      <div className="grupo-campo-registro">
        <label htmlFor="identificacion-registro" className="etiqueta-registro etiqueta-registro-desktop">
          Identificación<span className="asterisco-obligatorio-registro">*</span>
        </label>
        <div className="contenedor-input-registro">
          <IconoTarjeta />
          <input
            id="identificacion-registro"
            name="identificacion"
            type="text"
            placeholder="Número de identificación"
            className={`campo-input-registro ${errores.identificacion ? "campo-invalido-registro" : ""}`}
            value={datosFormulario.identificacion}
            onChange={manejarCambio}
            maxLength={50}
            required
          />
        </div>
        {errores.identificacion && <span className="mensaje-error-registro">{errores.identificacion}</span>}
      </div>

      <div className="grilla-campos-registro grilla-campos-registro-desktop">
        <div className="grupo-campo-registro">
          <label htmlFor="nombre-registro" className="etiqueta-registro etiqueta-registro-desktop">
            Nombre<span className="asterisco-obligatorio-registro">*</span>
          </label>
          <div className="contenedor-input-registro">
            <IconoUsuario />
            <input
              id="nombre-registro"
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              className={`campo-input-registro ${errores.nombre ? "campo-invalido-registro" : ""}`}
              value={datosFormulario.nombre}
              onChange={manejarCambio}
              maxLength={100}
              required
            />
          </div>
          {errores.nombre && <span className="mensaje-error-registro">{errores.nombre}</span>}
        </div>

        <div className="grupo-campo-registro">
          <label htmlFor="apellido-registro" className="etiqueta-registro etiqueta-registro-desktop">
            Apellido<span className="asterisco-obligatorio-registro">*</span>
          </label>
          <div className="contenedor-input-registro">
            <IconoUsuario />
            <input
              id="apellido-registro"
              name="apellido"
              type="text"
              placeholder="Tu apellido"
              className={`campo-input-registro ${errores.apellido ? "campo-invalido-registro" : ""}`}
              value={datosFormulario.apellido}
              onChange={manejarCambio}
              maxLength={100}
              required
            />
          </div>
          {errores.apellido && <span className="mensaje-error-registro">{errores.apellido}</span>}
        </div>
      </div>

      <div className="grupo-campo-registro">
        <label htmlFor="correo-registro" className="etiqueta-registro etiqueta-registro-desktop">
          Correo Electrónico<span className="asterisco-obligatorio-registro">*</span>
        </label>
        <div className="contenedor-input-registro">
          <IconoMail />
          <input
            id="correo-registro"
            name="correo"
            type="email"
            placeholder="tu@email.com"
            className={`campo-input-registro ${errores.correo ? "campo-invalido-registro" : ""}`}
            value={datosFormulario.correo}
            onChange={manejarCambio}
            maxLength={255}
            required
          />
        </div>
        {errores.correo && <span className="mensaje-error-registro">{errores.correo}</span>}
      </div>

      <div className="grupo-campo-registro">
        <label htmlFor="telefono-registro" className="etiqueta-registro etiqueta-registro-desktop">
          Teléfono
        </label>
        <div className="contenedor-input-registro">
          <IconoTelefono />
          <input
            id="telefono-registro"
            name="telefono"
            type="tel"
            placeholder="Número de teléfono (opcional)"
            className="campo-input-registro"
            value={datosFormulario.telefono}
            onChange={manejarCambio}
          />
        </div>
      </div>

      <div className="grupo-campo-registro">
        <label htmlFor="contrasena-registro" className="etiqueta-registro etiqueta-registro-desktop">
          Contraseña<span className="asterisco-obligatorio-registro">*</span>
        </label>
        <div className="contenedor-input-registro">
          <IconoCandado />
          <input
            id="contrasena-registro"
            name="contrasena"
            type="password"
            placeholder="••••••••"
            className={`campo-input-registro ${errores.contrasena ? "campo-invalido-registro" : ""}`}
            value={datosFormulario.contrasena}
            onChange={manejarCambio}
            required
          />
        </div>
        {errores.contrasena && <span className="mensaje-error-registro">{errores.contrasena}</span>}
      </div>

      <div className="contenedor-terminos-registro">
        <input
          type="checkbox"
          id="terminos-registro"
          name="aceptaTerminos"
          className="checkbox-terminos-registro"
          checked={datosFormulario.aceptaTerminos}
          onChange={manejarCambio}
          required
        />
        <label htmlFor="terminos-registro" className="texto-terminos-registro texto-terminos-registro-desktop">
          Acepto los{" "}
          <a href="#" className="enlace-terminos-registro">
            términos y condiciones
          </a>{" "}
          y la{" "}
          <a href="#" className="enlace-terminos-registro">
            política de privacidad
          </a>
        </label>
      </div>

      <button type="submit" className="boton-registro" disabled={cargando || !datosFormulario.aceptaTerminos}>
        {cargando ? "Registrando..." : "Registrarse"}
      </button>
    </form>
  )
}
