import React from 'react';

function Footer() {
    return (
        <ul className="flex-row">
            <li>
                <a
                    class="btn"
                    href="https://github.com/suzannaakins"
                    target="_blank"
                    aria-label="Follow Suzanna Akins on Github">
                    <img className="giticon" src={require(`../../assets/GitHub.png`).default}>
                    </img>
                </a>
            </li>
            <br/>
            <li>
                <a
                    class="btn"
                    href="https://www.linkedin.com/in/suzanna-akins/"
                    target="_blank"
                    aria-label="Connect with Suzanna Akins on LinkedIn">
                    <img className="linkedin" src={require(`../../assets/linkedin.svg`).default}>
                    </img>
                </a>
            </li>
        </ul>


    )
}

export default Footer;