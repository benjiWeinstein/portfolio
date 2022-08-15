import React from "react";
import "./links.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Links = () => {
  return (
    <div className="links-container">
      <a href="https://www.linkedin.com/in/benjamin-weinstein-b39667204/" target="_blank">
        <AiFillLinkedin size={"50"}></AiFillLinkedin>
      </a>

      <a href="https://github.com/benjiWeinstein" target="_blank">
        {" "}
        <AiFillGithub size={"50"}></AiFillGithub>
      </a>
    </div>
  );
};

export default Links;
