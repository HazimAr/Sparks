import React from 'react'
import facebook from '../Images/facebook.svg'
import insta from '../Images/instagram.svg'
import youtube from '../Images/youtube.svg'

const Footer = () => {
    return (
        <div>
            <footer>

                <div className='footer-content-div'>
                    <div className='footer-content'>
                        <p className='footer-header'>Contact Us</p>
                        <a className='footer-links' href = "mailto:SparksVolleyBallClub@gmail.com">SparksVolleyBallClub@gmail.com</a>
                        <p/>
                        <a className='footer-links' href="tel:7025029462">(702) 502-9462</a>
                        <p>Las Vegas, Nevada</p>
                        <p>Sparks... The Revolution</p>
                    </div>
                    
                </div>
                <div className='footer-socials-div'>
                   <a href='https://www.facebook.com/SparksVBCLV' target="_blank" rel="noreferrer noopener"><img src={facebook} alt='' className='footer-socials' /></a>
                   <a href='https://www.instagram.com/sparks_vbc_lv/'target="_blank" rel="noreferrer noopener"><img src={insta} alt='' className='footer-socials' /></a>
                   <a href='https://www.youtube.com/channel/UCrUowRgcYRZif4HXd9RgO4A'target="_blank" rel="noreferrer noopener"><img src={youtube} alt='' className='footer-socials' /></a>

                </div>

            </footer>
        </div>
    )
}

export default Footer;


