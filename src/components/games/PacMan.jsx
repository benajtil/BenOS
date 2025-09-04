import React, { useEffect } from "react";

const PacMan = () => {
  useEffect(() => {
    // ✅ Set EmulatorJS config
    window.EJS_player = "#pacman-game"; // must match the div below
    window.EJS_core = "gba"; // use gba, not snes
    window.EJS_gameUrl = "/roms/PacMan.Collection.gba";
    window.EJS_biosUrl = "";
    window.EJS_pathtodata = "/data/";

    if (!document.getElementById("ejs-loader")) {
      const script = document.createElement("script");
      script.src = "/data/loader.js";
      script.id = "ejs-loader";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="pacman-game" // ✅ matches EJS_player
      style={{ width: "680px", height: "510px", background: "black" }}
    ></div>
  );
};

export default PacMan;
