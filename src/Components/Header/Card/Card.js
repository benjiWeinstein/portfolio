import React from "react";
import "./card.css";

const Card = ({ img, title, text, extraClass }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img className={`card-image ${extraClass}`} src={img} alt="" />
          <h2 className="card-title">{title}</h2>
          {/* <p className="card-text">{text}</p> */}
        </div>
        <button className="card-btn">More Details</button>
      <div className="card-back">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto ullam odio eligendi error. Dolorem saepe soluta, reprehenderit obcaecati cumque magnam enim consequatur tenetur corporis.
      </div>
      </div>
    </div>
  );
};

export default Card;
