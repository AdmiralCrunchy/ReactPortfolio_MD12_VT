import React from "react";
import Resume from "./components/resumeSchools"

const prevSchool = [
    {
        id: 4,
        name: "University of Washington",
        degree: "Full Stack Development Certificate",
        dateStart: "June 2022",
        dateFinish: "September 2022",
    },
    {
        id: 3,
        name: "Art Institute of Seattle",
        degree: null,
        dateStart: "January 2019",
        dateFinish: "November 2017",
    },
    {
        id: 2,
        name: "Indian Hills Community College",
        degree: "Associates Degree in Arts & Sciences",
        dateStart: "November 2011",
        dateFinish: "September 2009",
    },
    {
        id: 1,
        name: "Melcher-Dallas Highschool",
        degree: "Highschool Dipolma",
        dateStart: "May 2009",
        dateFinish: "August 2005",
    },
]

function App(){
    return <Resume prevSchool={prevSchool} />;
}

export default App;