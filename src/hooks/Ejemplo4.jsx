/**
 * Ejemplo para entedner el uso de prps.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>EJEMPLO DE CHILDREEN PROPS</h1>
            <h2>
                Nombre:{ props.nombre }
            </h2>
            {/**props.children pntara por defecto aquello
            que se encuentere en las etiquieteas de apertura y cierre de
            este componente desde el componente de orden superior */}

            {props.children}
        </div>
    );
}

export default Ejemplo4;
