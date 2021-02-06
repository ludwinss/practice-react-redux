import {BUY_POKEMON,RETURN_POKEMON} from '../constants/';

export function buy_pokemon_action(cant){
  return ({
    type:BUY_POKEMON,
    payload:cant
  })
}
export function return_pokemon_action(cant){
  return({
    type:RETURN_POKEMON,
    payload:cant
  })
}
