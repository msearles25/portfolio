import React from 'react';

import '../css/header.css'

// All svg's are from icons8

// github, linkedin and envelope are from:
// https://github.com/nostalgic-css/NES.icons


const Header = () => {
    return (
        <section className='hero'>
            <link href="https://unpkg.com/nes.icons@latest/css/nes-icons.min.css" rel="stylesheet" />

            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            <div className='hero-body'>
                <h1>Michael Searles</h1>
                <h2>Full Stack Developer</h2>
            </div>
            <div className='artifact-links'>
                <div className='github-link'>
                    <a href='https://www.github.com/msearles25'>
                        <i class="nes-icon github-square size-2x"></i>
                    </a>
                </div>
                <div className='linkedin-link'>
                    <a href='https://www.linkedin.com/in/michael--searles/'>
                        <i class="nes-icon linkedin size-2x"></i>
                    </a>
                </div>
                <div className='email-link'>
                    <a href="mailto:michael.searles25@gmail.com">
                        <i class="nes-icon envelope size-2x"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Header;