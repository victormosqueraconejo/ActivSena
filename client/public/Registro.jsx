import React from 'react'
import "./styles-publics/registro.css"

export default function Registro() {
  return (
    <>
    <div className="container">
        <img src="img brazil.jpg" alt="Logo" />
        <div className="form-container">
            <h1>Crear Cuenta</h1>
            <div className="form-row">
                <div className="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="form-group">
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" required />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label for="email">Correo Electrónico</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label for="fecha-nacimiento">Fecha de Nacimiento</label>
                    <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" required />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label for="contraseña">Contraseña</label>
                    <input type="password" id="contraseña" name="contraseña" required />
                </div>
                <div className="form-group">
                    <label for="sexo">Sexo</label>
                    <select id="sexo" name="sexo" required>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
            </div>
            <div className="cc-ti">
                <div className="cc-ti">
                    <label for="cedula o tarjeta identidad">Cedula o Tarjeta Identidad</label>
                    <select name="cedula o tarjeta identidad" id="cedula o tarjeta identidad">
                        <option value="cedula">Cedula</option>
                        <option value="tarjeta identidad">Tarjeta Identidad</option>
                        <label for="cedula o tarjeta identidad">cc-ti</label>
                    </select>
                </div>
            </div>
            <div className="Numero">
                <div className="Numero">
                    <label for="Numero">Número</label>
                    <input type="Numero" id="Numero" name="Numero" required />
                </div>
                                                 
            </div>
            <div className="NumeroFicha">
                <div className="NumeroFicha">
                    <label for="NumeroFicha">Número de Ficha</label>
                    <input type="NumeroFicha" id="NumeroFicha" name="NumeroFicha" required />
                </div>
            </div>
            <div className="program-name">
                <div className="program-name">
                    <label for="program-name">Nombre del Programa</label>
                    <input type="program-name" id="program-name" name="program-name" required />
                </div>
            </div>
            <div className="button-group">
                <a href="#">
                <button className="back">Atrás</button>
            </a>
                <button className="continue">Continuar</button>
            </div>
        </div>
    </div>
    </>
  )
}
