import {
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_REQUEST
} from '../constants/'

const initState={
  loading:false,
  pokemon:[],
  error:''
}
const buscador=(state=initState,action)=>{
  switch(action.type){
    default: return state;
    case(FETCH_POKEMON_SUCCESS):
      return ({
        error:'',
        pokemon:action.payload,
        loading:false
      })
    case(FETCH_POKEMON_FAILURE):
      return({
        pokemon:[],
        loading:false,
        error:action.payload
      })
    case(FETCH_POKEMON_REQUEST):
      return({
        ...state,
        loading:true
      })
  }
}
export default buscador;
