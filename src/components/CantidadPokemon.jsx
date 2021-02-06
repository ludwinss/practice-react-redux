import React from 'react';
import {connect} from 'react-redux';

class CantidadPokemon extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
        <h3>UNIDADES:{ this.props.gameshop.pokemon }</h3>
      </>
    )
  }
};

const mapState=(state)=>{
  return{
    gameshop:state.gameshop
  }
}
export default connect (mapState) ( CantidadPokemon );
