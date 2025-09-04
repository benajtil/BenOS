import React, { useEffect } from "react";

const PacMan = () => {
  useEffect(() => {

    window.EJS_player = "#pacman-game"; 
    window.EJS_core = "gba"; 
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
      id="pacman-game" 
      style={{ width: "680px", height: "510px", background: "black" }}
    ></div>
  );
};

export default PacMan;
