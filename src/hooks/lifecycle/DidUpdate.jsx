/***
 * Ejemplo de uso de metodo component DidUpdate en componente clase 
 * y uso de hook en componente funcional
 */

import React, { Component,useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('comportamiento cuando el componente recibe neuvos props o cambio en su estado')
    }
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}




export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('comportamiento cuando el componente recibe neuvos props o cambio en su estado')
        
    });
    return (
        <div>
            <h1>
                DidUpdate
            </h1>
        </div>
    );
}

export default DidUpdate;

