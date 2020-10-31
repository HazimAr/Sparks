import React from 'react'
import { NavLink } from 'react-router-dom';
import Transparent from '../Images/Logos/Transparent-White.gif'
// import placeholder from '../Images/placeholder.png'
import photo from '../Images/photo.png'
const Home = () => {
    return (

        <div>
            <div className='home-animation' />


            <div className='home-div'>
                <img src={Transparent} alt='' className='home-logo' />
                <div className='home-section'>
                    <p className='home-title'>Who Are We?</p>
                    <hr />
                    <p className='home-paragraph'>
                        Sparks Volleyball Club is committed to providing an excellent volleyball experience that promotes

                        hard work, great attitudes, a genuine respect for the game, a “TEAM” concept at all times,

                        and leadership development for each athlete.

                        SVBC will provide the maximum opportunity for each athlete to train and compete at their highest level.
                    </p>
                    <NavLink to='/about' className='home-button'>Learn More</NavLink>
                </div>
            </div>
            <div className='home-div' id='home-dark'>
                <div className='home-section' id='home-dark-section'>
                    <p className='home-title'>Register</p>
                    <hr />
                    <p className='home-paragraph'>
                        Champion athletes aren’t just born - they’re selected, trained, molded and tested. We hone raw talent to maturity with quality coaching, primal workouts and a true love of the sport. Teamwork, perseverance, sportsmanship - those are the hallmarks of Sparks VBC LV / SVBC LV.
                        <br /><br />
                        Sparks Volleyball Club is committed to providing an excellent volleyball experience that promotes hard work, great attitudes, a genuine respect for the game, a “TEAM” concept at all times, and leadership development for each athlete. SVBC will provide the maximum opportunity for each athlete to train and compete at their highest level.
                        <br /><br />
                        No more hoping for the “good coach” or following coaches from club to club.</p>

                    <NavLink to='/register' className='home-button'>Register Now!</NavLink>
                </div>
                <img src={photo} alt='' id='home-dark-image' className='home-slideshow-image' />
            </div>
        </div >
    )
}
export default Home;
