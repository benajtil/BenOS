import React from "react";
import "./css/SideBar.css";

const SideBar = ({ setActivePage, activePage }) => {
  return (
    <div className="side-bar">
      <h2>BEN FLORENCE AJ TIL PORTFOLIO</h2>
      <hr />
      <ul>
        <li
          className={activePage === "About" ? "active" : ""}
          onClick={() => setActivePage("About")}
        >
          About
        </li>
        <li
          className={activePage === "Project" ? "active" : ""}
          onClick={() => setActivePage("Project")}
        >
          Projects
        </li>
        <li
          className={activePage === "Playground" ? "active" : ""}
          onClick={() => setActivePage("Playground")}
        >
          Playground
        </li>
        <li
          className={activePage === "Experience" ? "active" : ""}
          onClick={() => setActivePage("Experience")}
        >
          Experience
        </li>
        <li
          className={activePage === "Contact" ? "active" : ""}
          onClick={() => setActivePage("Contact")}
        >
          Contact Me
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
