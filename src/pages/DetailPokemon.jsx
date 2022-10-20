import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';
import Type from '../components/Type';
import { GrCaretPrevious } from 'react-icons/gr';

function DetailPokemon() {
  const params = useParams();
  const { id } = params;
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const detail = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(detail.data);
    } catch {}
  };

  function skill(moves) {
    let move = [];
    for (let index = 0; index < moves?.length && index < 18; index++) {
      move.push(moves[index]);
    }
    return move;
  }

  const skills = skill(pokemon?.moves);

  const handleClickBack = () => {
    navigate('/');
  };

  return (
    <div className='bg-sky-400 h-screen'>
      <div className='w-2/3 mx-auto'>
        <Navbar />
        <GrCaretPrevious
          size='3rem'
          onClick={handleClickBack}
          className={`fixed top-1/2 left-20 cursor-pointer`}
        />
        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-yellow-500 h-96 border-4 border-blue-600 px-6'>
            <img
              src={pokemon?.sprites?.front_default}
              alt='pokemon'
              className='mx-auto'
              style={{ width: 230, height: 230 }}
            />
            <div className='mb-2 text-center w-full'>{pokemon?.name}</div>
            <div className='flex justify-evenly'>
              {pokemon?.types?.map((element) => {
                return <Type key={element.slot} element={element.type} />;
              })}
            </div>
          </div>
          <div className='bg-yellow-500 h-96 border-4 border-blue-600 p-6'>
            {pokemon?.stats?.map((att, idx) => {
              return (
                <Stats key={idx} name={att.stat.name} stat={att.base_stat} />
              );
            })}
          </div>
          <div className='bg-yellow-500 h-96 border-4 border-blue-600 p-6'>
            <div className='text-center py-3'>Detail</div>
            <div className='mb-1'>Name : {pokemon?.name} </div>
            <div className='mb-1'>
              Type :
              {pokemon?.types
                ?.map((element) => {
                  return element.type.name;
                })
                .join(' and ')}
            </div>
            <div className='mb-1'>Heigt : {pokemon?.height} </div>
            <div className='mb-1'>Weight : {pokemon?.weight} </div>
            <div className='mb-1'>
              Ability :
              {pokemon?.abilities
                ?.map((ability) => {
                  return ability.ability.name;
                })
                .join(', ')}
            </div>
          </div>
          <div className='bg-yellow-500 h-96 border-4 border-blue-600 p-6'>
            <div className='text-center py-3'>Skill</div>
            <div className='grid grid-cols-2 gap-2 ml-10 '>
              {skills?.map((moves, idx) => {
                return <span key={idx}>{moves.move.name}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPokemon;
