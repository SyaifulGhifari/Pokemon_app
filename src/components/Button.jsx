import React from 'react';

function Button() {
  return (
    <div className='flex justify-center'>
      <button
        type='button'
        className='py-1 px-3 mr-2 mb-2 text-xs font-arcade text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
      >
        Detail
      </button>
    </div>
  );
}

export default Button;
