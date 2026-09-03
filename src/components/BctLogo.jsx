import React from 'react';
import bctNetworksLogo from '../assets/bct-networks-logo.jpeg';
import { useTheme } from '../context/ThemeContext';

const BctLogo = ({ className = '' }) => {
  const { theme } = useTheme();

  return (
    <img
      src={bctNetworksLogo}
      alt="BCT Networks"
      className={`h-11 md:h-12 w-auto object-contain rounded-lg ${className}`}
      style={{
        mixBlendMode: theme === 'dark' ? 'lighten' : 'multiply',
        filter: theme === 'dark' ? 'contrast(1.15) brightness(1.15)' : 'contrast(1.05)',
      }}
    />
  );
};

export default BctLogo;
