import React from 'react'
import { Link } from  'react-scroll'
import'./Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>Develop <span>er</span> </h1>
        </div>
        <div className='header-right'>

            <Link to="about" smooth={true} duration={500}>

            <h3>About me</h3>

            </Link>

            <Link to="skills" smooth={true} duration={500}>
            <h3>Skills</h3>
            </Link>

            <Link to="projects" smooth={true} duration={500}>
            <h3>Projects</h3>
            </Link>

            <Link to="contact" smooth={true} duration={500}>
            <h3>Contact</h3>
            </Link>

            

        </div>
    </div>
  )
}
export default Header
