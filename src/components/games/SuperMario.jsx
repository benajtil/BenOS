import React, { useEffect } from "react";

const SuperMario = () => {
  useEffect(() => {
    // ✅ Set EmulatorJS config
    window.EJS_player = "#mario-game";
    window.EJS_core = "snes";
    window.EJS_gameUrl = "/roms/Super.Mario.World.1.smc";
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
      id="mario-game"
      style={{ width: "680px", height: "510px", background: "black" }}
    ></div>
  );
};

export default SuperMario;
