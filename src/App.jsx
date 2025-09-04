import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Win95, Desktop } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Win95 />
      <Desktop />
    </BrowserRouter>
  );
};

export default App;
