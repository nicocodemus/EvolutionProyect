/**
 * Ejemplo de compoenente de tipo clase que dispone de los 
 * metodos de ciclo de vida
 */

import React,{ Component } from "react";
class LifeCycleExample  extends Component {
    constructor(props) {
        super(props);
        console.log('cuando se instancia el componente')
    }
    

    componentDidMount(){
        console.log('didmount: justa al del montaje del componente, antes de renderizarlo');
    }

    componentWillReceiveProps(){
        console.log('willReceipePorps: si va a recibir neuvas props')
    }

    shouldComponentUpdate(){
        /**
         * controlar si el compoonnete debe o no actualizarse
         */
        //return true
    }
    componentWillUnmount(){

        console.log('willunmount: justo antes de desaparecer ')
    }
    state = {  }
    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 
export default LifeCycleExample ;