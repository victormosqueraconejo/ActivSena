import React, { useState } from "react";
import "./style/RegistroLudicas.css"; 

import cuadradoImg  from './img/cuadrado.jpg'

const ActivityRegistration = () => {
  const [activityData, setActivityData] = useState({
    activityName: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    capacity: "",
    organizer: "",
    infoLink: "",
    image: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivityData({ ...activityData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setActivityData({ ...activityData, image: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activityData.startTime >= activityData.endTime) {
      alert("⚠️ La hora de inicio debe ser anterior a la hora de fin.");
      return;
    }
    alert(`✅ Actividad registrada: ${activityData.activityName}`);
  };

  return (
    <div className="activity-wrapper">
     <h1></h1>
      <div className="image-container">
      <img src={cuadradoImg} alt="Vista previa" className="preview-image" />
      <input type="file" name="image" accept="image/*" onChange={handleImageChange} />

      </div>

      <div className="activity-container">
        <h2>📅 Registro de Actividad</h2>
        <form onSubmit={handleSubmit}>
          <label>
            🏆 Nombre de la actividad
            <input type="text" name="activityName" value={activityData.activityName} onChange={handleChange} required />
          </label>
          
          <label>
            📝 Descripción de la actividad
            <textarea name="description" value={activityData.description} onChange={handleChange} required rows="3"></textarea>
          </label>

          <label>
            📅 Fecha
            <input type="date" name="date" value={activityData.date} onChange={handleChange} required />
          </label>

          <div className="time-container">
            <label>
              ⏰ Hora de inicio
              <input type="time" name="startTime" value={activityData.startTime} onChange={handleChange} required />
            </label>
            <label>
              ⏳ Hora de fin
              <input type="time" name="endTime" value={activityData.endTime} onChange={handleChange} required />
            </label>
          </div>

          <label>
            📍 Ubicación
            <input type="text" name="location" value={activityData.location} onChange={handleChange} required />
          </label>

          <label>
            👥 Cupos disponibles
            <input type="number" name="capacity" value={activityData.capacity} onChange={handleChange} required min="1" />
          </label>

          <label>
            👤 Nombre del organizador
            <input type="text" name="organizer" value={activityData.organizer} onChange={handleChange} required />
          </label>

          <label>
          
          </label>

          <label>
          </label>
          
          <button type="submit">✅ Registrar Actividad</button>
        </form>
      </div>
    </div>
  );
};

export default ActivityRegistration;
