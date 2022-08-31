import React from 'react';
import JobCard from "./JobCard";
import SchoolCard from "./SchoolCard";
import Skills from "./skillsCard";

function App() {
    return(
        <main>
            <h1>RESUME</h1>
            <section><h2>Dedicated, Oriented and Precise</h2>
                <p>I am a team leader with years of experience heading and aiding departments as well as having excellent face to face , over the phone and email correspondence skills. My career has set me in a variety of different fields that has given me the tools to hand face pace, high stress situations all while expected to multitask responsibilities. I always ensure that tasks are accomplished, timelines are adhered to and guidelines are followed to the letter. My goal has always been to guarantee both satisfaction and reliability, in which I have over 10 years of experience doing so.</p>
            </section>
            <section>
                <JobCard />
            </section>
            <section>
                <SchoolCard />
            </section>
            <section>
                <Skills />
            </section>
            <a href='../images/Vincent-Tate.pdf' download>Resume Download</a>
        </main>
    )
}

export default App;