import React from 'react';

import '../css/about.css'

import css3 from '../svgs/icons8-css3 (1).svg'
import javascript from '../svgs/icons8-javascript (1).svg'
import react from '../svgs/icons8-react.svg'
import node from '../svgs/icons8-nodejs.svg'
import html5 from '../svgs/icons8-html-5.svg'
import python from '../svgs/icons8-python.svg'
import postgresql from '../svgs/icons8-postgresql.svg'
import git from '../svgs/icons8-git (1).svg'
import docker from '../svgs/icons8-docker.svg'
import c from '../svgs/icons8-c++.svg'


const About = () => {
    return (
        <section className='aboutSection' id='about'>
            <div className='aboutTop'>
                <h3>About</h3>
                <p>
                    My name is Michael Searles, I am a full stack developer that is experienced in JavaScript and Python, while my main
                    focus is JavaScript currently, I also love getting into other languages just for fun or to learn 
                    new things. I plan to use this space as a place to showcase my latest projects and growth as I learn 
                    and improve.
                </p>
            </div>
            <div className='aboutBottom'>
                <h3>Skills</h3>
                <div className='skillsGroup'>
                    <div className='skills'>
                        <object type="image/svg+xml" data={c} width='60'></object>
                        <p>C++</p>
                    </div>
                    <div className='skills'>
                        <object type="image/svg+xml" data={javascript} width='60'></object>
                        <p>Javascript</p>
                    </div>
                    <div className='skills'>
                        <object type="image/svg+xml" data={react} width='60'></object>
                        <p>React.js</p>
                    </div>
                    <div className='skills'>
                        <object type="image/svg+xml" data={node} width='60'></object>
                        <p>Node.js</p>
                    </div>
                    <div className='skills'>
                        <object type="image/svg+xml" data={html5} width='60'></object>
                        <p>HTML5</p>
                    </div>
                    <div className='skills'>
                        <object type="image/svg+xml" data={css3} width='60'></object>
                        <p>CSS3</p>
                    </div>
                    <div className='skills'>
                        <object type="image/svg+xml" data={python} width='60'></object>
                        <p>Python</p>
                    </div>
                    <div className='skills'>
                        <object type="image/svg+xml" data={postgresql} width='60'></object>
                        <p>PostgreSQL</p>
                    </div>
                    <div className='skills'>
                        <object type="image/svg+xml" data={git} width='60'></object>
                        <p>Git</p>
                    </div>
                    <div className='skills'>
                        <object type="image/svg+xml" data={docker} width='60'></object>
                        <p>Docker</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;