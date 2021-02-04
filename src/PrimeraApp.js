import React from 'react';
//FC

const PrimeraApp = ({saludo = "Hola Mundo"}) =>{

    

    

    return ( // se regresa un objeto,3 es el espacio y null el remplace
      <>  
      <h1>{ saludo }</h1>
      {/* <pre>{ JSON.stringify(saludo, null,3) }</pre> */}
      <p>Mi primera aplicación</p>
      </>
    )
   
}

export default PrimeraApp;