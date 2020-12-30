import React from 'react';

function Footer() {
    return (
        <a
        class="btn"
        href="https://github.com/suzannaakins" 
        target="_blank"
        aria-label="Follow Suzanna Akins on Github">
            <img src={require(`../../assets/GitHub.png`).default}>
            </img>
        </a>
    )
}

export default Footer;