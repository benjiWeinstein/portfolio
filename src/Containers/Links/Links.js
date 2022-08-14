import React from 'react'
import './links.css'
import github from '../../assets/GitHub.png'
import linkedIn from '../../assets/Linkedin-Logo.png'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Links = () => {
  return (
    <div className='links-container'>
        {/* <img src={github} alt="" /> */}
        <AiFillLinkedin size={'50'}></AiFillLinkedin>
        <AiFillGithub size={'50'}></AiFillGithub>
        {/* <img src={linkedIn} alt="" /> */}
    </div>
  )
}

export default Links