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
    const [userSubject, setUserSubject] = useState('')

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
        setUserSubject('')
    }
    const inValid = () => { // notify user message is inValid
        setErrorMessage('Please fill in all required fields')
    }
    const handleSubmit = function (e) {
        e.preventDefault()
        if (validateEmail(userEmail) && userMessage !== '' && userName !== '' && userPhone !== '' && userSubject !== '') {
            emailjs.send(config.SERVICE, config.TEMPLATE, {
                userEmail: userEmail,
                userMessage: userMessage,
                userName: userName,
                userPhone: userPhone,
                userSubject: userSubject,

            });
            messageSent()
        } else {
            inValid()
        }
    }

    return (
        <div>
            <p className='page-title' style={{ paddingTop: '100px' }}>Contact Us</p>
            <a className='contact-links' href="mailto:SparksVolleyBallClub@gmail.com">SparksVolleyBallClub@gmail.com</a>
            <p />
            <a className='contact-links' href="tel:7025029462">(702) 502-9462</a>
            <p>N. Las Vegas, NV 89032</p>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='contact-column'>
                    <p className='label'>Name *</p>
                    <input type="text" placeholder="Name" onChange={(e) => setUserName(e.target.value)} value={userName} />

                    <p className='label'>Email *</p>
                    <input type="text" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                </div>
                <div className='contact-column'>
                    <p className='labelRight'>Phone Number *</p>
                    <input type="text" id='rightColInput' placeholder="111-111-1111" onChange={(e) => setUserPhone(e.target.value)} value={userPhone} />

                    <p className='labelRight'>Subject *</p>
                    <input type="text" id='rightColInput' placeholder="Subject" onChange={(e) => setUserSubject(e.target.value)} value={userSubject} />
                </div>
                <p className='label' id='messageLabel'>Message *</p>
                <textarea type="text" placeholder="Message" onChange={(e) => setUserMessage(e.target.value)} value={userMessage} style={{ height: '200px' }} />
                <input type="submit" value="SUBMIT" />
                <p>{errorMessage}<br /></p>
            </form>
        </div>
    )
}
export default Contact;