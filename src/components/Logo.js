import React from 'react';
import mastercardLogo from '../Mastercard Symbol.png';

const Logo = () => {
  return (
    <div className="fixed-logo">
      <img src={mastercardLogo} alt="Mastercard Logo" />
    </div>
  );
};

export default Logo;
