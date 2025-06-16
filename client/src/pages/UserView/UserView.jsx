import React from "react";

import "./styles/UserView.css";

export default function UserView() {
  return (
    <section className="UserContenedor">
      <div className="UserCuadro UserInfo">
        <img src={avatar} alt="Avatar" className="UserAvatar" />
        <h2 className="UserNombre"><strong>Nombre: </strong>John Pecados Banderas</h2>
        <p className="UserRol"><strong>Aprendizaje: </strong>Analisis Y Desarrollo De Software</p>
        <p className="UserRol"><strong>Rol: </strong>Administrador</p>
        <p className="UserRol"><strong>Ficha: </strong>2763872</p>
        <p className="UserRol"><strong>Jornada: </strong>Diurna</p>
        <p className="UserRol"><strong>Numero: </strong>3227691061</p>
        <p className="UserCorreo"><strong>Correo Electronico: </strong>Pecados@soy.sena.edu.co</p>
        <button className="UserBoton">Editar perfil</button>
      </div>

      <div className="UserCuadro UserLudicas">
        <h3 className="UserTitulo">Lúdicas</h3>
        <p className="UserTexto">Participación en actividades recreativas.</p>
      </div>

      <div className="UserCuadro UserEventos">
        <h3 className="UserTitulo">Eventos</h3>
        <p className="UserTexto">Eventos registrados del aprendiz.</p>
      </div>

      
    </section>
  );
}
