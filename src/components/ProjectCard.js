import React from 'react';

import '../css/projectCard.css'

import placeholder from '../images/140x100.png';

const ProjectCard = () => {
    return (
        <div className='card'>
            <div className='content'>
                <img src={placeholder}/>
                
                <h3>Random Name</h3>
                <p>
                    <span className='techStack'>React</span>
                    <span className='techStack'>Node</span>
                    <span className='techStack'>Express</span>
                </p>
                <div className='projectLinks'>
                    <p>Live Demo</p>
                    <p>Source Code</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;