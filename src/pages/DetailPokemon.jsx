import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';

function DetailPokemon() {
  const params = useParams();
  const { id } = params;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const detail = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(detail.data);
    } catch {}
  };

  // {pokemon.stats.map((att) => {
  //   <Stats key={att} name={att.stat.name} stat={att.base_stat} />;
  // })}

  return (
    <div className='bg-sky-400 h-screen'>
      <div className='w-2/3 mx-auto'>
        <Navbar />
        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-slate-400 h-96 border-2 border-white p-6'></div>
          <div className='bg-slate-400 h-96 border-2 border-white p-6'>
            {pokemon?.stats?.map((att) => {
              return (
                <Stats key={att} name={att.stat.name} stat={att.base_stat} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPokemon;
