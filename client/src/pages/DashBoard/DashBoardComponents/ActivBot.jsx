import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ActivBot() {
  return (
    <Link to="/activbot" className="activbot">
      <FaRobot className="activbot-icon" />
    </Link>
  );
}
