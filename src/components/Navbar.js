import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const Navbar = () => {
  const {cart} = useCartContext();
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
    setResponsive("navHidden");
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
          <div className={`routePage ${responsive}`} onClick={makeHidden}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"} onClick={makeHidden}>About</Link>
            <Link to={"/products"} onClick={makeHidden} >Products</Link>
            <Link to={"/contact"} onClick={makeHidden}>Contact</Link>
            <div className="cartDesign">
            <Link to={"/cart"} className="cartDesgin" onClick={makeHidden}><i className="fa-solid fa-cart-shopping" /></Link>
            <span className='cartCount'>{
              cart !== null ? cart.length : 0
            }</span>
            </div>
          </div>
      </div>
  )
}

export default Navbar