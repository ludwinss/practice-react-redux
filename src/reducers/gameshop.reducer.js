import {BUY_POKEMON,RETURN_POKEMON} from '../constants/';

const default_gameshop={
  pokemon:30
}

const gameshop=(state=default_gameshop,action)=>{
  switch(action.type){
    case(BUY_POKEMON):{
      return {
        ...state,
        pokemon:state.pokemon-action.payload
      }
    }
    case RETURN_POKEMON:{
      return {
        ...state,
        pokemon:state.pokemon+action.payload
      }
    }
    default: return state;
  }
}

export default gameshop;
