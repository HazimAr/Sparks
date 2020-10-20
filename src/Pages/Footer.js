import React from 'react'
import facebook from '../Images/facebook.png'
import insta from '../Images/insta.png'
import youtube from '../Images/youtube.png'

const Footer = () => {
    return (
        <div>
            <footer>

                <div className='footer-content-div'>
                    <div className='footer-content'>
                        <p className='footer-header'>Contact Us</p>
                        <a className='footer-email' href = "mailto:SparksVolleyBallClub@gmail.com">SparksVolleyBallClub@gmail.com</a>
                        <p>(702) 502-9462</p>
                        <p>Las Vegas, Nevada</p>
                        <p>Sparks... The Revolution</p>
                    </div>
                    {/* <div className='footer-content'>
                    <p className='footer-header'>LOREM</p>
                        <p>ipsum</p>
                        <p>ipsum</p>
                        <p>ipsum</p>
                    </div> */}
                </div>
                <div className='footer-socials-div'>
                   <a href='https://www.facebook.com/SparksVBCLV'><img src={facebook} alt='' className='footer-socials' /></a>
                   <a href='https://www.instagram.com/sparks_vbc_lv/'><img src={insta} alt='' className='footer-socials' /></a>
                   <a href='https://www.youtube.com/channel/UCrUowRgcYRZif4HXd9RgO4A'><img src={youtube} alt='' className='footer-socials' /></a>

                </div>
                <p className='footer-copyright'>© 2020  Sparks VBC LV</p>

            </footer>
        </div>
    )
}

export default Footer;


