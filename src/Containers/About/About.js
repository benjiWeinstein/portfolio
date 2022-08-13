import React from 'react'
import Header from '../../Components/Header/Header'
import penguinPic  from "../../assets/penguin.JPG";
import './about.css';


const About = () => {
  return (
    <div className='about-container'>
        <Header picture={penguinPic} title="A little about me..." text="I love surfing, playing guitar and learning new things!"></Header>
    </div>
  )
}

export default About