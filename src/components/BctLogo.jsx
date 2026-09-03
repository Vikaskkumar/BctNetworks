import React from 'react';
import bctNetworksLogo from '../assets/bct-networks-logo.jpeg';

const BctLogo = ({ className = '' }) => {
  return (
    <img
      src={bctNetworksLogo}
      alt="BCT Networks"
      className={`h-11 md:h-12 w-auto object-contain rounded-lg ${className}`}
      style={{
        mixBlendMode: 'lighten',
        filter: 'contrast(1.15) brightness(1.15)',
      }}
    />
  );
};

export default BctLogo;
