import React from 'react';
import Navbar from '../components/Navbar';
import PokeCard from '../components/PokeCard';

function Home() {
  const coba = [1, 2, 3, 4, 5];
  return (
    <div className='bg-blue-400'>
      <div className='w-2/3 bg-slate-400 h-screen mx-auto'>
        <Navbar />
        <div className='grid px-10 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {coba.map(() => {
            return <PokeCard />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
