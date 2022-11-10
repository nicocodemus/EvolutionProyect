import React,{useState}/*esto es un hook*/ from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {
    //introduccion a useState(es una funcion)

    const [age, setage] = useState(24);

    const birthday =()=>{
        //actualizar el State
        setage(age+1)
    }
    return (
        <div>
            <h1>
                hola {props.name} desde componente funcional
            </h1>
            <h2>
                tu edad es de : {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    cumplir años
                </button>
            </div>
        </div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string,
};


export default Greetingf;
