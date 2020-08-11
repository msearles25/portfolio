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
                    <a href='#' className={`navLinks ${burger ? 'openLinks' : ''}`} onClick={() => setBurger(false)} >Home</a>
                    <a href='#about' className={`navLinks ${burger ? 'openLinks' : ''}`}  onClick={() => setBurger(false)}>About</a>
                    <a href='#projects' className={`navLinks ${burger ? 'openLinks' : ''}`}  onClick={() => setBurger(false)}>Projects</a>
                    <a href='https://drive.google.com/file/d/1csituMGm-gL3-5E7LAlB379QT_9_dI6n/view?usp=sharing' className={`navLinks ${burger ? 'openLinks' : ''}`} >Resume</a>
                </div>
            </div>
            
        </nav>
    )
}

export default Navigation;