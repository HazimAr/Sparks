import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';


import { messagesRef } from '../App'
const Contact = () => {

    function inValid() {
        //TODO show user email is invalid alert is filler
        alert("Email is Invalid")
    }
    function valid() {
        //TODO Shows user message has been sent alert is filler
        alert('Message Sent!')
    }

    const [formValue, setFormValue] = useState('');
    const [formValueEmail, setFormValueEmail] = useState('');
    // eslint-disable-next-line no-useless-escape 
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //  ^ I really don't know how this works

    const handleSubmit = function (e) { // called onSubmit button
        e.preventDefault(); // prevents refresh
        const send = async (value, email) => {

            email = String(email).toLowerCase();

            if (re.test(email) && email !== '') { // if email is valid
                await messagesRef.doc(`${email}`).set({ // sends message to server
                    email: email,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    message: value,
                });
                // resets form values
                setFormValue('');
                setFormValueEmail('');
                valid() // shows user message has sent
            } else { 
                inValid() // tells user email is invalid
            }
        }
        send(formValue, formValueEmail)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="fname">Email</label>
                <input type="text" placeholder="Email" onChange={(e) => setFormValueEmail(e.target.value)} value={formValueEmail} />

                <label for="lname">Message</label>
                <textarea type="text" placeholder="Message" onChange={(e) => setFormValue(e.target.value)} value={formValue} style={{ height: '100px' }} />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default Contact;