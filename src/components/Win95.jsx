import React, { useState, useEffect } from "react";
import "./css/Win95.css";

const Win95 = ({ openApps, onToggleApp }) => {
  const [startOpen, setStartOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

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
            src="/assets/win95/Start-Logo.png"
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

        {}
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

        {}
        <div className="system-tray">
          {showBubble && (
            <div className="tray-bubble">
              <strong>About Me:</strong>
              <p>
                👋 Hi, I'm <b>Ben Florence</b>
              </p>
              <p>💻 Full-Stack Developer</p>
              <p>🌏 Philippines</p>

              <div className="tray-links">
                <p>
                  🔗{" "}
                  <a
                    href="https://linkedin.com/in/benzajtil"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  🐙{" "}
                  <a
                    href="https://github.com/benajtil"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </p>
                <p>
                  📧{" "}
                  <a href="mailto:benflorence.dev@gmail.com">
                    benflorence.dev@gmail.com
                  </a>
                </p>
              </div>

              <button onClick={() => setShowBubble(false)}>×</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Win95;
