import React from 'react';

function Stats({ name, stat }) {
  return (
    <div>
      <div>
        <div>{name}</div>
        <div className='w-full h-2 bg-white'>
          <div
            className='h-full bg-blue-800'
            style={{ width: `${stat}%`, maxWidth: '100%' }}
          ></div>
        </div>
        {stat}
      </div>
    </div>
  );
}

export default Stats;
