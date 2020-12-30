import React from 'react';
import aboutMe from "../../assets/AboutMe.jpg"
function About() {
    return (
        <section style={{ margin: "0 auto", padding: "0 50px" }}>
            <h1 id="about-me">About Me</h1>
            <div>
                <img src={aboutMe} style={{ width: "50%" }} alt="Suzanna smiling">

                </img>
                <p>ABOUT ME BLAH BLAH BLAH
                </p>
            </div>
        </section>
    );
}

export default About;