import React from "react";
import "./style/CartaContacto.css";

import anaimg from '../CartasContacto/img/ana.png';
import defaultImg from '../CartasContacto/img/defecto.png';
import luisimg from '../CartasContacto/img/luis.png';
import carlaimg from '../CartasContacto/img/carla.png';
import aleximg from '../CartasContacto/img/alex.png';
import logoimg from '../CartasContacto/img/logo-sena.png';
import logonosotros from '../CartasContacto/img/logo.png';

const users = [
  {
    image: anaimg,
    data: ["Nombre: Anaortiz", "Telefono: 34212345", "Correo: anaortizzuluaga@gmail.com", "Profesión: Diseñadora", "Ubicacion: Bienestar al aprendiz"],
    customClass: "carta-contacto-ana"
  },
  {
    image: luisimg,
    data: ["Nombre: LuisGonzalez", "Telefono:3478392", "Correo: luisgonzalez@gmail.com", "Profesión: Ingeniero", "ubicacion : Ambiente desarrollo de software"],
    customClass: "carta-contacto-luis"
  },
  {
    image: carlaimg,
    data: ["Nombre: Carla", "Telefono:3343455", "Correo: carla123cl@gmail.con", "Profesión: Artista", "Ubicacion :Ambiente Licenciatura en musica"],
    customClass: "carta-contacto-carla"
  },
  {
    image: aleximg,
    data: ["Nombre: Alex", "Telefono:944395", "Correo: alexjhoan@gmail.com", "Profesión: programdor", "Ubicacion :Ambiente Desarrollo de Software 2"],
    customClass: "carta-contacto-alex"
  },
];

const FlipCard = ({ data, image, customClass }) => (
  <div className={`flip-card-contacto ${customClass}`}>
    <div className="flip-card-inner-contacto">
      <div className="flip-card-front-contacto">
        <img src={image || defaultImg} alt="Imagen" className="card-image-contacto" />
      </div>
      <div className="flip-card-back-contacto">
        <img src={logoimg} alt="logo sena" className="logo-portada-contacto" />
        <h3>Información de Contacto</h3>
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="pagina-contacto-unica">
      <header className="header-contacto-unico">
        <img src={logonosotros} alt="logo nosotros" className="logo-nosotros-contacto" />
        <h1 className="texto-instructor-contacto">Contactos Instructores y Funcionarios SENA</h1>
      </header>

      <div className="card-container-contacto">
        {users.map((user, idx) => (
          <FlipCard key={idx} image={user.image} data={user.data} customClass={user.customClass} />
        ))}
      </div>
    </div>
  );
};

export default App;
