import React, { useState } from "react";
import "./styles/Config.css";

const configuraciones = [
  "Cambiar contraseña",
  "Cambiar imagen",
  "Cambiar nombre",
  "Actualizar correo",
  "Cambiar idioma",
  "Notificaciones",
  "Preferencias de tema",
  "Eliminar cuenta",
  "Seguridad",
  "Sesión activa",
];

export default function ConfigViewAp() {
  const [ventana, setVentana] = useState(null);

  const cerrarVentana = () => setVentana(null);

  const renderContenidoVentana = () => {
    switch (ventana) {
      case "Cambiar contraseña":
        return <p>Aquí puedes cambiar tu contraseña.</p>;
      case "Cambiar imagen":
        return (
          <div>
            <p>Sube una nueva imagen:</p>
            <input type="file" />
          </div>
        );
      case "Cambiar nombre":
        return <input type="text" placeholder="Nuevo nombre" />;
      case "Actualizar correo":
        return <input type="email" placeholder="Nuevo correo electrónico" />;
      case "Cambiar idioma":
        return (
          <select>
            <option>Español</option>
            <option>Inglés</option>
          </select>
        );
      case "Notificaciones":
        return (
          <label>
            <input type="checkbox" /> Activar notificaciones
          </label>
        );
      case "Preferencias de tema":
        return (
          <select>
            <option>Claro</option>
            <option>Oscuro</option>
          </select>
        );
      case "Eliminar cuenta":
        return <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>;
      case "Seguridad":
        return <p>Configura autenticación en dos pasos.</p>;
      case "Sesión activa":
        return <p>Cierra sesión en otros dispositivos.</p>;
      default:
        return null;
    }
  };

  return (
    <section className="Configcontenedor">
      <h2 className="Confightitulo">Configuraciones</h2>
      <div className="Configopciones">
        {configuraciones.map((opcion) => (
          <button
            key={opcion}
            className="Configboton"
            onClick={() => setVentana(opcion)}
          >
            {opcion}
          </button>
        ))}
      </div>

      {ventana && (
        <div className="Configmodal">
          <div className="Configventana">
            <h3>{ventana}</h3>
            {renderContenidoVentana()}
            <button className="Configcerrar" onClick={cerrarVentana}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
