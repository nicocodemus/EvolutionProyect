/***
 * ejemplo de uso del metodo
 * de clicolo de vida en pononente clase y el hook de cilo de vida en componenete
 * funcional
 */

import React, { Component,useEffect } from 'react'

export default class DidMoount extends Component {

    componentDidMount(){
        console.log('comportamiento antes de que el componente sea añadido al DOM (rederice)')
    }
  render() {
    return (
      <div>
        <h1>DidMoount</h1>      
      </div>
    )
  }
}


export const DidMoountHook = () => {

    useEffect(() => {
        console.log('comportamiento antes de que el componente sea añadido al DOM (rederice)')
        
    }, []);

    return (
        <div>
        <h1>DidMoount</h1>      
      </div>
    );
}



