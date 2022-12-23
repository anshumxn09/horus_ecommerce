import React from 'react'
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className="heroContainer">
        <div className="hContent">
            <p>Welcome To</p>
            <h2>Horus Shop</h2>
            <span>A Complete View of shopping.</span>
            <Link to="/products">shop now</Link>
        </div>
        <img src="https://media.istockphoto.com/id/502197861/photo/family-looking-at-clothes-on-rail-in-shopping-mall.jpg?s=612x612&w=0&k=20&c=xAy6jwW4j2yTy0UgFIv3MZvhGKIxN1QER3SJpOvIUGA=" alt="family shopping images" width={450} height={320}/>
    </div>
  )
}

export default Hero