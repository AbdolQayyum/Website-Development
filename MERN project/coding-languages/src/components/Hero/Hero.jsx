import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side hero */}
        <div className="hero-left">
          <div className="hero-title">
            <div className='orange-circle' />
            <h1>
              Anytime Anywhere <br /> Learn on Your <br /> Suitable Schedule
            </h1>
            <div className='flexColStart hero-span'>
              <span className='Secondary'>Coding is not just a skill; it's a mindset. Discover the problem-solving magic of programming.</span>
              <span>Tailor your learning experience based on your interests and career goals.</span>
            </div>
            <div className=' search-bar'>
              <input type="text" />
              <button className='button'>Search</button>
            </div>
          </div>
        </div>

        {/* right side hero */}
        <div className='flexCenter hero-right'>
          <div className='Image-container'>
            <img src="./image1.jpg" alt=" " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
