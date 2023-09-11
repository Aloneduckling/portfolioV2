import React from 'react';
import { FiLink2 } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";


const Project = ( { project } ) => {
    
    return (
        <div className='project'>
            <div className='project-details'>
                <h2 className='project-title'>{project.name}</h2>
                <ul className='project-tech_stack-list'>
                    {
                        project.tech_stack.map((item, id) => {
                            return <li key={id} className='project-tech_stack-list-item'>
                                {item}
                            </li>;
                        })
                    }
                </ul>
                <div className='project-link'>
                    <a
                        href={project.web_link ? project.web_link : "#"}
                        className='project-link__weblink'
                    >
                        <FiLink2 className='project-link__svg' />
                    </a>
                    <a href={project.github} className='project-link__github'>
                        <BsGithub className='project-link__svg' />
                    </a>
                </div>
                <p className='project-description'>{project.description}</p>
            </div>
            <img
                src={project.image.asset.url}
                alt={project.name}
                className='project-image'
            />
        </div>
    );
};

export default Project;