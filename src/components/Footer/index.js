import React from 'react';

function Footer() {
    return (
        <footer>
            <ul className="flex-row">
                <li>
                    <a
                        class="btn"
                        href="https://github.com/suzannaakins"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Follow Suzanna Akins on Github">
                        <img
                            className="giticon"
                            src={require(`../../assets/GitHub.png`).default}
                            alt="Github Icon">
                        </img>
                    </a>
                </li>
                <br />
                <li>
                    <a
                        class="btn"
                        href="https://www.linkedin.com/in/suzanna-akins/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Connect with Suzanna Akins on LinkedIn">
                        <img
                            className="linkedin"
                            src={require(`../../assets/linkedin.png`).default}
                            alt="LinkedIn icon">
                        </img>
                    </a>
                </li>
            </ul>
        </footer>

    )
}

export default Footer;