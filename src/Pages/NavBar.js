import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    
    return (
        <div>
            <header>
                <div className='nav-link-div'>
                    <NavLink to='/' className='nav-name'>Sparks Volleyball Club</NavLink>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/coaches' className='nav-link'>Coaches</NavLink>
                    <NavLink to='/teams' className='nav-link'>Teams</NavLink>
                    <NavLink to='/media' className='nav-link'>Media</NavLink>
                    <NavLink to='/about' className='nav-link'>About</NavLink>
                    <NavLink to='/contact' className='nav-link'>Contact Us</NavLink>
                </div>

            </header>
        </div>
    )
}

export default NavBar;


