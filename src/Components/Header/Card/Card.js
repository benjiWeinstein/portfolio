import React, { useState } from "react";
import "./card.css";

const Card = ({ img, title, text, extraClass, iconClass, lastCard }) => {
    const [flipClass, setFlipClass] = useState('')
  return (
    <div className={`card ${flipClass} ${lastCard ? `card-last` : ""}`}>
      <div className="card-front">
        <div className="card-body">
          <img className={`card-image ${extraClass}`} src={img} alt="" />
          <h2 className="card-title">{title}</h2>
          {/* <p className="card-text">{text}</p> */}
        </div>
        <button className="card-btn" onClick={() => {setFlipClass('card-flip')}}>More Details</button>
      </div>
      <div className="card-back">
        <div className="card-front">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea commodi placeat sit assumenda nemo, error non, facere ipsa quidem ut dolorem minus, illum itaque accusamus.</p>
            <div className={`card-back-image ${iconClass}`}></div>
            <button className="card-btn" onClick={() => {setFlipClass('')}}>Less Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
