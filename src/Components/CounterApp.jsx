import { useState } from "react";

function CounterApp({nombre, numero, funcion}){
    
    console.log(numero, "Desde componente CounterApp")

    return(
        <>
        <h1>Hola, {nombre}</h1>
            <div>Contador: {numero}</div>
            <button onClick={() => funcion(numero + 1)}>Incrementar</button>
        </>
    )
}

export default CounterApp;