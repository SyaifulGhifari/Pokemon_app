import React from 'react';
import Button from './Button';

function PokeCard() {
  return (
    <div className='flex '>
      <div className='border-8 p-2 justify-center border-orange-600 relative text-white mx-4 my-8 lg:my-6 lg:mx-5'>
        <img src='bug.png' alt='film' className='bg-none drop-shadow-2xl' />
        <div className='font-bold text-center w-full'>nama pokemon</div>
        <Button />
      </div>
    </div>
  );
}

export default PokeCard;
