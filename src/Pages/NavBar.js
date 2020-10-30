import { NavLink } from 'react-router-dom'
import React from 'react';



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


    return (
        <div>
            <header id='header'>
                <div className='nav-link-div'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/register' className='nav-link' activeStyle={{ color: "gray" }}>Register</NavLink>
                    <NavLink to='/coaches' className='nav-link' activeStyle={{ color: "gray" }}>Coaches</NavLink>
                    <NavLink to='/teams' className='nav-link' activeStyle={{ color: "gray" }}>Teams</NavLink>
                    <NavLink to='/media' className='nav-link' activeStyle={{ color: "gray" }}>Media</NavLink>
                    <NavLink to='/about' className='nav-link' activeStyle={{ color: "gray" }}>About</NavLink>
                    <NavLink to='/contact' className='nav-link' activeStyle={{ color: "gray" }}>Contact Us</NavLink>
                </div>
            </header>
        </div>
    )
}

export default NavBar;