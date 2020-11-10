import React from 'react'
import photo1 from '../Images/8-22-2_Tourney-08.jpg'
import photo2 from '../Images/8-22-2_Tourney-31.jpg'

function RegisterComp() {

    return (
        <div className='about-register-div'>
            <div className='about-register-card'>
                <img src={photo1} className='about-register-img' alt='' />
                <div>
                    <p className='about-register-title'>Register</p>
                    <p className='about-register-text'>Champion athletes aren’t just born - they’re selected, trained, molded and tested. We hone raw talent to maturity with quality coaching, primal workouts and a true love of the sport. Teamwork, perseverance, sportsmanship - those are the hallmarks of Sparks VBC LV / SVBC LV.
                    <br /><br />
                    Sparks Volleyball Club is committed to providing an excellent volleyball experience that promotes hard work, great attitudes, a genuine respect for the game, a “TEAM” concept at all times, and leadership development for each athlete. SVBC will provide the maximum opportunity for each athlete to train and compete at their highest level.
                    <br /><br />
                    No more hoping for the “good coach” or following coaches from club to club.</p>
                    <p className='home-button'>Register Now!</p>

                </div>
            </div>
        </div>
    )
}

const AboutUs = () => {
    return (
        <div>
            <div className='about-div'>
                <p className='page-title'>About Us</p>
                <div className='about-text-div'>
                    <p className='about-p'>Champion athletes aren’t just born - they’re selected, trained, molded and tested. We hone raw talent to maturity with quality coaching, primal workouts and a true love of the sport. Teamwork, perseverance, sportsmanship - those are the hallmarks of Sparks VBC LV / SVBC LV.</p>
                    <p className='about-p'>Sparks Volleyball Club is committed to providing an excellent volleyball experience that promotes hard work, great attitudes, a genuine respect for the game, a “TEAM” concept at all times, and leadership development for each athlete. SVBC will provide the maximum opportunity for each athlete to train and compete at their highest level. No more hoping for the “good coach” or following coaches from club to club.</p>
                </div>
                <img alt='' src={photo2} className='about-vert' />
            </div>
            <RegisterComp />
        </div>
    )
}
export default AboutUs;