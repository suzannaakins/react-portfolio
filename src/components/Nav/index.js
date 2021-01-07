import React from 'react';

function Nav(props) {
    const { sections, currentSection, setCurrentSection } = props;

    return (
        <nav>
            <ul className="flex-row">
                {sections.map((section) => (
                    <li 
                        className={`${currentSection.name === section.name}` }
                        key={section.name}
                    >
                        <a href={`${currentSection.name}`}
                            onClick={() => {
                                setCurrentSection(section);
                            }}
                        >
                            {section.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;