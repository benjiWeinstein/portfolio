import React from 'react'
import './links.css'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Links = () => {
  return (
    <div className='links-container'>
        <AiFillLinkedin size={'50'}></AiFillLinkedin>
        <AiFillGithub size={'50'}></AiFillGithub>
    </div>
  )
}

export default Links