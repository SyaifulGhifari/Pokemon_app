
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PokeCard from '../components/PokeCard';
import axios from 'axios';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [details, SetDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const pokemons = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
      );
      setPokemons(pokemons.data);
      const res_details = await Promise.all(
        pokemons.data.results.map(async (pokemon) => {
          const detail_pokemon = await axios.get(pokemon.url);
          return detail_pokemon.data;
        })
      );
      console.log(res_details);
      SetDetails(res_details);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-sky-400'>
      <div className='w-2/3 mx-auto'>
        <Navbar />
        <div className='grid px-10 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {details.map((pokemon) => {
            return <PokeCard key={pokemon.id} {...pokemon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
