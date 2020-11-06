import React from 'react'
import { NavLink } from 'react-router-dom';
import Transparent from '../Images/Logos/Transparent-White.gif'
// import placeholder from '../Images/placeholder.png'
import photo from '../Images/photo.png'
const Home = () => {

    var b = true
    window.onload = function () {

        if (b) {
            const section = document.getElementById('animateSection')
            section.style.height = '100vh'
            section.style.animation = 'onLoad 2s ease 1.5s 1 forwards'

            const image = document.getElementById('animateImage')

            image.style.animation = 'sparksLogo 2s ease 0s 1 forwards'

            const text = document.getElementById('animateText')
            text.style.visibility = 'hidden'

            text.style.animation = 'text 1.5s ease 1.5s 1 forwards'
            b = false

            //  animation: name duration timing-function delay iteration-count direction fill-mode;

        }
    }
    return (

        <div>
            <div className='home-animation' id='animateSection' />
            <div className='home-div'>
                <img src={Transparent} alt='' className='home-logo' id='animateImage' />
                <div className='home-section' id='animateText'>
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
                <img src={photo} alt='' className='home-triangle-image' />
            </div>
            <div>
                                <section class="section section--theme-light section--style-border">
    <div class="inner">
        <div class="column column--rel-same">
            <hgroup class="nameplate">
                <h2 class="title title--style-strong nameplate__title">Frequently answered questions</h2>
            </hgroup>
        </div>

        <div class="column column--width-third column--pos-left">
    <div class="feature">
        <i class="icon icon--glyph-chat-double-bubble-2 feature__icon section__icon"></i>
        <div class="feature__details">
            <h3 class="title feature__title">Which sports does it support?</h3>
            <p class="description">The plugin will support most team sports with a scoring system. You can customize the table columns and player statistics. Presets are included for commonly requested sports, and you can even create your own!</p>
            <a class="link column__link" href="https://www.themeboy.com/preset-sports/" data-category="pro" data-action="sports" data-label="faq">View list of sports</a>
        </div>
    </div>
</div>

<div class="column column--width-third">
    <div class="feature">
        <i class="icon icon--glyph-chat-double-bubble-3 feature__icon section__icon"></i>
        <div class="feature__details">
            <h3 class="title feature__title">Will it work with my theme?</h3>
            <p class="description">Yes! SportsPress Pro will work with any theme, but may require some styling to make it match nicely. If you're using one of our themes, SportsPress Pro expands on the included sports features by adding powerful new modules.</p>
            <a class="link column__link" href="https://www.themeboy.com/sportspress-pro/feature/" data-category="pro" data-action="features" data-label="faq">Learn about the features</a>
        </div>
    </div>
</div>

<div class="column column--width-third column--pos-right">
    <div class="feature">
        <i class="icon icon--glyph-chat-double-bubble-4 feature__icon section__icon"></i>
        <div class="feature__details">
            <h3 class="title feature__title">Can it manage multiple sports?</h3>
            <p class="description">Yes! Multisite enables you to have each sport on a subdomain of your main site and allows you to share widgets from any site within your network. A League License or Agency License is needed to receive updates on Multisite.</p>
            <a class="link column__link" href="https://www.themeboy.com/sportspress-extensions/multisite/" data-category="pro" data-action="multisite" data-label="faq">Discover multisite</a>
        </div>
    </div>
</div>    </div>
</section>
            </div>
            

        </div >
    )
}
export default Home;