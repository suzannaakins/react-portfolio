import React from 'react';
import './index.css';

function Project(props) {
    const projects = props.projects;

    return (
        <ul>
            {projects.map((project) => (
                <li key={project.id}>
                    <h2>
                        {project.name}
                    </h2>
                    <p>
                        {project.description}
                    </p>
                    <a href={project.applink} target="_blank" rel="noreferrer">
                        Check out the project here.
                    </a>
                    <br/>
                    <a href={project.github} target="_blank" rel="noreferrer">
                        Click here to view the project's Github repository.
                    </a>
                    <br/>
                    <img className="projectimage" 
                    src={require(`../../assets/${project.image}`).default}
                    alt='Preview of project'
                    />
                </li>
            ))}
        </ul>
    );
}

export default Project;