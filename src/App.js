import React from 'react';
import {
  Grid
} from '@material-ui/core';

import CantidadPokemon from './components/CantidadPokemon.hook';
import CompraPokemon from './components/CompraPokemon.hook';
import BuscarPokemon from './components/buscador/BuscarPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';
import {makeStyles} from '@material-ui/core/styles';
import styles from './themes/appStyles';
import rootImg from './img/root.jpg';
import store from './store';
import {Provider} from 'react-redux';

const useStyles=makeStyles(styles);
function App() {
  const classes=useStyles();
  console.log(store.getState())
  return (
    <Provider store={store}>
    <Grid container className={classes.root} >
      <Grid className={classes.gridImg} item xs={4}>
        <img src={rootImg} className={classes.rootImg} alt='root'/>
      </Grid>
      <Grid className={classes.gridContainer} item xs={8}>
        <CantidadPokemon/>
        <CompraPokemon/>
      </Grid>
      <Grid item xs={12} >
        <BuscarPokemon/>
        <ResultadoPokemon/>
      </Grid>
    </Grid>
    </Provider>
  );
}

export default App;
