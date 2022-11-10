/**
 * ejemplo de uso de :
 * useState()
 * useRef()// identificar valores , referenciarlos
 * useEffect()//cambio en la vista
 */

import React,{useState,useRef,useEffect} from 'react';

const Ejemplo2 = () => {

    //vamos a crear dos contadores
    //cada uno en un stado diferente

    const [Contador1, setContador1] = useState(0);
    const [Contador2, setContador2] = useState(0);

    //vamos a crear una referencia con useRef para asociar unava
    //variable con un elelmento dle DOM del componente (vista html)

    const miRef = useRef();

    function incrementar1(){

        setContador1(Contador1+1);

    }

    function incrementar2(){
        setContador2(Contador2+1);
    }

    /***
     * trabajando con useEffect
     */
    /**
     * ? caso 1 : ejecutar siempre un snippet de codigo
     * cada vez que haya un cambio en el stado del componente se ejecuta aquello que este dentro del
     * useEffect
     */

   /* useEffect(() => {
        
        console.log('cambio enel estado dle componente');
        console.log('mostrando referencia a el elemento del DOM');
        console.log(miRef);
    })*/


    /***
     * ? caso 2: ejecutar solo en algunos casos: CONTADOR1
     * 
     * cada vez que se ejecute el contador 1
     * cuando se ejecute el contador 2 no funcionara
     */

   /* useEffect(() => {
        console.log('cambio enel estado del contador 1');
        console.log('mostrando referencia a el elemento del DOM');
        console.log(miRef);
    },[Contador1]);
    */

    /***
     * ? caso 3: ejecutar solo cuando cambie CONTADOR1 O CONTADOR2
     * 
     * cada vez que se ejecute el contador 1 o el contador 2
     * 
     */

   useEffect(() => {
        console.log('cambio enel estado del contador 1 o el 2');
        console.log('mostrando referencia a el elemento del DOM');
        console.log(miRef);
    },[Contador1,Contador2]);
    

    return (
        <div>
            <h1>***Ejemplo de useState(), useRef(),useEffect()***</h1>
            <h2>CONTADOR 1:{Contador1} </h2>
            <h2>CONTADOR 2:{Contador2} </h2>
            {/**elemento referenciado */}

            <h4 ref={miRef}>
                ejemplo de elemento referenciado
            </h4>

            {/**botonoes cambio de contadores */}
            <button onClick={incrementar1}>Incrementar 1:</button>
            <button onClick={incrementar2}>Incrementar 2:</button>
            
        </div>
    );
}

export default Ejemplo2;
