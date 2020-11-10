import React from 'react';
import Menu from '../Images/Menu.svg'
import { animateScroll as scroll } from 'react-scroll'

const NavBar = () => {

    window.onscroll = () => {
        const header = document.getElementById('header')
        if (window.scrollY > 100) {
            // css after scoll down
            header.style.backgroundColor = 'rgb(31, 31, 31, 0.5)'
        }
        else {
            header.style.color = 'white';
            header.style.backgroundColor = 'transparent'
        }
    }


    let b = true;
    function destroy() {
        let a = document.getElementById('dropdown-div');
        if (b) {
            a.style.display = 'none';
            b = false;
        }
        if (a.style.display === 'none') {
            a.style.display = 'flex'
        } else {
            a.style.display = 'none';
        }
        scroll.scrollToTop();
    }

    return (
        <div>
            <header id='header'>
                <div className='nav-link-div'>
                    <p lassName='nav-link' exact activeStyle={{ fontSize: "30px" }}>Home</p>
                    <p className='nav-link' activeStyle={{ fontSize: "30px" }}>About Us</p>
                    <p className='nav-link' activeStyle={{ fontSize: "30px" }}>Register</p>
                    <p className='nav-link' activeStyle={{ fontSize: "30px" }}>Contact Us</p>
                </div>

                <div id="dropdown-div">
                    <div className='nav-drop-ouside' onClick={destroy} />
                    <p exact activeClassName='header-link-active' className="dropdown-link" onClick={destroy}>Home</p>
                    <p exact activeClassName='header-link-active' className="dropdown-link" onClick={destroy}>About Us</p>
                    <p exact activeClassName='header-link-active' className="dropdown-link" onClick={destroy}>Register</p>
                    <p exact activeClassName='header-link-active' className="dropdown-link" onClick={destroy}>Contact Us</p>
                </div>
                <img src={Menu} className="menu-logo" onClick={destroy} alt='' />
            </header>
        </div>
    )
}

export default NavBar;