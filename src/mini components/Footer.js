import React, { useState } from 'react'
import './Footer.css';
// import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub, AiFillMail, AiFillLinkedin} from 'react-icons/ai';
import {RiEarthFill} from 'react-icons/ri';

const Footer = () => {
  const [help] = useState(["Track Your Order"
    ,"Warranty & Support"
    ,"Return Policy"
    ,"Service Centers"
    ,"Bulk Orders"
    ,"FAQs"
    ,"Why buy direct"])
  
  const [company] = useState([
    "News"
    ,"Read our Blog"
    ,"Careers"
    ,"Security"
    ,"Terms of Service"
    ,"Privacy Policy"
    ,'Investor Relations'
  ])
  return (
    <div className="footerContainer" >
        <div className="logoBox">
          <h3>HORUS</h3>
          <p>A Complete View Of Shopping</p>
          <div className="socialIcons">
          <a href="https://github.com/anshumxn09"><AiFillGithub className='myIcons'/></a>
          <a href="https://www.linkedin.com/in/anshumxn09/"><AiFillLinkedin className='myIcons'/></a>
          <a href="mailto:sharmaaanshumaan@gmail.com"><AiFillMail className='myIcons'/></a>
          <a href="https://anshumxnportfolio.netlify.app/"><RiEarthFill className='myIcons'/></a>
          </div>
        </div>
        <div className="similarContent">
          <h3>Help</h3>
          {
            help.map((elem, index) => {
              return (
                <p key={index}>{elem}</p>
              )
            })
          }
        </div>
        <div className="similarContent">
          <h3>Company</h3>
          {
            company.map((elem, index) => {
              return (
                <p key={index}>{elem}</p>
              )
            })
          }
        </div>
    </div>
  )
}

export default Footer