/**
 * Ejemplo de uso del metodo componenWillUnmoint para componente 
 * clase y ejempplo de usode Hooks para componente funcional
 * (cuando el componenete va adesaparecer)
 */

import React, { Component,useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('comportamiento antes de que el componente desaparezca')
    }
    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        );
    }
}



export const WillUnmountHook = () => {

    useEffect(() => {
      // aqui no ponemos nada
    
      return () => {
        console.log('comportamiento antes de que el componente desaparezca');
      }
    }, [])
    
    return (
        <div>
            
        </div>
    );
}

export default WillUnmount;
