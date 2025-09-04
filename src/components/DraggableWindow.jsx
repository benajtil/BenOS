import React, { useRef, useState } from "react";

const DraggableWindow = ({ id, title, onClose, onMinimize, children }) => {
  const windowRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [maximized, setMaximized] = useState(false);

  const startDrag = (e) => {
    if (maximized) return;
    const rect = windowRef.current.getBoundingClientRect();
    setDragging(true);
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const onDrag = (e) => {
    if (!dragging || maximized) return;
    windowRef.current.style.left = `${e.clientX - offset.x}px`;
    windowRef.current.style.top = `${e.clientY - offset.y}px`;
  };

  const stopDrag = () => setDragging(false);

  const toggleMaximize = () => setMaximized(!maximized);

  const handleClose = () => {
    // ✅ Clear canvas/audio elements
    const container = windowRef.current.querySelector(".window-content");
    if (container) {
      container.innerHTML = "";
    }

    // ✅ Reset emulator globals
    delete window.EJS_emulator;
    delete window.EJS_player;
    delete window.EJS_gameUrl;

    onClose(id);

    // 🔁 Reload tab if it's a game window
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
