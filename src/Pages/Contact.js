import React, { useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyA4qr1j20J8yjzQO6UhwxNTPDQXR-KZBPk",
    authDomain: "sparks-413c9.firebaseapp.com",
    databaseURL: "https://sparks-413c9.firebaseio.com",
    projectId: "sparks-413c9",
    storageBucket: "sparks-413c9.appspot.com",
    messagingSenderId: "1070946902875",
    appId: "1:1070946902875:web:f9f5cd4c9621080cb7b07e",
    measurementId: "G-PRXVXH5T20"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const Contact = () => {

    const messagesRef = firestore.collection('contactMessages'); // this is the chatroom we set up on firebase
    const [formValue, setFormValue] = useState('');
    const [formValueEmail, setFormValueEmail] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formValueEmail, formValue)
        await messagesRef.add({
            text: formValueEmail,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            message: formValue,
        });
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