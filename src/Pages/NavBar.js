import { NavLink } from 'react-router-dom'
import React from 'react';



const NavBar = () => {

    
    

    

    

    return (
        <div>
            <header className='nav-header'>
                <div className='nav-link-div'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/register' className='nav-link' activeStyle={{ color: "red" }}>Register</NavLink>
                    <NavLink to='/coaches' className='nav-link' activeStyle={{ color: "red" }}>Coaches</NavLink>
                    <NavLink to='/teams' className='nav-link' activeStyle={{ color: "red" }}>Teams</NavLink>
                    <NavLink to='/media' className='nav-link' activeStyle={{ color: "red" }}>Media</NavLink>
                    <NavLink to='/about' className='nav-link' activeStyle={{ color: "red" }}>About</NavLink>
                    <NavLink to='/contact' className='nav-link' activeStyle={{ color: "red" }}>Contact Us</NavLink>
                </div>
            </header>
        </div>
    )
}

export default NavBar;