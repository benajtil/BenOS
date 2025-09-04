import React, { useEffect } from "react";

const TopGear = () => {
  useEffect(() => {
    // ✅ Set EmulatorJS config
    window.EJS_player = "#TopGear-game";
    window.EJS_core = "snes";
    window.EJS_gameUrl = "/roms/Top Gear 2 (USA).sfc";
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
      id="TopGear-game"
      style={{ width: "680px", height: "510px", background: "black" }}
    ></div>
  );
};

export default TopGear;
