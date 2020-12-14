import React from 'react'
import Image from '../../Images/Sparks/8-22-2_Tourney-24.jpg'
export default function Temp() {
    return (
        <div className='regist-div'>
            <p className='section-title' id='register-title'>Register</p>
            <div className='register-form' id='register-form'>
                <iframe id='iframe-register' title=' ' style={{ width: '100%' }} src="https://docs.google.com/forms/d/e/1FAIpQLSea_RocZ91i80gbLWzngi25YOXzX-m3MhWRlIDVIX2F0YEqww/viewform?embedded=true" width="640" height="650" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                <img id='register-form-img' src={Image} alt='' />
            </div>
        </div>
    )
}