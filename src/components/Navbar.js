import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  const [responsive, setResponsive] = useState("navHidden");

  const setClick = () => {
    setHamburger(!hamburger);
    if(hamburger) setResponsive("");
    else setResponsive("navHidden");
    // console.log(hamburger);
  }

  const makeHidden = () => {
    setHamburger(true);
    responsive("navHidden");
  }
  return (
      <div className="navCont">
          <div className="navlogo">
          <Link to={"/"}>HORUS</Link>
          </div>
          <div className="mobileIcons" onClick={setClick}>
            {
              hamburger ? <i className="fa-solid fa-bars" />: <i class="fa-solid fa-xmark" />
            }
          </div>
          <div className={`routePage ${responsive}`}>
            <Link to={"/"} onClick={makeHidden}>Home</Link>
            <Link to={"/about"} onClick={makeHidden}>About</Link>
            <Link to={"/products"} onClick={makeHidden}>Products</Link>
            <Link to={"/contact"} onClick={makeHidden}>Contact</Link>
            <div className="cartDesign">
            <Link to={"/cart"} className="cartDesgin" onClick={makeHidden}><i className="fa-solid fa-cart-shopping" /></Link>
            <span className='cartCount'>0</span>
            </div>
          </div>
      </div>
  )
}

export default Navbar