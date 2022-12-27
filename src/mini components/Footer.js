import React, { useState } from 'react'
import './Footer.css';

const Footer = () => {
  const [help, setHelp] = useState(["Track Your Order"
    ,"Warranty & Support"
    ,"Return Policy"
    ,"Service Centers"
    ,"Bulk Orders"
    ,"FAQs"
    ,"Why buy direct"])
  
  const [company, setCompany] = useState([
    ,"News"
    ,"Read our Blog"
    ,"Careers"
    ,"Security"
    ,"Terms of Service"
    ,"Privacy Policy"
    ,'Investor Relations'
  ])
  return (
    <div className="footerContainer" title="CLICK Here TO MAIL">
        <div className="logoBox">
          <h3>HORUS</h3>
          <p>A Complete View Of Shopping</p>
          {/* <a href="mailto:sharmaaanshumaan@gmail.com"><i class="fa-solid fa-envelope"></i></a> */}
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