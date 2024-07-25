import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zhiyengaliyeva', icon: faLinkedin },
  { name: 'GitHub', url: 'https://github.com/Nazym-MU', icon: faGithub },
  { name: 'Telegram', url: 'https://t.me/zhiyengaliyeva', icon: faTelegram },
  { name: 'Email', url: 'mailto:nazym@uni.minerva.edu', icon: faGoogle }
];

const Acknowledgements = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <section className="acknowledgements" id="acknowledgements">
      <div className="acknowledgements-content">
        <h2>Acknowledgements</h2>
        <div className="thanks-message">
          <p>Thanks Mastercard and AIESEC in Kazakhstan for the opportunity to participate in an internship program.</p>
          <p>Special thanks to the National Payments Corporation for their research.</p>
        </div>
        <div className="credits">
          <div className="credit-item">
            <h3>Researcher and Developer</h3>
            <p>Nazym Zhiyengaliyeva</p>
          </div>
          <div className="credit-item">
            <h3>Mentor</h3>
            <p>Aigerim Garifullina</p>
          </div>
        </div>
        <div className="contact-section">
          <h3>Get in touch</h3>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link ${hoveredLink === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.icon? <FontAwesomeIcon icon={link.icon} /> : link.name}
                <span className="link-underline"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgements;