import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact_class';


const BContact = ({contact}) => {

    const changeStatus = ()=>{
        {/*pendiente por desarrollar*/}
    }
    return (
        <div>
            <h2>
                el usuario  { contact.nombre } esta :{ contact.conectado===true ? 'En linea': 'No Disponible'}
            </h2>
        </div>
    );
};


BContact.propTypes = {

    contact : PropTypes.instanceOf(Contact)

};


export default BContact;
