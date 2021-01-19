import React from 'react';

import '../css/projects.css'

import ProjectCard from './ProjectCard';
import Card from './card';

import curio from '../images/curio.png'
import hackathon from '../images/hackathonPortal.png'
import ff from '../images/friendfinder.png'
import facebrowser from '../images/facebrowser.png'
import simpleGeoWars from '../images/simpleGeoWars.png'

const Projects = () => {
    return (
        <section id='projects' className='projectsSection'>
            <h3>Projects</h3>
            <div className='projectContainer'>
                <ProjectCard 
                    name='Simple Geometry Wars' 
                    image={simpleGeoWars} 
                    stack={['C++', 'SFML Graphics Library']}
                    demo='https://www.dropbox.com/s/bx9jevtjptwd7yw/Release.rar?dl=0'
                    source='https://gitfront.io/r/msearles25/4a19c7cf0d83e380ca39a42cc766b7c9f188cd7f/ask-for-source/'
                />
                <ProjectCard 
                    name='FaceBrowser Front-End' 
                    image={facebrowser} 
                    stack={['React', 'Styled-Components', 'Redux']}
                    demo='https://face-browser.netlify.app/'
                    source='https://github.com/msearles25/face-browser-frontend'
                />
                 <ProjectCard 
                    name='FaceBrowser Back-End' 
                    image={facebrowser} 
                    stack={['Nodejs', 'Express']}
                    demo='https://face-browser.netlify.app/'
                    source='https://github.com/msearles25/face-browser-backend'
                />
                <ProjectCard 
                    name='Hackathon Portal' 
                    image={hackathon} 
                    stack={['React', 'Node.js', 'Material-UI', 'Sass']}
                    demo='https://www.hackathon-portal.tech/'
                    source='https://github.com/msearles25/hackathon-portal-fe'
                />
                <ProjectCard 
                    name='Curio' 
                    image={curio} 
                    stack={['React', 'CSS', 'Sass']}
                    demo='https://curio-app.netlify.app/'
                    source='https://github.com/curio-app/frontend'
                />
                <ProjectCard 
                    name='Friend Finder' 
                    image={ff} 
                    stack={['HTML', 'CSS']}
                    demo='https://friendfinder-mike.netlify.app/'
                    source='https://github.com/Find-Friends/marketing-site'
                />
                {/* <ProjectCard />
                <ProjectCard /> */}
           </div>

        </section>
    )
}

export default Projects;