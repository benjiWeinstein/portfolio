import React from "react";
import "./header.css";

const Header = ({picture, title, text}) => {
  return (
    <div className="header-container">
      <div className="header-image">
        <img src={picture} alt="penguin" />
      </div>
      <div className="header-info">
        <h1 className="header-info_title">
          {title}     
        </h1>
        <p className="header-info_text">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Header;
