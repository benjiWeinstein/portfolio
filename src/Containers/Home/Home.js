import React from "react";
import Header from "../../Components/Header/Header";
import penguinPic from "../../assets/penguin.JPG";

const Home = () => {
  return (
    <div>
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
