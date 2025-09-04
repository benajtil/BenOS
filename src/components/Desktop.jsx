import React, { useState } from "react";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Win95 from "./Win95";
import SuperMario from "./games/SuperMario";
import PacMan from "./games/PacMan";
import BomberMan from "./games/BomberMan";
import MortalKombat from "./games/MortalKombat";
import TopGear from "./games/TopGear";
import Diablo from "./games/Diablo";
import DraggableWindow from "./DraggableWindow";
import "./css/Desktop.css";

const Desktop = () => {
  const [openApps, setOpenApps] = useState([]);

  const openApp = (app) => {
    if (!openApps.find((a) => a.id === app.id)) {
      setOpenApps([...openApps, { ...app, minimized: false }]);
    } else {
      setOpenApps(
        openApps.map((a) => (a.id === app.id ? { ...a, minimized: false } : a))
      );
    }
  };

  const toggleApp = (id) => {
    setOpenApps(
      openApps.map((a) => (a.id === id ? { ...a, minimized: !a.minimized } : a))
    );
  };

  const closeApp = (id) => {
    setOpenApps(openApps.filter((a) => a.id !== id));
  };

  return (
    <div className="desktop">
      {/* Already existing icons */}
      <Resume />
      <Portfolio />

      {/* Retro Game Icons */}
      <div
        className="icon-container"
        onDoubleClick={() => openApp({ id: "mario", title: "Super Mario" })}
      >
        <img src="/ico/mario.ico" alt="Super Mario" className="icon-img" />
        <div className="icon-title">Super Mario</div>
      </div>

      <div
        className="icon-container"
        onDoubleClick={() => openApp({ id: "pacman", title: "Pac-Man" })}
      >
        <img src="/ico/pacman.ico" alt="Pac-Man" className="icon-img" />
        <div className="icon-title">Pac-Man</div>
      </div>

      <div
        className="icon-container"
        onDoubleClick={() => openApp({ id: "bomberman", title: "Bomber Man" })}
      >
        <img src="/ico/bomberman.ico" alt="Bomber Man" className="icon-img" />
        <div className="icon-title">Bomber Man</div>
      </div>

      <div
        className="icon-container"
        onDoubleClick={() =>
          openApp({ id: "mortal", title: "Mortal Kombat II" })
        }
      >
        <img
          src="/ico/mortal.ico"
          alt="Mortal Kombat II"
          className="icon-img"
        />
        <div className="icon-title">Mortal Kombat II</div>
      </div>

      <div
        className="icon-container"
        onDoubleClick={() => openApp({ id: "topgear", title: "Top Gear" })}
      >
        <img src="/ico/topgear.ico" alt="Top Gear" className="icon-img" />
        <div className="icon-title">Top Gear</div>
      </div>

      <div
        className="icon-container"
        onDoubleClick={() => openApp({ id: "diablo", title: "Diablo" })}
      >
        <img src="/ico/diablo.ico" alt="Diablo" className="icon-img" />
        <div className="icon-title">Diablo</div>
      </div>

      {/* Render Windows */}
      {openApps.map(
        (app) =>
          !app.minimized && (
            <DraggableWindow
              key={app.id}
              id={app.id}
              title={app.title}
              onClose={closeApp}
              onMinimize={toggleApp}
            >
              {app.id === "mario" && <SuperMario />}
              {app.id === "pacman" && <PacMan />}
              {app.id === "bomberman" && <BomberMan />}
              {app.id === "mortal" && <MortalKombat />}
              {app.id === "topgear" && <TopGear />}
              {app.id === "diablo" && <Diablo />}
            </DraggableWindow>
          )
      )}

      {/* Taskbar */}
      <Win95 openApps={openApps} onToggleApp={toggleApp} />
    </div>
  );
};

export default Desktop;
