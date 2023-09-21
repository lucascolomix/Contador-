import React, { useState} from 'react'

const contador = (props) => {


//hooks
const [cuenta,setCuenta] = useState (props.inicialState);

//funcion 
const contadorMas= () => {
  setCuenta(cuenta +1 );
}

  return (
    <div>
       <h1>Contador </h1>
       <h3>{cuenta}</h3>
       <button className='margenes' onClick={contadorMas}>+1</button>
       <button className='margenes'onClick={() => setCuenta (props.inicialState)}>Resetear</button>
       <button className='margenes' onClick={() => setCuenta(cuenta-1)}>-1</button>
    </div>
  );
};

export default contador;