import React from "react";
import Resume from "./components/resumeSkills"

const skills = [
    {
        id: 1,
        name: "Microsoft Office",
        years: 10,
    },
    {
        id: 2,
        name: "Adobe Creative Suite",
        years: 4,
    },
    {
        id: 3,
        name: "Maya 3d Software",
        years: 3,
    },
    {
        id: 4,
        name: "C++",
        years: 3,
    },
    {
        id: 5,
        name: "C#",
        years: 4
    },
    {
        id: 6,
        name: "CSS",
        years: 6,
    },
    {
        id: 7,
        name: "Javascript",
        years: 1,
    },
    {
        id: 8,
        name: "Nodejs",
        years: 1,
    },
    {
        id: 9,
        name: "MySQL",
        years: 1,
    },
    {
        id: 10,
        name: "MongoDB",
        years: 1,
    },

]

function App(){
    return <Resume skills={skills} />;
}

export default App;