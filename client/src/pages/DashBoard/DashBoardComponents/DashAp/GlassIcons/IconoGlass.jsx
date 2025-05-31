import React from "react";
import "./GlassIcons.css";
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from "react-icons/fi";

const gradientMapping = {
  white: "linear-gradient(hsl(113, 96.30%, 42.70%), hsl(22, 95.20%, 49.20%))",
  purple: "linear-gradient(hsl(120, 89.80%, 50.00%), hsl(98, 89.80%, 50.00%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(255, 25.00%, 93.70%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

// 🔹 Esto ya está dentro del componente:
const items = [
  { icon: <FiFileText />, color: 'blue', label: 'Files' },
  { icon: <FiBook />, color: 'purple', label: 'Books' },
  { icon: <FiHeart />, color: 'red', label: 'Health' },
  { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
  { icon: <FiEdit />, color: 'orange', label: 'Notes' },
  { icon: <FiBarChart2 />, color: 'green', label: 'Stats' },
];

const GlassIcons = () => {
  const getBackgroundStyle = (color) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <div className={`icon-btns custom-class`}>
        {items.map((item, index) => (
          <button
            key={index}
            className={`icon-btn ${item.customClass || ""}`}
            aria-label={item.label}
            type="button"
          >
            <span className="icon-btn__back" style={getBackgroundStyle(item.color)}></span>
            <span className="icon-btn__front">
              <span className="icon-btn__icon" aria-hidden="true">{item.icon}</span>
            </span>
            <span className="icon-btn__label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GlassIcons;
