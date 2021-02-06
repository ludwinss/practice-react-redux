import React from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import style from '../../themes/buscarPokemonStyle';

import {useDispatch} from 'react-redux';
import fetchPokemon from '../../actions/buscarPokemon.actions';

const useStyles=makeStyles(style)
function BuscarPokemon(){
  const dispatch=useDispatch();
  const classes=useStyles();
  const [pokemon_name,set_pokemon_name]=React.useState('mewtwo');
  return(
    <div className={classes.root}>
      <TextField 
        id='buscar_pokemon'
        label='Buscar'
        placeholder={ pokemon_name }
        onChange={(e)=>{
          set_pokemon_name(e.target.value)
        }}
      />
      <Button 
        color='primary' 
        className={classes.button}
        onClick={()=>{
          dispatch(fetchPokemon(pokemon_name))
        }}
        variant='contained'>Enviar</Button>
    </div>
  );
}
export default BuscarPokemon;
