import React from 'react';
import {useSelector} from 'react-redux';

const CantidadPokemonHook=()=>{
  const gameshop=useSelector((state)=>state.gameshop)
  return (
      <>
        <h3>UNIDADES:{gameshop.pokemon}</h3>
      </>
  );
}

export default CantidadPokemonHook;
