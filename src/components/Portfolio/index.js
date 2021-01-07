import React from 'react';
import Project from '../Project';
import './index.css'

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
        description: 'This app helps you track COVID cases in CA and find testing sites near you.',
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
    {
        id: 4,
        name: 'Weather Forecast',
        description: 'This app gives you a 5-day weather forecast for any city in the world! Type in the city you would like to see the weather for. It will tell you the temperature, humidity, windspeed, and UV Index. The UV Index is color-coded based on severity.',
        image: 'weather.png',
        applink: 'https://suzannaakins.github.io/weather-forecast/',
        github: 'https://github.com/suzannaakins/weather-forecast'
    },
    {
        id: 5,
        name: 'Password Generator',
        description: 'Using Javascript, I wrote a series of variables and functions to create a random password using lowercase and uppercase letters, digits, and special characters.',
        image: 'password.png',
        applink: 'https://suzannaakins.github.io/password-generator/',
        github: 'https://github.com/suzannaakins/password-generator'
    },
    {
        id: 6,
        name: 'Employee Generator',
        description: "I wanted a backend application that allows a software engineering team to make a portfolio of their employees, with their contact information, so that everyone's titles and info would be in one place. I developed it using Node.js and Jest to run tests.",
        image: 'employee.png',
        applink: 'https://drive.google.com/file/d/1LNyzxLAcLEy9W6isX0HE8jZp-NCyRpbV/view',
        github: 'https://github.com/suzannaakins/employee-generator'
    }
];


function Portfolio() {
    return (
        <>
            <h1>
                Projects
            </h1>
            <div>
                <Project projects={projects} />
            </div>
        </>
    )
}

export default Portfolio;