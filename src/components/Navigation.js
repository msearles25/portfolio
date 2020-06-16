import React, { useState } from 'react';

import '../css/navbar.css'

const Navigation = () => {
    const [burger, setBurger] = useState(false);

    return (
        <nav className='navBar'>

            <div className='hamburger' onClick={() => setBurger(!burger)}>
                <div className='lines l1'></div>
                <div className='lines l2'></div>
                <div className='lines l3'></div>
            </div>

            <div className={`navMenu ${burger ? 'open' : ''}`}>
                <div className='navEnd'>
                    <a href='#' className='navLinks'>Home</a>
                    <a href='#about' className='navLinks'>About</a>
                    <a href='#' className='navLinks'>Projects</a>
                    <a href='#' className='navLinks resumeLink'>Resume</a>
                </div>
            </div>
            
        </nav>
    )
}

export default Navigation;