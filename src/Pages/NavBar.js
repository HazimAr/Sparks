import { NavLink } from 'react-router-dom'
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
                    <NavLink to='/' className='nav-link' exact activeStyle={{ fontSize: "30px" }}>Home</NavLink>
                    <NavLink to='/register' className='nav-link' activeStyle={{ fontSize: "30px" }}>Register</NavLink>
                    {/* <NavLink to='/coaches' className='nav-link' activeStyle={{ fontSize: "25px" }}>Coaches</NavLink>
                    <NavLink to='/teams' className='nav-link' activeStyle={{ fontSize: "25px" }}>Teams</NavLink>
                    <NavLink to='/media' className='nav-link' activeStyle={{ fontSize: "25px" }}>Media</NavLink> */}
                    <NavLink to='/about' className='nav-link' activeStyle={{ fontSize: "30px" }}>About Us</NavLink>
                    <NavLink to='/contact' className='nav-link' activeStyle={{ fontSize: "30px" }}>Contact Us</NavLink>
                </div>

                <div id="dropdown-div">
                    <div className='nav-drop-ouside' onClick={destroy} />
                    <NavLink exact activeClassName='header-link-active' className="dropdown-link" to="/" onClick={destroy}>Home</NavLink>
                    <NavLink exact activeClassName='header-link-active' className="dropdown-link" to="/rosters" onClick={destroy}>Teams</NavLink>
                    <NavLink exact activeClassName='header-link-active' className="dropdown-link" to="/creators" onClick={destroy}>Creators</NavLink>
                    <NavLink exact activeClassName='header-link-active' className="dropdown-link" to="/merch" onClick={destroy}>Merch</NavLink>
                    <NavLink exact activeClassName='header-link-active' className="dropdown-link" to="/contact" onClick={destroy}>Contact</NavLink>
                </div>
                <img src={Menu} className="menu-logo" onClick={destroy} alt='' />
            </header>
        </div>
    )
}

export default NavBar;