import React, { useState } from 'react'
import './Contact.css';

const Contact = () => {
  const [userData, setUserData] = useState({
    username : "",
    email : "",
    message : "",
  })

  const handleInput = (e) => {
    const {name, value} = e.target;
    setUserData({
      ...userData,
      [name] : value,
    })
    console.log(userData);
  }
  return (
    <div className="contactContainer">
    <h2>Feel Free To Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20952.23219755779!2d72.83113545300486!3d19.043523914298913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92fb093d785%3A0x38854a716f0ca945!2sXavier%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1671796444003!5m2!1sen!2sin" width="95%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <form action="https://formspree.io/f/mnqyagwe" method="POST">
        <input type="text" name='username' id='username' value={userData.username} placeholder="USERNAME" onChange={handleInput}/>
        <input type="email" name='email' id='email' value={userData.email} placeholder="E-MAIL" onChange={handleInput}/>
        <textarea name="message" cols="30" rows="10" placeholder='MESSAGE' value={userData.message} onChange={handleInput}/> 
        <input type="submit" value="SEND" id='submit'/>
        </form>
    </div>
  )
}

export default Contact;