import React from "react";
import Header from "../../Components/Header/Header";
import penguinPic from "../../assets/penguin.JPG";
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Header
        picture={penguinPic}
        title="Hi, I am Benjamin Weinstein, a full stack developer"
        text="I have a degree in Computer Science with 5+ years of programming experience, and one year of experience with web
          development"
      ></Header>
    </div>
  );
};

export default Home;
