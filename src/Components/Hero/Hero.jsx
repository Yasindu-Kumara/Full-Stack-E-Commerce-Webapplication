import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png'
import hero_imag from '../Assets/hero_image.png';

export const Hero = () => {
  return (
      <div className='hero'>
      <div class="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div class="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt=""/>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div class="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow_icon} alt=""/>
        </div>
      </div>
      <div class="hero-right">
        <img src={hero_imag} alt=""/>
      </div>
    </div>
  )
}
