import React from "react";
import "./css/RetroModal.css"; // import the CSS

const RetroModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="retro-modal">
      {/* Title Bar */}
      <div className="retro-titlebar">
        <div className="retro-title">{project.title}</div>
        <div className="retro-actions">
          <div className="retro-btn" onClick={onClose}>
            X
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="retro-body">
        <div className="retro-content">
          <p className="retro-description">{project.description}</p>

          {/* Languages/Tools */}
          {project.languages && (
            <div className="retro-langs">
              {project.languages.map((lang, i) => (
                <span key={i} className="retro-chip">
                  {lang}
                </span>
              ))}
            </div>
          )}

          {/* Footer Buttons */}
          <div className="retro-footer">
            {/* Live Button */}
            <div
              className={`retro-btn ${!project.url?.live ? "disabled" : ""}`}
              onClick={() =>
                project.url?.live && window.open(project.url.live, "_blank")
              }
            >
              Live
            </div>

            {/* GitHub Button */}
            <div
              className={`retro-btn ${!project.url?.github ? "disabled" : ""}`}
              onClick={() =>
                project.url?.github && window.open(project.url.github, "_blank")
              }
            >
              GitHub
            </div>

            {/* Close Button */}
            <div className="retro-btn" onClick={onClose}>
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroModal;
