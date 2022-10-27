import React from 'react';
import Button from './Button';
import Type from './Type';
import { Link } from 'react-router-dom';

function PokeCard({ name, img, types, id }) {
  return (
    <div className='flex '>
      <div className='border-8 w-64 p-2 justify-center border-blue-700 mx-auto bg-orange-300 relative text-black my-8 lg:my-6 lg:mx-5'>
        <Link to={`/detail/${id}`}>
          <img
            src={img.front_default}
            alt='pokemon'
            className='bg-orange-600 mx-auto cursor-pointer'
            style={{ width: 200, height: 200 }}
          />
        </Link>
        <div className='my-2 text-center w-full'>{name}</div>
        <div className='flex justify-evenly'>
          {types.map((element) => {
            return <Type key={element.slot} element={element.type} />;
          })}
        </div>
        <Link to={`/detail/${id}`}>
          <Button />
        </Link>
      </div>
    </div>
  );
}

export default PokeCard;
