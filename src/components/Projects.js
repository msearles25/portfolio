import React from 'react';

import '../css/projects.css'

import ProjectCard from './ProjectCard';
import Card from './card';

import curio from '../images/curio.png'

const Projects = () => {
    return (
        <section id='projects' className='projectsSection'>
            <h3>Projects</h3>
            <div className='projectContainer'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
           </div>

        </section>
    )
}

export default Projects;