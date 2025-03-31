import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";


export default function ActivBot() {
  return (
    <Link to="/activbot" className="activbot">
      <FaRobot className="activbot-icon" />
    </Link>
  );
}
