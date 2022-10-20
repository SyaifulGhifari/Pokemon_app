import React from 'react';

function Button() {
  return (
    <div className='flex justify-center'>
      <button
        type='button'
        className='py-1 px-3 mr-2 mb-2 mt-2 text-xs font-arcade text-gray-900 focus:outline-none bg-orange-600 rounded-full border border-blue-600 hover:bg-orange-500 hover:text-blue-600 focus:z-10 focus:ring-4 focus:ring-blue-600'
      >
        Detail
      </button>
    </div>
  );
}

export default Button;
