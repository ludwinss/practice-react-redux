import Axios from 'axios';
import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE
} from '../constants/'

const fetchPokemonSuccess=(Pokemon)=>{
  return({
    type:FETCH_POKEMON_SUCCESS,
    payload:Pokemon
  })
};

const fetchPokemonFailure=(error)=>{
  return({
    type:FETCH_POKEMON_FAILURE,
    payload:error
  })
}

const fetchPokemonRequest=()=>{
  return({
    type:FETCH_POKEMON_REQUEST
  })
}

const fetchPokemon=(valor)=>{
  return (dispatch=>{
    dispatch(fetchPokemonRequest());
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
      .then(results=>dispatch(fetchPokemonSuccess(results.data)))
      .catch(error=>dispatch(fetchPokemonFailure(error)))
  })
}
export default fetchPokemon;
