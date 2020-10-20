import React, { useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


import auth from '../App';
import firestore from '../App';
import sendContact from '../App';

const Contact = () => {

    const [formValue, setFormValue] = useState('');
    const [formValueEmail, setFormValueEmail] = useState('');


    const handleSubmit = function(e) {
        e.preventDefault();
        
        sendContact(formValue, formValueEmail)
        setFormValue('');
        setFormValueEmail('');
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="fname">Email</label>
                <input type="text" placeholder="Email" onChange={(e) => setFormValueEmail(e.target.value)} value={formValueEmail} />

                <label for="lname">Message</label>
                <textarea type="text" placeholder="Message" onChange={(e) => setFormValue(e.target.value)} value={formValue} style={{height:'100px'}} />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default Contact;