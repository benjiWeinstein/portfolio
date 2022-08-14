import React from "react";
import "./about.css";
import guitar from '../../assets/guitar.jpeg'
import southAfrica from '../../assets/sa.JPG'
import sunset from '../../assets/sunset.JPG'
import Card from "../../Components/Header/Card/Card";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>A little about me...</h1>
      </div>
      <div className="about-grid">
        {[
          { img: southAfrica, title: "South African", text: "world", iconClass: "card-back-image-mountain" },
          { img: guitar, title: "Musician", text: "world", iconClass: "card-back-image-guitar" },
          { img: sunset, title: "Beach", text: "world", iconClass: "card-back-image-wave", lastCard: true },
        ].map(({img, title, text, iconClass, lastCard}) => <Card img={img} title={title} text={text} iconClass={iconClass} lastCard={lastCard}></Card>)}
      </div>
    </div>
  );
};

export default About;
