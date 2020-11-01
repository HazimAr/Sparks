import React from 'react'
import something from '../Images/placeholder.png'

const AboutUs = () => {
    return (
        <div className='about-div'>

            <div className='home-section'>
                <p className='home-title'>About Us</p>
                <hr />
                <p className='home-paragraph'>
                    Champion athletes aren’t just born - they’re selected, trained, molded and tested. We hone raw talent to maturity with quality coaching, primal workouts and a true love of the sport. Teamwork, perseverance, sportsmanship - those are the hallmarks of Sparks VBC LV / SVBC LV.
                    <br />
                    Sparks Volleyball Club is committed to providing an excellent volleyball experience that promotes hard work, great attitudes, a genuine respect for the game, a “TEAM” concept at all times, and leadership development for each athlete. SVBC will provide the maximum opportunity for each athlete to train and compete at their highest level.
                    <br />
                    No more hoping for the “good coach” or following coaches from club to club.
                </p>
            </div>
            <img src={something} alt='' style={{ marginLeft: '5%' }} className='about-image' />
            <img src={something} alt='' className='about-horizon' />

        </div>
    )
}
export default AboutUs;