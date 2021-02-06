import React from 'react';
import {useDispatch} from 'react-redux';
import {
  buy_pokemon_action,
  return_pokemon_action
} from '../actions/pokemon.actions';

import {makeStyles} from '@material-ui/core/styles';
import styles from '../themes/cantidadPokemonStyles';
import {
  Button
} from '@material-ui/core';

const useStyles=makeStyles(styles);
function CompraPokemonHook(){
  const dispatch=useDispatch();
  const classes=useStyles();
  return (
    <div>
      <Button 
        variant='contained'
        size='large'
        color={'primary'}
        className={classes.button}
        onClick={()=>{dispatch(buy_pokemon_action(1))}}
      >compra pokemon</Button>
      <Button 
        variant='contained'
        size='large'
        color={'primary'}
        className={classes.button}
        onClick={()=> { dispatch(return_pokemon_action(1) )}}
      >regresar pokemon</Button>
    </div>
  );
}
export default CompraPokemonHook;
