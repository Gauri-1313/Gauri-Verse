import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {

  useEffect(() => {
    if (window.UnicornStudio) {
      window.UnicornStudio.init({
        selector: "[data-us-project]",
        scale:1,
        dpi:1,
      });
    }
  }, []);

  return (
    <div className='hero' id='hero'>

      {/* 🌌 Unicorn Background */}
      <div
        data-us-project="MHZD2ibMPWdKu1bi4DCk"
        className="unicorn-bg"
      ></div>

      <div className='content'>

        <div className="hero-left">
          <h1>
            Hi! I'm <span>Gauri</span>
          </h1>

          <div className='buttn'>
            <a href='#contact' className='primary'>Contact</a>
            <a href='#about' className='secondary'>Who I'm</a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;