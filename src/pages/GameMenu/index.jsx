import React from "react";
import "./gameMenu.css";
import { Link } from "react-router-dom";
import { menuData } from "./menuData";

const GameMenu = () => {
  return (
    <div className="gameMenu">
      {menuData.map((elem) => (
        <Link className="headerGame" to={elem.to}>
          <div className="menuElement">
            <img src={elem.src} className="menu-img" alt={elem.alt}></img>
            <p className="menu-textContent">слова на тему {elem.textContent}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GameMenu;
