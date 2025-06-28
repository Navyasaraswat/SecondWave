import React from 'react'
import './Hero.css'
import model from './model.png';
import hand_icon from './th.jpg';
import arrow from './arrow.avif'
const Hero = () => {
  return (
    <div className='Hero'>
        <div className="hero-left">
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                
            </div>

        </div>
    <div className="hero-right">
    <img src={model} alt=""/>
    </div>
       </div>
  )
}

export default Hero