import React, { useState, useRef, useEffect } from "react";
import "./css/ico.css";

const Resume = () => {
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDir, setResizeDir] = useState(null);
  const [resizeOffset, setResizeOffset] = useState({ x: 0, y: 0, rect: null });

  const windowRef = useRef(null);

  const toggleWindow = () => setOpen(!open);

  // --- Dragging ---
  const startDrag = (e) => {
    if (!windowRef.current) return;
    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const onDrag = (e) => {
    if (!isDragging || !windowRef.current) return;
    windowRef.current.style.left = `${e.clientX - offset.x}px`;
    windowRef.current.style.top = `${e.clientY - offset.y}px`;
  };

  const endDrag = () => setIsDragging(false);

  // --- Resizing ---
  const startResize = (e, dir) => {
    if (!windowRef.current) return;
    setIsResizing(true);
    setResizeDir(dir);
    const rect = windowRef.current.getBoundingClientRect();
    setResizeOffset({ x: e.clientX, y: e.clientY, rect });
    e.stopPropagation();
  };

  const onResize = (e) => {
    if (!isResizing || !windowRef.current || !resizeDir) return;

    const dx = e.clientX - resizeOffset.x;
    const dy = e.clientY - resizeOffset.y;
    const rect = resizeOffset.rect;

    let newWidth = rect.width;
    let newHeight = rect.height;
    let newLeft = rect.left;
    let newTop = rect.top;

    if (resizeDir.includes("right")) newWidth = Math.max(rect.width + dx, 200);
    if (resizeDir.includes("bottom"))
      newHeight = Math.max(rect.height + dy, 150);
    if (resizeDir.includes("left")) {
      newWidth = Math.max(rect.width - dx, 200);
      newLeft = rect.left + dx;
    }
    if (resizeDir.includes("top")) {
      newHeight = Math.max(rect.height - dy, 150);
      newTop = rect.top + dy;
    }

    windowRef.current.style.width = `${newWidth}px`;
    windowRef.current.style.height = `${newHeight}px`;
    windowRef.current.style.left = `${newLeft}px`;
    windowRef.current.style.top = `${newTop}px`;
  };

  const endResize = () => {
    setIsResizing(false);
    setResizeDir(null);
  };

  // Attach events
  useEffect(() => {
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mousemove", onResize);
    window.addEventListener("mouseup", () => {
      endDrag();
      endResize();
    });
    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mousemove", onResize);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("mouseup", endResize);
    };
  });

  return (
    <div className="icon-container">
      {/* Desktop Icon */}
      <img
        src="./ico/Mail & Letters/Mail text.ico"
        alt="Resume Icon"
        className="icon-img"
        onClick={toggleWindow}
      />
      <div className="icon-title-resume">Resume</div>

      {/* Window */}
      {open && (
        <div
          ref={windowRef}
          className="xp-window"
          style={{
            left: "100px",
            top: "50px",
            width: "600px",
            height: "400px",
            position: "absolute",
          }}
        >
          {/* Title Bar */}
          <div className="xp-titlebar" onMouseDown={startDrag}>
            <div className="title">My Resume</div>
            <div className="actions">
              <div className="xp-btn" onClick={toggleWindow} title="Close">
                X
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="xp-content" style={{ height: "calc(100% - 30px)" }}>
            <iframe
              src="/Resume.pdf"
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            ></iframe>
          </div>

          {/* Resize Handles */}
          <div
            className="resize-handle top"
            onMouseDown={(e) => startResize(e, "top")}
          />
          <div
            className="resize-handle right"
            onMouseDown={(e) => startResize(e, "right")}
          />
          <div
            className="resize-handle bottom"
            onMouseDown={(e) => startResize(e, "bottom")}
          />
          <div
            className="resize-handle left"
            onMouseDown={(e) => startResize(e, "left")}
          />
          <div
            className="resize-handle top-left"
            onMouseDown={(e) => startResize(e, "top-left")}
          />
          <div
            className="resize-handle top-right"
            onMouseDown={(e) => startResize(e, "top-right")}
          />
          <div
            className="resize-handle bottom-left"
            onMouseDown={(e) => startResize(e, "bottom-left")}
          />
          <div
            className="resize-handle bottom-right"
            onMouseDown={(e) => startResize(e, "bottom-right")}
          />
        </div>
      )}
    </div>
  );
};

export default Resume;
