import React from "react";
import "./css/PopupMessage.css";

const PopupMessage = ({ title, children, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-window">
        <div className="popup-titlebar">
          <span>{title}</span>
          <button className="popup-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};

export default PopupMessage;
