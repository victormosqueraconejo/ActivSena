// src/components/ConstanciasList.jsx
import React, { useState } from "react";
import { FaEye, FaTimesCircle } from "react-icons/fa";
import ConstanciaModal from "./ConstanciaModal";
import '../styles/styles.css';

const constanciasData = [
  { id: 1, nombre: "Juan Pérez", horaLudicas: 60, observaciones: "" },
  {
    id: 2,
    nombre: "Ana García",
    horaLudicas: 10,
    observaciones: "Alquiler de elemento no entregado.",
  },
  {
    id: 3,
    nombre: "Carlos Ramírez",
    horaLudicas: 5,
    observaciones: "Entregado en mal estado",
  },
  { id: 4, nombre: "María López", horaLudicas: 60, observaciones: "" },
  { id: 5, nombre: "Lucía Rodríguez", horaLudicas: 60, observaciones: "" },
];

function ConstanciasList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedConstancia, setSelectedConstancia] = useState(null);
  const [message, setMessage] = useState("");

  const handleVerDetalles = (constancia) => {
    setSelectedConstancia(constancia);
    setModalOpen(true);
  };

  const handleCerrarModal = () => {
    setModalOpen(false);
    setSelectedConstancia(null);
  };

  const handleGenerarConstancia = (id) => {
    setMessage(`✅ ¡Constancia generada para el aprendiz con ID: ${id}!`);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleRechazar = (id) => {
    setMessage(`❌ Constancia rechazada para el aprendiz con ID: ${id}.`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="GHcontainer">
      <h1 className="GHh1">Constancias Generadas</h1>

      {message && (
        <div
          className={`GHmessage ${
            message.includes("rechazada") ? "GH-message-error" : ""
          }`}
        >
          {message}
        </div>
      )}

      <ul className="GHul">
        {constanciasData.map((constancia) => (
          <li className="GHli" key={constancia.id}>
            <div className="GHinfo">
              <strong>{constancia.nombre}</strong>
              <p className="GHparrafo">
                Horas lúdicas: <strong>{constancia.horaLudicas}h</strong> –{" "}
                {constancia.horaLudicas >= 60
                  ? "✅ Cumplió con el objetivo"
                  : "⚠️ En proceso"}
              </p>
              <p className="GHparrafo">
                Observación:{" "}
                {constancia.observaciones
                  ? constancia.observaciones
                  : "No tiene ninguna observación."}
              </p>
            </div>
            <div className="GHacciones">
              <button
                className="GHbutton"
                onClick={() => handleVerDetalles(constancia)}
              >
                <FaEye /> Ver Detalles
              </button>
              <button
                className="GHbutton GHbutton.rechazar"
                onClick={() => handleRechazar(constancia.id)}
              >
                <FaTimesCircle /> Rechazar
              </button>
            </div>
          </li>
        ))}
      </ul>

      {modalOpen && (
        <ConstanciaModal
          constancia={selectedConstancia}
          onClose={handleCerrarModal}
          onGenerarConstancia={handleGenerarConstancia}
          onRechazar={handleRechazar}
        />
      )}
    </div>
  );
}

export default ConstanciasList;
