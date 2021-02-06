import gameshop from './gameshop.reducer';
import buscarPokemon from './buscarPokemon.reducer';

import {combineReducers,applyMiddleware} from 'redux';

const rootReducers=combineReducers({ gameshop ,
  buscarPokemon
});

export default rootReducers;

