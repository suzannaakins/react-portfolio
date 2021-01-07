import React from 'react';
import Nav from '../Nav';

function Header(props) {

    return (
        <header>
            <Nav
                sections={props.sections}
                currentSection={props.currentSection}
                setCurrentSection={props.setCurrentSection}>
            </Nav>
        </header>
    )
}

export default Header;