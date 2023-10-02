import React from "react";
import "./groupsOfWords.css";
import { Link } from "react-router-dom";
import { menuData } from "../../../pages/GameMenu/menuData";

const GroupsOfWords = () => {
  return (
    <div className="groupsOfWords-container">
      {menuData.map((elem) => (
        <Link className="groupsOfWords-cart" to={`/words/${elem.type}`}>
          <p className="groupsOfWords-cartTitle">{elem.textContent}</p>
        </Link>
      ))}
    </div>
  );
};

export default GroupsOfWords;
