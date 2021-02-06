import React from 'react';
import {useSelector} from 'react-redux';

function ResultadoPokemon (){
  const buscador=useSelector(state=>state.buscarPokemon)
  return(
    <>
      <h3>Resultado</h3>
      { buscador.loading &&
        <div>Buscando...
        </div>
      }
      {
      console.log(buscador.pokemon.name)
      }
      {  buscador.pokemon.length!==0 &&
        <div>
          <img src={buscador.pokemon.sprites.front_default} alt='Pokemon'/>
          <span>{buscador.pokemon.name}</span>
        </div>
      }
      { buscador.error!=='' &&
      <span>Error...</span>
      }

    </>
  );
} 

export default ResultadoPokemon;
