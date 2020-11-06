import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { config } from '../config'

init("user_dkvZZk4wFtUR8WzHQlJGa");

const Contact = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('')

    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('')

    const [errorMessage, setErrorMessage] = useState(' ')

    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    function validateEmail(email) {
        return re.test(email)
    }

    const messageSent = () => { // notify user message was sent sucessfully
        setErrorMessage('Message Sucessfully sent')
        setUserEmail('')
        setUserName('')
        setUserPhone('')
        setUserMessage('')
    }
    const inValid = () => { // notify user message is inValid
        setErrorMessage('Please fill in all required fields')
    }
    const handleSubmit = function (e) {
        e.preventDefault()
        if (validateEmail(userEmail) && userMessage !== '' && userName !== '' && userPhone !== '') {
            emailjs.send(config.SERVICE, config.TEMPLATE, {
                userEmail: userEmail,
                userMessage: userMessage,
                userName: userName,
                userPhone: userPhone,
            });
            messageSent()
        } else {
            inValid()
        }
    }

    return (
        <div>
            <p className='page-title' style={{ paddingTop: '100px' }}>Contact Us</p>
            <form className='contact-form' onSubmit={handleSubmit}>

                <p className='label'>Name *</p>
                <input type="text" placeholder="Name" onChange={(e) => setUserName(e.target.value)} value={userName} />

                <p className='label'>Email *</p>
                <input type="text" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />

                <p className='label'>Phone Number *</p>
                <input type="text" placeholder="111-111-1111" onChange={(e) => setUserPhone(e.target.value)} value={userPhone} />

                <p className='label'>Message *</p>
                <textarea type="text" placeholder="Message" onChange={(e) => setUserMessage(e.target.value)} value={userMessage} style={{ height: '200px' }} />
                <input type="submit" value="SUBMIT" />
                <p>{errorMessage}<br /></p>
            </form>
        </div>
    )
}
export default Contact;