import React, { useState, useEffect } from "react";
import "./css/Win95.css";

const Win95 = ({ openApps, onToggleApp }) => {
  const [startOpen, setStartOpen] = useState(false);

  const toggleStartMenu = () => setStartOpen(!startOpen);

  // Close start menu when clicking outside
  useEffect(() => {
    const handleClick = () => setStartOpen(false);
    if (startOpen) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [startOpen]);

  return (
    <section className="win95-container">
      <div className="taskbar">
        <div
          className="start-menu"
          onClick={(e) => {
            e.stopPropagation();
            toggleStartMenu();
          }}
        >
          <img
            src="./assets/win95/Start-Logo.png"
            alt="Start Logo"
            className={`start-logo ${startOpen ? "active" : ""}`}
          />
          {startOpen && (
            <ul className="start-dropdown" onClick={(e) => e.stopPropagation()}>
              <li>My Computer</li>
              <li>Projects</li>
              <li>Documents</li>
              <li>Settings &gt;</li>
              <li>Shut Down...</li>
            </ul>
          )}
        </div>

        {/* Open apps displayed in taskbar */}
        <div className="taskbar-apps">
          {openApps?.map((app) => (
            <button
              key={app.id}
              className="taskbar-btn"
              onClick={() => onToggleApp(app.id)}
            >
              {app.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Win95;
