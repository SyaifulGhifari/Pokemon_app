import React from 'react';

function Type({ element }) {
  return (
    <div className='flex justify-center my-1'>
      <img
        style={{ width: 85, height: 85 }}
        src={`/${element?.name}.png`}
        alt='element pokemon'
      />
    </div>
  );
}

export default Type;
