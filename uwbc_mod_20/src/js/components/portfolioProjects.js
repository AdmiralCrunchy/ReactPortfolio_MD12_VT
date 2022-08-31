import React from "react";
import '../../css/project.css'



function Project(props) {
    return (
        <section className="project" >
            {props.prevProjects.map(item => {
                if(item.hasApp === true)
                {
                    return(
                    <div className="cards" key={item.id}>
                        <h3>{item.name} {item.schoolProj===true}{'(School Project)'} </h3>
                        <img src={item.photoLink} width="400px" height="200px"/>
                        <section>
                            <a className="links" href= {item.gitHub}>
                                <img alt="GitHub Repo Link" src= "https://cdn-icons-png.flaticon.com/512/25/25231.png" width="32px" height="32px"/>
                            </a>
                            
                            <a className="links" href= {item.appLink}>
                                <img alt="Application Link" src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAeFBMVEX///8AAABgYGBbW1tubm6xsbH5+flkZGQLCwukpKT29vaqqqrw8PCUlJR6enpzc3PY2Ni8vLxJSUnl5eXDw8NUVFQ/Pz+MjIzPz89paWkqKipPT086OjpERES0tLTh4eGDg4MTExMtLS0dHR3BwcGcnJwjIyMyMjJDWJJgAAAE70lEQVR4nO2da3uiOhRGQUUdxXqpVrE3ndb2///D0baHvOE4AyjZIdt3fRIfIHtByI3wJIoKbMa7adbRQTZdJ7OioM3LY6yPwfKvvhPfsblimJz1nfuOyyXbM5m75zsox0wKvqNP3xE5Z2ALv/mOR4BHNP7tOxoR4C53fcciRP4sj31HIsZPiT0q/r/KejrIFgWz7bfxnfXntKRZFhhLW/qrKZJaF+Hed4iNs0S/4ekfbFuufIfngnQIhqc2Nmw/+A7ODZiLjzXUK2ymvmNzxDs4RlFiNopNTz08G8kZltRab7HVL0yiVf772Xdc7ugb43W0hd96ecotp9E+/33wHZZDTM8hg8rpl++wHNKB6onGOqExjfVBYxrrg8Y01geNaawPGtNYHzSmsT5oTGN90JjG+qAxjfVBYxrrg8Y01geNaawPGtNYHzSmsT5oTGN90JjG+qAxjfVBYxrrg8Y01geNaawPGtNYHzSmsT5oTGN90JjG+qAxjfVBYxrrg8Y01geNaawPGtNYHzSmsT5oTGN90PhWjce+w3LI4Kzxw0AvH2eNbwMa64fG+qGxfmisHzR+6nS10jnf5rq9dvXt9Z1orAkaixu/niLYjeQS9G383xqXcsvSejbO1zHdSqXo23iXJ7mUStKzsVnFVGylVs/GZoHLnVSSuMKkaXGKXfBenmQilaRZ23sKv7tSyW/yJPtSSeYpxrtoajakks9XIJ5LJWiu8bG/9MtsiOWx6HBKbihWUsNzFG+imdkYikVwvOrzmVxiuHJ5H7P48anWiVnjOV5EES7rrXQl8xUYnp5cyNZxfOc7uuZJH1Dw669H/Gf/4jnAhhkd0O4nE7/GNtlhnOhgPFkV3H6uwy6+FfIM/FG+rwoGeWa/9x2KDNgd35TvHj7DNLot5TdL+Jix33xH5JjV//tpd+VHBczZ4Y7ZovzAQOml54RPztPygwNk/Tff7yJs0t37jrBBPrJDtV5pvxmgm/Y7Gv2TPrQJpo2lL84ILcqI4eoEC9Tyh9KdoQsn+EKqYSZGYlO689rsLDcA1jTm5UP8z+Lyi7nZeS0QmxPgMX4r3xuKrk/3sbkB7lqV0aS92V3uNWuzZEahylg8NHMDnXbUNwYVHmMrSzw7D84JYPBQZX947APN1lDBltfGhQOCHDi/r33LxnCE4+CcACOkT9WOwGwt9tqxOTD8qkVvt/ZFahPQwqz8YnwJx5Q3S1sGVk29ykfBQcFVUNAviKu/KcaXRIF1J1IIvVJl/A3mjA930bmgc+HNwldgQc2MxQH/WiMamDeCGhjAz03eax2Jo+Zi062uB/NmzYoVq/FwmiHWS6y6U3qwHg8lX2OBC69sq4JHLxyE5wBrJkKVjrHNHA8Pog+FbY+LahjrigXQDrFuUY3Gh8Gqodo/NjBrIFzsJ8fDlpde9oySS1tNXTxJu/uNdoZcXXoaq1JudYGd7q38ePm7PXtaysVXzjm2cO22B3IIQrkwK+y6+emZda52Dg/YpXS8u/J0T9bZPltYYi9t4c615+sXPvdvXb1sP3jx4/VnHBWUvbe+lmMgGdjRxcnL1VOF5+vCOdeY4lh6rDOJvbMX/LQkwk+GPCKonJZHI0GFiQdN0Y5bLPneoi2TVuW+YmnLhxVyI3/v5cGIUH9I6WK25dEIIPnRYSsKa+HuxeTTs+/i0r7ZH5I3akAeR59rAAAAAElFTkSuQmCC" width="32px" height="32px"/>
                            </a>
                        </section>
                        <p>{item.description}</p>
                    </div>
                    )
                }else{
                }
            })}
        </section>
    )
}

export default Project;