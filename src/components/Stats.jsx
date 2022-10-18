import React from 'react';

function Stats({ name, stat }) {
  console.log(name);
  // console.log(stat);
  return (
    <div>
      <div>
        <div>{name}</div>
        <div className='w-full h-2 bg-white'>
          <div
            className='h-full bg-blue-800'
            style={{ width: `${stat}%` }}
          ></div>
        </div>
        {stat}
      </div>
    </div>
  );
}

export default Stats;
