import React from 'react';
import {Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';

import styles from '../themes/cantidadPokemonStyles';
import {
  buy_pokemon_action,
  return_pokemon_action
} from '../actions/pokemon.actions';

const useStyles=makeStyles(styles);

function CompraPokemon(props){
  const classes=useStyles();
  return (
    <div>
      <button 
        variant='contained'
        size='large'
        color={'primary'}
        classname={classes.button}
        onclick={()=>{ props.buy_pokemon_action(1) }}
      >compra pokemon</button>
      <button 
        variant='contained'
        size='large'
        color={'primary'}
        classname={classes.button}
        onclick={()=>props.return_pokemon_action(1)}
      >regresar pokemon</button>

    </div>
  )
}
const mapActionToPokemon={
  buy_pokemon_action,
  return_pokemon_action
}
export default  connect (null,mapActionToPokemon) ( CompraPokemon );
