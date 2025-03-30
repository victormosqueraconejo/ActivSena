import React from 'react';
import './style/Ludicas.css';

const App = () => {
  const activities = [
    {
      id: 1,
      title: "Fútbol",
      image: "imagenes/pngtree-soccer-ball-graphic-png-image_9985488.png",
      location: "Cancha fútbol CTPI",
      schedule: ["10:00 - 11:00", "11:00 - 12:00", "14:00 - 15:00"]
    },
    {
      id: 2,
      title: "Baloncesto",
      image: "imagenes/sticker-png-soccer-ball-basketball-spalding-tf-1000-classic-basketball-spalding-basketball-team-sport-sports-national-junior-college-athletic-association-game-thumbnail-removebg-preview.png",
      location: "Polideportivo CTPI",
      schedule: ["10:00 - 11:00", "11:00 - 12:00", "15:00 - 16:00"]
    },
    {
      id: 3,
      title: "Tenis",
      image: "imagenes/images-removebg-preview.png",
      location: "Cancha de Tenis CTPI",
      schedule: ["10:00 - 11:00", "11:00 - 12:00", "16:00 - 17:00"]
    },
    {
      id: 4,
      title: "Voleibol",
      image: "imagenes/volleyball.png",
      location: "Cancha múltiple CTPI",
      schedule: ["09:00 - 10:00", "13:00 - 14:00"]
    },
    {
      id: 5,
      title: "Ajedrez",
      image: "imagenes/chess.png",
      location: "Biblioteca CTPI",
      schedule: ["08:00 - 09:00", "12:00 - 13:00"]
    },
    {
      id: 6,
      title: "Atletismo",
      image: "imagenes/athletics.png",
      location: "Pista atlética CTPI",
      schedule: ["07:00 - 08:00", "17:00 - 18:00"]
    }
  ];

  return (
    <div className="ludicas-container">
      <header className="ludicas-header">
        <h1 className="ludicas-title">Lúdicas Disponibles</h1>
        <p className="ludicas-subtitle">¡Encuentra tu actividad favorita y únete a la diversión!</p>
        <div className="search-bar">
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