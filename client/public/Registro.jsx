import React, { useState } from 'react';
import './styles/registro.css';  // Asegúrate de que el CSS esté en esta ruta

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    genero: '',
    documento: '',
    programa: '',
    ficha: '',
    jornada: '',
    centro: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al backend
    console.log(formData);
  };

  return (
    <div className="contenedor-horizontalUnico" id='body-registro'>
      <div className="columna-formularioUnico">
        <h2>Datos Personales</h2>
        
        <div className="grupo-campoUnico">
          <input
            type="text"
            id="nombreUnico"
            name="nombre"
            value={formData.nombre}
            onChange={manejarCambio}
            required
          />
          <label htmlFor="nombreUnico">Nombre completo</label>
        </div>
        
        <div className="grupo-campoUnico">
          <input
            type="number"
            id="edadUnico"
            name="edad"
            value={formData.edad}
            onChange={manejarCambio}
            required
            min="14"
            max="60"
          />
          <label htmlFor="edadUnico">Edad</label>
        </div>
        
        <div className="grupo-campoUnico">
          <select
            id="generoUnico"
            name="genero"
            value={formData.genero}
            onChange={manejarCambio}
            required
          >
            <option value="" selected disabled></option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
          <label htmlFor="generoUnico">Género</label>
        </div>
        
        <div className="grupo-campoUnico">
          <input
            type="number"
            id="documentoUnico"
            name="documento"
            value={formData.documento}
            onChange={manejarCambio}
            required
          />
          <label htmlFor="documentoUnico">Documento</label>
        </div>
      </div>
      
      <div className="columna-formularioUnico">
        <h2>Programa de Formación</h2>
        
        <div className="grupo-campoUnico">
          <select
            id="programaUnico"
            name="programa"
            value={formData.programa}
            onChange={manejarCambio}
            required
          >
            <option value="" selected disabled></option>
            <option value="software">Desarrollo de Software</option>
            <option value="adsi">ADSI</option>
            <option value="multimedia">Multimedia</option>
          </select>
          <label htmlFor="programaUnico">Programa</label>
        </div>
        
        <div className="grupo-campoUnico">
          <input
            type="number"
            id="fichaUnico"
            name="ficha"
            value={formData.ficha}
            onChange={manejarCambio}
            required
          />
          <label htmlFor="fichaUnico">Número de ficha</label>
        </div>
        
        <div className="grupo-campoUnico">
          <input
            type="text"
            id="jornadaUnico"
            name="jornada"
            value={formData.jornada}
            onChange={manejarCambio}
            required
          />
          <label htmlFor="jornadaUnico">Jornada (mañana/tarde/noche)</label>
        </div>
        
        <div className="grupo-campoUnico">
          <input
            type="text"
            id="centroUnico"
            name="centro"
            value={formData.centro}
            onChange={manejarCambio}
            required
          />
          <label htmlFor="centroUnico">Centro de formación</label>
        </div>
      </div>
      
      <div className="columna-formularioUnico">
        <h2>Credenciales</h2>
        
        <div className="grupo-campoUnico">
          <input
            type="email"
            id="emailUnico"
            name="email"
            value={formData.email}
            onChange={manejarCambio}
            required
          />
          <label htmlFor="emailUnico">Correo electrónico</label>
        </div>
        
        <div className="grupo-campoUnico">
          <input
            type="password"
            id="passwordUnico"
            name="password"
            value={formData.password}
            onChange={manejarCambio}
            required
          />
          <label htmlFor="passwordUnico">Contraseña</label>
        </div>
        
        <div className="grupo-campoUnico">
          <input
            type="password"
            id="confirm_passwordUnico"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={manejarCambio}
            required
          />
          <label htmlFor="confirm_passwordUnico">Confirmar contraseña</label>
        </div>
        
        <button type="submit" className="boton-registroUnico" onClick={manejarEnvio}>
          Completar Registro
        </button>
        
        <p className="enlace-loginUnico">¿Ya tienes cuenta? <a href="login.html">Inicia sesión</a></p>
      </div>
    </div>
  );
};

export default Registro;