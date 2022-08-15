import React from "react";
import {BsFileArrowUpFill} from "react-icons/bs"
import "./uparrow.css"

const UpArrow = () => {
  return (
    <div className="navbar-arrow">
      <a href="#home">
        <BsFileArrowUpFill size={40}></BsFileArrowUpFill>
      </a>
    </div>
  );
};

export default UpArrow;
