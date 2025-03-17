import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="az-logo flex justify-center items-center">
      <img 
        src="/az_suite_logo.webp" 
        alt="AZ Suite Logo" 
        className="h-10 w-auto" 
      />
    </div>
  );
};

export default Logo;
