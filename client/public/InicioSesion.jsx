import React from 'react'
import "./styles-publics/inicio.css"

export default function InicioSesion() {
  return (
    <div class="container">
        <img src="img brazil.jpg" alt="Logo" class="logo" />
        <form class="login-form" id="loginForm">
            <h2>Iniciar Sesión</h2>
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
            
            <button type="button" onclick="handleLogin()">Iniciar Sesión</button>
            
            <a href="#" class="forgot-password">¿Olvidaste la contraseña?</a>
            <a href="#" class="password-forgot">¿Recuperar contraseña?</a>
            
        </form>
    </div>
  )
}
