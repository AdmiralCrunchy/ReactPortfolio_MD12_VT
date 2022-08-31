import React from "react";
import '../../css/resume.css'

function Resume(props) {
    return (
        <section className="list-group">
            <h1>Schooling</h1>
            {props.prevSchool.map(item => {
                return(
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Degree: {item.degree} </p>
                    <p>Enrollment Dates: {item.dateStart} to {item.dateFinish}</p>
                </div>)
            })}
        </section>
    )
}

export default Resume;