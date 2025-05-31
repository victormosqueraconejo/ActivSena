import React from "react";
import "./GlassIcons.css";

const gradientMapping = {
  blue: "linear-gradient(hsl(29, 89.80%, 50.00%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(9, 89.80%, 50.00%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(255, 33.30%, 95.30%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(#0ac213, hsl(108, 90%, 40%))",
};

const GlassIcons = ({ items = [], className = "" }) => {
  const getBackgroundStyle = (color) => {
    return gradientMapping[color]
      ? { background: gradientMapping[color] }
      : { background: color };
  };

  return (
    <div className={`icon-btns ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <button
            className={`icon-btn ${item.customClass || ""}`}
            aria-label={item.label}
            type="button"
          >
            <span
              className="icon-btn__back"
              style={getBackgroundStyle(item.color)}
            ></span>
            <span className="icon-btn__front">
              <span className="icon-btn__icon" aria-hidden="true">
                {item.icon}
              </span>
            </span>
          </button>
          <span className="icon-btn__label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default GlassIcons;
