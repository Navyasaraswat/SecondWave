import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
        <h1>Get exclusive and personalized offers sent to your email! </h1>
        <p>Subscribe now and stay updated!
        </p>
        <div>
            <input type='email' placeholder='Your Email ID'/>
            <button>Subscribe Rightaway</button>
        </div>
    </div>
  )
}

export default NewsLetter