import React from 'react'
import graph from '../../Images/barGraph.svg'
import sky from '../../Images/down.svg'
import trendingUp from '../../Images/trendingUp.svg'
import { NavLink } from 'react-router-dom'
import TeamLogo from '../../Images/Sparks/TourneyImage.jpg'
function Register() {
    return (
        <div className='register-outside-div'>
            <div className='register-inside-div' id='register'>
                <div className='register-text-div' id='register-text'>
                    <p className='section-title' style={{ padding: '0', marginBottom: '0' }}>Join our team<br />Spark your revolution.</p>
                    <br /><br />
                    <NavLink onClick={function () { window.scroll(0, 0) }} to='/register' id='register-button' className='intro-button'>Register Now</NavLink>
                </div>
                <img id='register-img' className="register-img" src={TeamLogo} alt="" />
            </div>
        </div>
    )
}
function Faq() {
    function FaqSection(props) {
        return (
            <div className='faq-section' key={props.id} id={props.id}>
                <img className='faq-img' alt='' src={props.image} />
                <h3 className='faq-title'>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        )
    }
    return (
        <div className='faq-div' id='faq'>
            <h2 className='section-title'>Frequently Asked Questions</h2>
            <FaqSection
                id='faq-left'
                image={sky}
                title='What sets Sparks apart from other teams?'
                text='Sparks Volley Ball Club was founded on the core belief of teaching life lessons through the sport of volleyball. We have some of the most experienced and sought after coaches in the region. Our state of the art 17,000 square foot facility is equipped with the latest volleyball training equipment' />
            <FaqSection
                id='faq-middle'
                image={graph}
                title='When and Where are practices?'
                text='We practice at the Nevada Volleyball Center - 3778 W. Cheyenne Ave #120 N. Las Vegas, NV 89032. Days and times will vary.' />
            <FaqSection
                id='faq-right'
                image={trendingUp}
                title='What do club fees cover?'
                text='Club fees cover everything you will need to be successful, including but not limited to education, certifications, uniforms, practices, tournaments, specialty training, administrative costs, travel transportation, and lodging.' />
        </div>
    )
}
export default function Main() {
    return [
        <Register />,
        <Faq />
    ]
}

// Cyborg is kinda gay not gonna lie bitch