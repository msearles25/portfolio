import React from 'react';

import '../css/projectCard.css'

const ProjectCard = props => {
    return (
        <div className='card'>
            <div className='content'>
                <div className='imageContainer'>
                    <img src={props.image}/>
                </div>
                
                <h3>{props.name}</h3>
                <div className='techStack'>
                    {props.stack.map((stack, i) => (
                        <p key={i}>{stack}</p>
                    ))}
                    {/* <span className='techStack'>React</span>
                    <span className='techStack'>Node</span>
                    <span className='techStack'>Express</span> */}
                </div>
                <div className='projectLinks'>
                    <div className='eightBitBtn'>
                        <a target='_blank' rel="noopener noreferrer" href={props.demo}>
                            <div className='btnWrapper'>
                                <span className='eightBit'>Live Demo</span>
                            </div>
                        </a>
                    </div>
                    <div className='eightBitBtn'>
                        <a target='_blank' rel="noopener noreferrer" href={props.source}>
                            <div className='btnWrapper'>
                                <span className='eightBit'>Source Code</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;