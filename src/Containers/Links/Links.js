import React from 'react'
import './links.css'
import github from '../../assets/GitHub.png'
import linkedIn from '../../assets/Linkedin-Logo.png'

const Links = () => {
  return (
    <div className='links-container'>
        <img src={github} alt="" />
        <img src={linkedIn} alt="" />
    </div>
  )
}

export default Links