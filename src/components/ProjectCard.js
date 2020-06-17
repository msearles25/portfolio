import React from 'react';

import '../css/projectCard.css'

import curio from '../images/curio.png'


import placeholder from '../images/140x100.png';

const ProjectCard = () => {
    return (
        <div className='card'>
            <div className='content'>
                <div className='imageContainer'>
                    <img src={curio}/>
                </div>
                
                <h3>Random Name</h3>
                <p>
                    <span className='techStack'>React</span>
                    <span className='techStack'>Node</span>
                    <span className='techStack'>Express</span>
                </p>
                <div className='projectLinks'>
                    <div className='eightBitBtn'>
                        <div className='btnWrapper'>
                            <a className='eightBit'>Live Demo</a>
                        </div>
                    </div>
                    <div className='eightBitBtn'>
                        <div className='btnWrapper'>
                            <a className='eightBit'>Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;