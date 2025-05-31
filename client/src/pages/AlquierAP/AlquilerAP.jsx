import React from "react";
import "./style/AlquilerAP.css";

import LogoImg from "../AlquierAP/img/logo.png";
import futbolImg from "../AlquierAP/img/futbol.jpg";
import baloncestoImg from "../AlquierAP/img/baloncesto.jpg";
import DanzaImg from "../AlquierAP/img/danza.jpg";
import parquesImg from "../AlquierAP/img/parques.jpg";
import dominoImg from "../AlquierAP/img/domino.png";
import juegosImg from "../AlquierAP/img/juegos_mesa.jpg";
import senaImg from "../AlquierAP/img/logo-sena.png";
import sapoImg from "../AlquierAP/img/sapo.jpg";



const App = () => {
  return (
    <div className="body-alquiler-ap">
      <head>
        
      </head>
      <header className="header-alquiler-ap">
     
        <img src={LogoImg} alt="Logo" className="img-header-alquiler-ap" />
      
        <h1 className="titulo-header-alquiler-ap">Alquiler de Elementos</h1>
      </header>

      <div className="box">
        <span style={{ "--i": 1 }}>
          <img src={DanzaImg} alt="Danza" className="img-danza-alquiler-ap" />
        </span>
        <span style={{ "--i": 2 }}>
          <img src={futbolImg} alt="Fútbol" className="img-futbol-alquiler-ap" />
        </span>
        <span style={{ "--i": 3 }}>
          <img src={parquesImg} alt="Parques" className="img-parques-alquiler-ap" />
        </span>
        <span style={{ "--i": 4 }}>
          <img src={sapoImg} alt="Sapo" className="img-sapo-alquiler-ap" />
        </span>
        <span style={{ "--i": 5 }}>
          <img src={dominoImg} alt="Domino" className="img-domino-alquiler-ap" />
        </span>
        <span style={{ "--i": 6 }}>
          <img
            src={baloncestoImg}
            alt="Baloncesto"
            className="img-baloncesto-alquiler-ap"
          />
        </span>
     
        <span style={{ "--i": 7 }}>
          <img src={juegosImg} alt="Juegos de Mesa" className="img-juegos-alquiler-ap" />
        </span>
        <span style={{ "--i": 8 }}>
          <img src={senaImg} alt="Logo Sena" className="img-sena-alquiler-ap" />
        </span>
      </div>
      
      
    </div>
  );
};

export default App;
