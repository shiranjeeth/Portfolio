import React from 'react'
import './Contact.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import { Element } from 'react-scroll'

const Contact = () => {
  return (
    <div className='contact-con'>
        <Element name="contact">
        <h1>Contact</h1>
        <p className='p'>Email : <span>shiranjeeth619@gmail.com</span></p>
        <p className='p1'>Github : <span>shiranjeeth</span></p>
        <div className='icons'>
        <AiFillLinkedin/>
        <AiOutlineInstagram/>
        <AiFillFacebook/>
        </div>
        </Element>
    </div>
  )
}

export default Contact
