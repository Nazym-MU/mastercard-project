import React, { useState, useEffect } from 'react';
import '../App.css'

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageStyle = {
    transform: `scale(${1 + scrollY * 0.0006}) rotate(${scrollY * 0.05}deg)`,
  };

  return (
    <section id="intro" className="intro-section">
      <div className="left-content">
        <h1 className="title markformc-font-heavy">AI Solutions for Banks</h1>
        <h2 className="subtitle markformc-font-light">Assess your bank's AI adoption and receive tailored recommendations for advancement</h2>
      </div>
      <div className="right-content">
        <div className="image-container">
          <div className="circle-background"></div>
          <img 
            src="/intro-bg.png" 
            alt="AI Banking Solutions" 
            className="main-image" 
            style={imageStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;