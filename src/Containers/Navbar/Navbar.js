import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine, RiCodeSSlashLine } from "react-icons/ri";
import { BsFileArrowUpFill } from "react-icons/bs";
import "./navbar.css";

const Menu = ({ onClick }) => (
  <>
    <p>
      <a href="#home" onClick={onClick}>
        Home
      </a>
    </p>
    <p>
      <a href="#about" onClick={onClick}>
        About
      </a>
    </p>
    <p>
      <a href="#portfolio" onClick={onClick}>
        Portfolio
      </a>
    </p>
    <p>
      <a href="#contact" onClick={onClick}>
        Contact Me
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-outer">
      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links_logo">
            <h1>{`< Benjamin Weinstein />`}</h1>
          </div>
          <div className="navbar-links_container">
            <Menu />
          </div>
        </div>
      </div>
      <div className={`navbar-menu ${toggleMenu ? `navbar-menu-open` : ""}`}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu onClick={() => setToggleMenu(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
