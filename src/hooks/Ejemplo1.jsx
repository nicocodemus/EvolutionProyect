/*
*ejemplo de uso del Hook useState
*crear un componente de tipo funcion y aceder a su estado privado a traves de un hook y, ademas,
poder modificarlo
*/

import React,{useState} from 'react';



const Ejemplo1 = () => {

    //valor inciial para contador
    const valorInicial = 0 ;

    //valor incial para una persona

    const personaInicial={
        nombre: 'martin',
        email:'martin@correo.com'
    }

    /***
     * qeuremos que el valorinciar y ersnainicial sean parted del estado 
     * del componente para asi poder gestionar
     * su cambio y que este se vea reflejado en la vista del componente.
     * 
     * const[nombreVariable, funcionParaCambiar]= useState(valorIncial)
     */

    const [Contador, setContador] = useState(valorInicial);
    const [Persona, setPersona] = useState(personaInicial);

    /**
     * funcion para actualizar el estado privado que contiene el contador
     */

    function incrementarContador(){
        // ?funcionparaCAmbiar(nuevoValor)
        setContador(Contador+1);
    }

    /**
     * funcion para actualizar los datos del apersona
     */
    function actualizarPersona(){

        setPersona({
            nombre:'nicolas',
            email:'nicolas@correo.com'
        })

    }

    return (
        <div>
            <h1>***Ejemplo de useState()***</h1>
            <h2>contador: {Contador}</h2>
            <h2>datos dela persona : </h2>
            <h3>nombre: { Persona.nombre} </h3>
            <h3>email: {Persona.email} </h3>
            {/**bloque de botones pra actualizar el estado */}
            <button onClick={incrementarContador}>
                incrementar contador
            </button>
            <button onClick={actualizarPersona}>actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
