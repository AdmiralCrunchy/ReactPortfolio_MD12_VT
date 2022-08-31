import React from "react";
import '../../css/resume.css';

function Resume(props) {
    return ( <section > 
                <h1> Employment History </h1>
            <section className="card">
                {props.prevJobs.map(item => {
                    
                    if(item.contract === true)
                    {
                        return(
                        <div key={item.id}>
                            <h4 className="title"> {item.title}</h4>
                            <p className="title">Company: {item.company} - Contracted Through: {item.contractCompany}</p>
                            <p className="title">Employment Dates: {item.dateStart} to {item.dateFinish}</p>
                            <p> {item.description} </p>
                        </div>
                        )
                    }else{
                        return(
                        <div key={item.id}>
                            <h4 className="title"> {item.title}</h4>
                            <p className="title">Company: {item.company}</p>
                            <p className="title">Employment Dates: {item.dateStart} to {item.dateFinish}</p>
                            <p> {item.description} </p>
                        </div>
                        )
                    }
                })}
                </section>
            </section>
    )
}

export default Resume;