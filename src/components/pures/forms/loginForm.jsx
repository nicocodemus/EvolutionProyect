/***
 * Componente que va a contener el formulario para 
 * autentifar usuarios
 */

import React,{ useState } from 'react';



const LoginForm = () => {

    const initialCredentials={
        user: '',
        password: ''
    }

    const [credential, setCredential] = useState(initialCredentials);

    
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
