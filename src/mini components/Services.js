import React from 'react'
import './Services.css';

const Services = () => {
  return (
    <div className="serviceContainer">
        <div className="sblocks">
            <div className="icon"><i class="fa-solid fa-truck-front" /></div>
            <p>Super Fast Delivery</p>
        </div>
        <div className="twoinone">
            <div className="innerBlocks">
            <div className="icon"><i class="fa-solid fa-ship" /></div>
            <p>Non Contact Shipping</p>
            </div>
            <div className="innerBlocks">
            <div className="icon"><i class="fa-solid fa-money-bill-transfer" /></div>
            <p>Money Back Guranteed</p>
            </div>
        </div>
        <div className="sblocks">
        <div className="icon"><i class="fa-solid fa-shield-halved" /></div>
            <p>Secure Payment System</p>
        </div>
    </div>
  )
}

export default Services