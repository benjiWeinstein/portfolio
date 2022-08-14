import React from "react";
import "./about.css";
import guitar from '../../assets/guitar.jpeg'
import southAfrica from '../../assets/sa.JPG'
import sunset from '../../assets/sunset.JPG'
import Card from "../../Components/Header/Card/Card";

const About = () => {
  return (
    <div className="about-container">
      {/* <Header
        picture={penguinPic}
        title="A little about me..."
        text="I love surfing, playing guitar and learning new things!"
      ></Header> */}
      <div className="about-title">
        <h1>A little about me...</h1>
      </div>
      <div className="about-grid">
        {[
          { img: southAfrica, title: "South African", text: "world" },
          { img: guitar, title: "Musician", text: "world" },
          { img: sunset, title: "Surfer", text: "world" },
        ].map(({img, title, text}) => <Card extraClass={'guitarCard'} img={img} title={title} text={text} ></Card>)}
      </div>
    </div>
  );
};

export default About;
