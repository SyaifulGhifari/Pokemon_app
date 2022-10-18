import React from 'react';
import { useParams } from 'react-router-dom';

function DetailPokemon() {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <div>DetailPokemon</div>
      {id}
    </div>
  );
}

export default DetailPokemon;
