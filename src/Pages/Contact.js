import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { config } from '../config'

init("user_dkvZZk4wFtUR8WzHQlJGa");




const Contact = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('')

    const [errorMessage, setErrorMessage] = useState(' ')

    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    function validateEmail(email) {
        return re.test(email)
    }

    const messageSent = () => { // notify user message was sent sucessfully
        //TODO
        setUserEmail('')
        setUserMessage('')
    }
    const inValid = () => { // notify user message is inValid
        //TODO
    }

    const handleSubmit = function (e) {
        e.preventDefault()
        if (validateEmail(userEmail) && userMessage !== '') {
            emailjs.send(config.SERVICE, config.TEMPLATE, {
                userEmail: userEmail,
                userMessage: userMessage,
            });
            messageSent()
        } else {
            inValid()
        }
    }
    return (
        <div>
            <p className='page-title'>Sparks Volleyball Club</p>
            <p className='page-text'>Contact Us</p>
            <form className='contact-form' onSubmit={handleSubmit}>
                <p style={{ textAlign: 'left' }}>Email *</p>
                <input type="text" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                <p style={{ textAlign: 'left' }}>Message *</p>
                <textarea type="text" placeholder="Message" onChange={(e) => setUserMessage(e.target.value)} value={userMessage} style={{ height: '100px' }} />
                <input type="submit" value="SUBMIT" />
                <p>{errorMessage}</p>
            </form>
        </div>
    )
}
export default Contact;