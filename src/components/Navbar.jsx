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

  return (
    <div
      className={`mb-4 z-30 h-20 w-full sticky flex items-center  top-0 ${
        color ? 'justify-start' : 'justify-center'
      }`}
    >
      <img
        onClick={handleNavigate}
        src='/logo.png'
        alt='logo pokemon'
        className={`cursor-pointer ${color ? 'ml-12' : ''}`}
        style={{ width: 250, height: 100 }}
      />
    </div>
  );
}

export default Navbar;
