import React from 'react';
import { Contact } from '../../models/contact_class';
import BContact from '../pures/b.Contact';

const AContact = () => {

    const defaultContact = new Contact('predro','ramirez','correo@default.com',true)
    return (
        <div>
            <BContact contact={ defaultContact}></BContact>
        </div>
    );
}

export default AContact;

