import React from 'react';
import Nav from '../Nav';
import Portfolio from '../Portfolio';

function Header(props) {

    return (
        <>
            <h1>
                <a href='/'>
                    Suzanna Akins
                </a>
            </h1>
            <Nav
                sections={props.sections}
                currentSection={props.currentSection}
                setCurrentSection={props.setCurrentSection}>
            </Nav>
            <Portfolio></Portfolio>
        </>
    )
}

export default Header;