import React, { useState, useRef, useEffect } from "react";
import {
  info,
  person,
  about,
  projects,
  timeline,
  tagline,
  typedTitle,
} from "../constant";
import "./css/Showcase.css";

const Showcase = () => {
  const [open, setOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const windowRef = useRef(null);

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [resizing, setResizing] = useState(false);
  const [resizeDir, setResizeDir] = useState(null);
  const [resizeOffset, setResizeOffset] = useState({ x: 0, y: 0, rect: null });

  const toggleWindow = () => {
    setOpen(!open);
    if (!open) setMinimized(false);
  };
  const minimizeWindow = () => setMinimized(true);
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Dragging
  const startDrag = (e) => {
    if (isFullscreen) return;
    setDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const onDrag = (e) => {
    if (!dragging) return;
    windowRef.current.style.left = `${e.clientX - offset.x}px`;
    windowRef.current.style.top = `${e.clientY - offset.y}px`;
  };

  const endDrag = () => setDragging(false);

  // Resizing
  const startResize = (e, dir) => {
    if (isFullscreen) return;
    setResizing(true);
    setResizeDir(dir);
    const rect = windowRef.current.getBoundingClientRect();
    setResizeOffset({ x: e.clientX, y: e.clientY, rect });
    e.stopPropagation();
  };

  const onResize = (e) => {
    if (!resizing || !resizeDir) return;

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

    // Apply styles directly
    windowRef.current.style.width = `${newWidth}px`;
    windowRef.current.style.height = `${newHeight}px`;
    windowRef.current.style.left = `${newLeft}px`;
    windowRef.current.style.top = `${newTop}px`;
  };

  const endResize = () => {
    setResizing(false);
    setResizeDir(null);
  };

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
    <>
      {/* Desktop Icon */}
      <div className="desktop-icon" onDoubleClick={toggleWindow}>
        <img
          src="public/ico/Computers/My Computer.ico"
          alt="Showcase Icon"
          className="icon-img"
        />
        <div className="icon-title">Showcase</div>
      </div>

      {/* Showcase Window */}
      {open && !minimized && (
        <div
          ref={windowRef}
          className={`xp-window showcase-window ${
            isFullscreen ? "fullscreen" : ""
          }`}
          style={{
            left: "100px",
            top: "50px",
            width: isFullscreen ? "100%" : "170vh",
            height: isFullscreen ? "100%" : "85vh",
          }}
        >
          <div className="xp-titlebar" onMouseDown={startDrag} data-drag-handle>
            <div className="title">My Portfolio</div>
            <div className="actions">
              <div className="xp-btn" onClick={minimizeWindow} title="Minimize">
                _
              </div>
              <div
                className="xp-btn"
                onClick={toggleFullscreen}
                title="Fullscreen"
              >
                ☐
              </div>
              <div className="xp-btn" onClick={toggleWindow} title="Close">
                X
              </div>
            </div>
          </div>
          {}

          {/* Resize handles */}
          {!isFullscreen && (
            <>
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
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Showcase;
