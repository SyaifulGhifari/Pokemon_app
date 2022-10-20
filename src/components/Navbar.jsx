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
  window.addEventListener('scr oll', changeColor);

  console.log(window.scrollY);

  return (
    <div
      className={`mb-4 z-30 h-20 w-full lg:sticky transition-all duration-200 flex items-center top-0 ${
        color
          ? 'xl:justify-start xl:pl-10 xl:bg-transparent xl:backdrop-blur-0 xl:border-none'
          : 'justify-center'
      }`}
    >
      <img
        onClick={handleNavigate}
        src='/logo.png'
        alt='logo pokemon'
        className={`cursor-pointer ${color ? '' : ''}`}
        style={{ width: 250, height: 100 }}
      />
    </div>
  );
}

export default Navbar;
