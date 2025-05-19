import React from 'react';
import './style/Ludicas.css';
import baloncestoimg from "./img/baloncesto.jpg"
import futbolimg from "./img/futbol.jpg"
import tenisimg from "./img/tenis.jpg"
import voleibolimg from "./img/voleibol.jpg"
import ajedrezimg from "./img/ajedrez.jpg"
import atletismoimg from "./img/atletismo.jpg"
const App = () => {
  const activities = [
    {
      id: 1,
      title: "Fútbol",
      image: futbolimg,
      location: "Cancha fútbol CTPI",
      schedule: ["10:00 - 11:00", "11:00 - 12:00", "14:00 - 15:00"]
    },
    {
      id: 2,
      title: "Baloncesto",
        image: baloncestoimg,
      location: "Polideportivo CTPI",
      schedule: ["10:00 - 11:00", "11:00 - 12:00", "15:00 - 16:00"]
    },
    {
      id: 3,
      title: "Tenis",
      image: tenisimg,
      location: "Cancha de Tenis CTPI",
      schedule: ["10:00 - 11:00", "11:00 - 12:00", "16:00 - 17:00"]
    },
    {
      id: 4,
      title: "Voleibol",
        image: voleibolimg,
      location: "Cancha múltiple CTPI",
      schedule: ["09:00 - 10:00", "13:00 - 14:00"]
    },
    {
      id: 5,
      title: "Ajedrez",
          image: ajedrezimg,
      location: "Biblioteca CTPI",
      schedule: ["08:00 - 09:00", "12:00 - 13:00"]
    },
    {
      id: 6,
      title: "Atletismo",
           image: atletismoimg,
      location: "Pista atlética CTPI",
      schedule: ["07:00 - 08:00", "17:00 - 18:00"]
    }
  ];

  return (
    <div className="ludicas-container">
      <header className="ludicas-header">
        <h1 className="ludicas-title">Lúdicas Disponibles</h1>
        <p className="ludicas-subtitle">¡Encuentra tu actividad favorita y únete a la diversión!</p>
        <div className="search-barr">
          <input type="text" placeholder="Buscar actividad..." />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>

      <section className="ludicas-grid">
        {activities.map((activity) => (
          <div className="ludicas-card" key={activity.id}>
            <div className="card-image-container">
              <img
                className="ludicas-card-image"
                src={activity.image}
                alt={activity.title}
              />
              <div className="image-overlay"></div>
            </div>
            <div className="ludicas-card-content">
              <h3 className="card-title">{activity.title}</h3>
              <div className="card-info">
                <p className="info-item">
                  <i className="fas fa-map-marker-alt"></i> {activity.location}
                </p>
                <div className="schedule-section">
                  <p className="schedule-title">
                    <i className="far fa-clock"></i> Horarios:
                  </p>
                  <ul className="schedule-list">
                    {activity.schedule.map((time, index) => (
                      <li key={index}>{time}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="ludicas-btn">
                <i className="fas fa-user-plus"></i> Inscribirse
              </button>
            </div>
          </div>
        ))}
      </section>

      <footer className="ludicas-footer">
        <p>¿No encuentras lo que buscas? <a href="#">Contáctanos</a></p>
      </footer>
    </div>
  );
};

export default App;