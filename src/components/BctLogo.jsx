import bctNetworksLogo from '../assets/bct-networks-logo.jpeg';

export const BctLogo = ({ className = '' }) => {
  return (
    <div className={`inline-flex rounded-md bg-white p-1 ${className}`}>
      <img
        src={bctNetworksLogo}
        alt="BCT Networks"
        className="h-11 w-auto object-contain sm:h-12"
      />
    </div>
  );
};

export default BctLogo;
