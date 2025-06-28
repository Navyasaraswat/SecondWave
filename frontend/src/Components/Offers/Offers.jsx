import React from 'react'
import './Offers.css'
import model2 from './offermodel.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers for you</h1>
          <p>On Our Best Sellers</p>
          <button>Check now!</button>
        </div>
        <div className="offers-right"></div>
        <img src={model2} alt=""/> 
    </div>
  )
}

export default Offers