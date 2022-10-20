import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PokeCard from '../components/PokeCard';
import axios from 'axios';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [details, setDetails] = useState([]);
  const [page, setPage] = useState(0);
  const [pageBack, setPageBack] = useState(false);

  useEffect(() => {
    fetchData();
    back();
  }, [page]);

  const fetchData = async () => {
    try {
      const pokemons = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`
      );
      setPokemons(pokemons.data);
      const res_details = await Promise.all(
        pokemons.data.results.map(async (pokemon) => {
          const detail_pokemon = await axios.get(pokemon.url);
          return detail_pokemon.data;
        })
      );
      setDetails(res_details);
    } catch (error) {
      alert(error.toStirng());
    }
  };

  const handleClickNext = () => {
    const newPage = page + 20;
    setPage(newPage);
    setPageBack(true);
  };
  const handleClickPrevious = () => {
    if (page >= 20) {
      const newPage = page - 20;
      setPage(newPage);
    }
  };

  const back = () => {
    if (page >= 20) {
      setPageBack(true);
    } else setPageBack(false);
  };
  return (
    <div className='bg-sky-400 '>
      <Navbar />
      {pageBack ? (
        <GrCaretPrevious
          onClick={handleClickPrevious}
          size='3rem'
          className={`fixed z-30 top-1/2 left-1 md:left-12 lg:left-20 xl:left-24 cursor-pointer`}
        />
      ) : (
        ''
      )}

      <GrCaretNext
        onClick={handleClickNext}
        size='3rem'
        className='fixed z-30 top-1/2 right-1 md:right-12 lg:right-20 xl:right-24 cursor-pointer'
      />
      <div className='w-2/3 lg:w-4/5 mx-auto'>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {details.map((pokemon) => {
            return (
              <PokeCard
                key={pokemon.id}
                name={pokemon.name}
                img={pokemon.sprites}
                id={pokemon.id}
                types={pokemon.types}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
