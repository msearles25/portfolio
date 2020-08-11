import React from 'react';

import '../css/projects.css'

import ProjectCard from './ProjectCard';
import Card from './card';

import curio from '../images/curio.png'
import hackathon from '../images/hackathonPortal.png'
import ff from '../images/friendfinder.png'
import facebrowser from '../images/facebrowser.png'

const Projects = () => {
    return (
        <section id='projects' className='projectsSection'>
            <h3>Projects</h3>
            <div className='projectContainer'>
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