import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [color, setColor] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else setColor(false);
  };
  window.addEventListener('scroll', changeColor);

  console.log(window.scrollY);

  return (
    <div
      className={`mb-4 z-30 h-20 w-full lg:sticky transition-all duration-200 flex items-center top-0 ${
        color ? 'xl:justify-start xl:pl-10 lg:pl-5' : 'justify-center'
      }`}
    >
      <img
        onClick={handleNavigate}
        src='/logo.png'
        alt='logo pokemon'
        className={`cursor-pointer ${
          color
            ? 'w-60 h-24 lg:w-36 lg:h-20 xl:w-44 xl:h-20 2xl:w-60 2xl:h-24'
            : 'w-60 h-24'
        }`}
      />
    </div>
  );
}

export default Navbar;
