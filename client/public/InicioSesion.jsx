import React, { useState } from 'react';
import './styles/inicio.css'; 

import perfilImg  from './img/img.jpg' // Imagen de prueba

const InicioSesion = () => {
  const [esOlvidoContraseña, setEsOlvidoContraseña] = useState(false);

  const manejarClickOlvidoContraseña = () => {
    setEsOlvidoContraseña(!esOlvidoContraseña);
  };

  return (
    <div className="contenedorUnico" id="body-inicio-sesion">
      <div className="logoUnico">
        <br />
        <img src={perfilImg} alt="Logo" />
      </div>
      <br />
      <br />
      <h2 className="tituloUnico  ">Bienvenido a ActivSena</h2>
      
      <form className="formularioUnico">
        <div className="usuarioUnico">
          <input
            type="text"
            id="usuarioUnico"
            className="campoInputUnico"
            required
          />
          <label htmlFor="usuarioUnico" className="labelInputUnico">
            Usuario
          </label>
        </div>
        <div className="usuarioUnico">
          <input
            type="password"
            id="passwordUnico"
            className="campoInputUnico"
            required
          />
          <label htmlFor="passwordUnico" className="labelInputUnico">
            Contraseña
          </label>
        </div>

        <div className="olvidoContrasenaUnico">
          <button 
          
            type="button" 
            className="btnLoginUnico" 
            onClick={manejarClickOlvidoContraseña}
            
          >
               <span></span><span></span><span></span><span></span>
           
            {esOlvidoContraseña ? 'Regresar al inicio de sesión' : 'Olvidé mi contraseña'}
          </button>
        </div>

        <button className="btnLoginUnicor">
          <span></span><span></span><span></span><span></span>
          Iniciar sesión
        </button>
      </form>
      <br />

      <div className="registroUnico">
        <p className="textoRegistroUnico">
          ¿No tienes cuenta? 
          <a href="#registro" className="enlaceRegistroUnico">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default InicioSesion;