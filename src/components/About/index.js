import React from 'react';
import aboutMe from "../../assets/AboutMe.jpg"
function About() {
    return (
        <section style={{ margin: "0 auto", padding: "0 50px" }}>
            <h1 id="about-me">About Me</h1>
            <div>
                <img src={aboutMe} style={{ width: "40%" }} alt="Suzanna smiling">
                </img>
                <p>Congrats on making it this far. "This far" meaning to my portfolio.  I am a full stack web developer located in Los Angeles, CA.
                    I received training through UCLA's full stack developer bootcamp during the great pandemic of 2020. 
                </p>
            </div>
        </section>
    );
}

export default About;