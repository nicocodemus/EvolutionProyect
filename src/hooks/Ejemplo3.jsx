/**
 * ejemplo hooks:
 * useState()
 * -useContesxt()
 */

import React,{useState,useContext} from 'react';


    /**
     * @returns componenten1
     * dispone d eun contexto que va a tener un valor que recibe desde el padre
     */
const miContexto= React.createContext(null)


const Componente1 = () => {

    //inicializamos un estado vacio que va a rellenarse con los
    //datos del contexto del padre
    
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                el token es: {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state= useContext(miContexto);

    return (
        <div>
            <h2>
                la sesion es: {state.sesion}
            </h2>
        </div>
    );
}



export default function MiComponenteConContexto() {

    const estadoInicial={
        token:'1234567',
        sesion: 1
    }

    //crear estado del componente

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData ({
            token:'asdjfknmd',
            sesion:sessionData.sesion + 1
        });
    }


  return (
    <miContexto.Provider value={sessionData}>
        {/**todo lo que este aqui adentro jpuede leer los dato sde sesion data ademas de actualizarse */}

        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actulizar sesion</button>
    </miContexto.Provider>
  )
}
