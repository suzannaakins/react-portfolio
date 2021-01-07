import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        name: 'Bossy Bartender',
        description: 'This project was built....',
        image: 'bossy.png',
        applink: 'https://bossy-bartender.herokuapp.com/',
        github: 'https://github.com/suzannaakins/bossy-bartender'
    },
    {
        id: 2,
        name: 'Covid CA',
        description: 'This app helps you track COVID cases in CA and find testing sites near you',
        image: '',
        applink: '',
        github: ''
    },
    {
        id: 3,
        name: '',
        description: 'This app helps you track COVID cases in CA and find testing sites near you',
        image: '',
        applink: '',
        github: ''
    },
    {
        id: 4,
        name: '',
        description: 'This app helps you track COVID cases in CA and find testing sites near you',
        image: '',
        applink: '',
        github: ''
    },
    {
        id: 5,
        name: '',
        description: '',
        image: '',
        applink: '',
        github: ''
    },
    {
        id: 6,
        name: 'Covid CA',
        description: 'This app helps you track COVID cases in CA and find testing sites near you',
        image: '',
        applink: '',
        github: ''
    }
];


function Portfolio(projects) {
    return (
        <ul>
            {/* {projects.map((project) => (
                <li key={project.id}>
                    <h1>
                        {project.name}
                    </h1>
                    <p>
                        {project.description}
                    </p>
                    <a href={project.applink}>
                        Check out the project here!
                    </a>
                    <a href={project.github}>
                        Click here to view the project's Github repository.
                    </a>
                    <img src={require(`../../assets/${project.image}`).default}
                    />
                </li>
            ))} */}
        </ul>
    );
}

export default Portfolio;