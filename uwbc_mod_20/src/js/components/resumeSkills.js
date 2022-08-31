import React from "react";

function Resume(props) {
    return ( <section>
            <h1>Skills</h1>
            {props.skills.map(item => (
                <li className="list-group-item" key={item.id}>
                {item.name} for {item.years} years
              </li>
            ))}
        </section>
    )
}

export default Resume;