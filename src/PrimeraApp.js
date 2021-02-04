import React from 'react';
import PropTypes from 'prop-types';
//FC
// si alguien quiere usar este componente debe enviar saludo
const PrimeraApp = ({saludo}) =>{

    // if(!saludo){
      //se mande mensaje de error
    //   throw new Error('El saludo es necesario');
    // }

    

    return ( // se regresa un objeto,3 es el espacio y null el remplace
      <>  
      <h1>{ saludo }</h1>
      {/* <pre>{ JSON.stringify(saludo, null,3) }</pre> */}
      <p>Mi primera aplicación</p>
      </>
    )
   
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;