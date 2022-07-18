import React, { useState } from 'react'
import './Projectmap.css'

const Projectmap = ({project}) => {
    const [show,setshow]=useState(false)
  return (
    <a>
 <div className='project' onMouseEnter={()=>setshow(true)} onMouseLeave={()=>setshow(false)}> 
 {show ? (<div>{project.title}</div>) : (<img src={project.img} className="project-img"/>)}
        </div>

    </a>
  )
}

export default Projectmap
