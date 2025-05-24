import React from 'react';

interface GokLogoProps {
  className?: string;
}

const GokLogo: React.FC<GokLogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={className}>
      <h1 className="text-3xl font-black tracking-wider">GÖK</h1>
    </div>
  );
};

export default GokLogo;