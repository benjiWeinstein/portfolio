import React from "react";
import Header from "../../Components/Header/Header";
import penguinPic from "../../assets/penguin.JPG";
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      {/* <img src={penguinPic} alt="" />
      <h1>Hi, I am Benjamin Weinstein, a full stack developer</h1>
      <p>I have a degree in Computer Science and have one year of experience with web
          development</p> */}
      <Header
        picture={penguinPic}
        title="Hi, I am Benjamin Weinstein, a full stack developer"
        text="I have a degree in Computer Science and have one year of experience with web
          development"
      ></Header>
    </div>
  );
};

export default Home;
