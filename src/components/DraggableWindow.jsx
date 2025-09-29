import React, { useRef, useState } from "react";

const DraggableWindow = ({ id, title, onClose, onMinimize, children }) => {
  const windowRef = useRef(null);
  const ghostRef = useRef(null);

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [maximized, setMaximized] = useState(false);

  const startDrag = (e) => {
    if (maximized) return;
    const rect = windowRef.current.getBoundingClientRect();

    setDragging(true);
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    document.body.style.userSelect = "none";

    // Create wireframe ghost
    const ghost = document.createElement("div");
    ghost.className = "drag-ghost";
    ghost.style.position = "absolute";
    ghost.style.left = `${rect.left}px`;
    ghost.style.top = `${rect.top}px`;
    ghost.style.width = `${rect.width}px`;
    ghost.style.height = `${rect.height}px`;
    ghost.style.border = "2px dashed #000";
    ghost.style.pointerEvents = "none";
    ghost.style.zIndex = 9999;
    document.body.appendChild(ghost);
    ghostRef.current = ghost;

    // 🔑 Attach global listeners
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const onDrag = (e) => {
    if (!dragging || maximized || !ghostRef.current) return;
    ghostRef.current.style.left = `${e.clientX - offset.x}px`;
    ghostRef.current.style.top = `${e.clientY - offset.y}px`;
  };

  const stopDrag = () => {
    if (!dragging) return;
    setDragging(false);
    document.body.style.userSelect = "auto";

    if (ghostRef.current) {
      windowRef.current.style.left = ghostRef.current.style.left;
      windowRef.current.style.top = ghostRef.current.style.top;

      ghostRef.current.remove();
      ghostRef.current = null;
    }

    // 🔑 Clean up global listeners
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  const toggleMaximize = () => setMaximized(!maximized);

  const handleClose = () => {
    // Kill emulator/game if present
    const container = windowRef.current.querySelector(".window-content");
    if (container) container.innerHTML = "";

    delete window.EJS_emulator;
    delete window.EJS_player;
    delete window.EJS_gameUrl;

    onClose(id);

    if (
      ["mario", "pacman", "bomberman", "mortal", "topgear", "diablo"].includes(
        id
      )
    ) {
      window.location.reload();
    }
  };

  return (
    <div
      ref={windowRef}
      className={`app-window ${maximized ? "maximized" : ""}`}
      style={{
        top: maximized ? "0" : "120px",
        left: maximized ? "0" : "120px",
        width: maximized ? "100%" : "700px",
        height: maximized ? "100%" : "540px",
        position: "absolute",
      }}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
    >
      <div
        className="window-titlebar"
        onMouseDown={startDrag}
        onMouseUp={stopDrag}
        style={{
          cursor: maximized ? "default" : "move",
          background: "#0047ab",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px 8px",
        }}
      >
        <span>{title}</span>
        <div className="window-actions">
          <button onClick={() => onMinimize(id)}>_</button>
          <button onClick={toggleMaximize}>{maximized ? "🗗" : "🗖"}</button>
          <button onClick={handleClose}>X</button>
        </div>
      </div>
      <div
        className="window-content"
        style={{
          width: "100%",
          height: "calc(100% - 30px)",
          background: "#000",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DraggableWindow;
