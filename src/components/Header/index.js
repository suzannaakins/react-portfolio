import React from 'react';
import Nav from '../Nav';
import About from '../About'

function Header(props) {
    return (
        <header>
            {/* <h1>SUZANNA AKINS</h1> */}
            <Nav
                sections={props.sections}
                currentSection={props.currentSection}
                setCurrentSection={props.setCurrentSection}>
            </Nav>
        </header>
    )
}

export default Header;