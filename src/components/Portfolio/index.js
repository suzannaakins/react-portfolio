import React, { useState } from 'react';
import Project from '../Project';

const projects = [
    {
        id: 1,
        name: 'Bossy Bartender',
        description: 'This project was built....',
        image: 'bossy.png',
        applink: 'https://bossy-bartender.herokuapp.com/',
        github: 'https://github.com/suzannaakins/bossy-bartender'
    },
    // {
    //     id: 2,
    //     name: 'Covid CA',
    //     description: 'This app helps you track COVID cases in CA and find testing sites near you',
    //     image: '',
    //     applink: '',
    //     github: ''
    // },
    // {
    //     id: 3,
    //     name: '',
    //     description: 'This app helps you track COVID cases in CA and find testing sites near you',
    //     image: '',
    //     applink: '',
    //     github: ''
    // },
    // {
    //     id: 4,
    //     name: '',
    //     description: 'This app helps you track COVID cases in CA and find testing sites near you',
    //     image: '',
    //     applink: '',
    //     github: ''
    // },
    // {
    //     id: 5,
    //     name: '',
    //     description: '',
    //     image: '',
    //     applink: '',
    //     github: ''
    // },
    // {
    //     id: 6,
    //     name: 'Covid CA',
    //     description: 'This app helps you track COVID cases in CA and find testing sites near you',
    //     image: '',
    //     applink: '',
    //     github: ''
    // }
];


function Portfolio() {
    return <Project projects={projects} />;
}

export default Portfolio;