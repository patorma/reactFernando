import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

  const [counter,setCounter] = useState(value);// retorna un arreglo

  //handleAdd
  const handleAdd = () => {
      
      setCounter( counter + 1);
      //segunda manera de manejar el el setCounter en caso de no tener acceso al
      // counter
      //setCounter((c) => c + 1 )
  };

  const hadleReset = () =>{
      setCounter( value)
  }

  const hadleSubstruct = ()=>{
      setCounter( counter - 1);
  }


  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={hadleReset}>Reset</button>
      <button onClick={hadleSubstruct}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
export default CounterApp;
