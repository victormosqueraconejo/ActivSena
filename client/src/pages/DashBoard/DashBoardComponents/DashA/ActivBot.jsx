// src/components/ActivBot.jsx
import { FaRobot } from "react-icons/fa";
import React from "react";

export default function ActivBot({ irAChatai }) {
  return (
    <button onClick={irAChatai} className="activbot">
      <FaRobot className="activbot-icon" />
    </button>
  );
}
