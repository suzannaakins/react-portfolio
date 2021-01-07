import React, { useState } from 'react';
import Project from '../Project';

const projects = [
    {
        id: 1,
        name: 'Bossy Bartender',
        description: "Many people don't know how to make cocktails with the ingredients they have at home. Users are able to search for cocktails by ingredient, browse drinks, or just ask us to tell them what to drink! Account creation is available for users who want to save their favorite drinks for later. And, if they find a drink they love, they can text their friends about it.",
        image: 'bossy.png',
        applink: 'https://bossy-bartender.herokuapp.com/',
        github: 'https://github.com/suzannaakins/bossy-bartender'
    },
    {
        id: 2,
        name: 'Covid CA',
        description: 'This app helps you track COVID cases in CA and find testing sites near you',
        image: 'covid.png',
        applink: 'https://aaroncenteno.github.io/covid-ca/',
        github: 'https://github.com/suzannaakins/covid-ca'
    },
    {
        id: 3,
        name: 'Tech Blog',
        description: 'This is my first full stack application, where I developed the backend using sequelize to create databases, and routes. Then I used handlebars to make the front end HTML templates.',
        image: 'techblog.png',
        applink: 'https://quiet-hamlet-13328.herokuapp.com/',
        github: 'https://github.com/suzannaakins/tech-blog'
    },
    // {
    //     id: 4,
    //     name: '',
    //     description: '',
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
    //     name: '',
    //     description: '',
    //     image: '',
    //     applink: '',
    //     github: ''
    // }
];


function Portfolio() {
    return <Project projects={projects} />;
}

export default Portfolio;