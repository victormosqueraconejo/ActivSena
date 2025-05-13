import React, { useState } from 'react';
import './styles/App.css';

function RegistroA() {
  const [evento, setEvento] = useState('');
  const [qrs, setQrs] = useState([]);

  const generarQR = () => {
    if (evento) {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(evento)}`;
      setQrs(prev => [
        ...prev,
        { id: Date.now(), evento, url, imagen: null }
      ]);
      setEvento('');
    }
  };

  const manejarImagen = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const urlImagen = URL.createObjectURL(file);
      setQrs(prev =>
        prev.map(item =>
          item.id === id ? { ...item, imagen: urlImagen } : item
        )
      );
    }
  };

  const eliminarQR = (id) => {
    setQrs(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="main-container">
      <div className="card large">
        <h1 className="title"> Generador de QR para Eventos</h1>

        <input
          type="text"
          className="input"
          placeholder="Nombre o ID del evento"
          value={evento}
          onChange={(e) => setEvento(e.target.value)}
        />

        <button className="button" onClick={generarQR}>
          Generar QR
        </button>
      </div>

      {qrs.length > 0 && qrs.map((qr) => (
        <div key={qr.id} className="card qr-box">
          <h2 className="subtitle">QR para: <span>{qr.evento}</span></h2>
          <img src={qr.url} alt="Código QR" className="qr-image" />
          <div className="upload-section">
            <label className="upload-label">Agregar fecha</label>
            <input
              type="file"
              accept="image/*"
              className="file-input"
              onChange={(e) => manejarImagen(e, qr.id)}
            />
          </div>
          {qr.imagen && (
            <div className="preview">
              <p className="preview-title">:</p>
              <img src={qr.imagen} alt="Imagen cargada" className="preview-image" />
            </div>
          )}
          <button className="delete-button" onClick={() => eliminarQR(qr.id)}>
            Eliminar QR
          </button>
        </div>
      ))}
    </div>
  );
}

export default RegistroA;
