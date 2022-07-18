import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topcontent'>
        
      <div className='topcontent-container'>

        <h1>Shiranjeeth</h1>

        <p>Professional Web Developer</p>

        <a href="www.google.com">
            <button className='cv'>Download CV</button>
        </a>

        <Link to='projects' smooth={true} duration={500}>
            <button className='mywork'>My Work</button>
        </Link>

      </div>
    </div>
  )
}

export default TopContent
