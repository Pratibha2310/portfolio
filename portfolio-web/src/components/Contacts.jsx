import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

export const Contacts = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
         data-aos = "zoom-in-up"
         data-aos-duration= "1000">
        <a href='https://www.instagram.com/niteshm395/?hl=en' target='_blank' className="items"><FaInstagramSquare className='icons'></FaInstagramSquare></a>
        <a href='https://www.facebook.com/profile.php?id=100059059142444' target='_blank' className="items"><FaFacebook className='icons'></FaFacebook></a>
        <a href='https://www.linkedin.com/in/nitesh-meena-3015aa239/' target='_blank' className="items"><FaLinkedin className='icons'></FaLinkedin></a>
        <a href='#' target='_blank' className="items"><FaXTwitter className='icons'></FaXTwitter></a>
        <a href='#' target='_blank' className="items"><FaGithub className='icons'></FaGithub></a>
        <a href='mailto:niteshm395@gmail.com' target='_blank' className="items"><CgMail className='icons'></CgMail></a>
      </div>
    </div>
    
    </>
  )
}

export default Contacts;