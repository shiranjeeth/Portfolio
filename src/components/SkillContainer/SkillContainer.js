import React from 'react'
import { Element } from 'react-scroll'
import skillimg from '../assets/istockphoto-1319404394-170667a.jpg'
import LinearProgress from "@material-ui/core/LinearProgress"
import './SkillContainer.css'

const SkillContainer = () => {
  return (
    <Element id="skills" className='skillContainer'>
        <div className='skill-con-img'>
   <img src={skillimg} alt="" className='skill-img'/>
        </div>
        <div className='skillset-container'> 
        <h1>SKILL SET</h1>

        <div className='skillcontainer-skillset'>
          <h5>Html 5</h5>
          <div className='skillcontainer-slider skillcontainerslider1'>
        <LinearProgress varient="determinate" value={95} />
          </div>
        </div>

        <div className='skillcontainer-skillset'>
          <h5>Css</h5>
          <div className='skillcontainer-slider skillcontainerslider2'>
        <LinearProgress varient="determinate" value={85} />
          </div>
        </div>

        <div className='skillcontainer-skillset'>
          <h5>Java Script</h5>
          <div className='skillcontainer-slider skillcontainerslider3'>
        <LinearProgress varient="determinate" value={70} />
          </div>
        </div>

        <div className='skillcontainer-skillset'>
          <h5>React js</h5>
          <div className='skillcontainer-slider skillcontainerslider4'>
        <LinearProgress varient="determinate" value={80} />
          </div>
        </div>


        </div>
    </Element>
  )
}

export default SkillContainer
