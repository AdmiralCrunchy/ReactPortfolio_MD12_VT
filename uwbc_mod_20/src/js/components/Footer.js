import React from 'react';
import '../../css/footer.css'

function Footer() {
    return(
        <section className='footer' >
            <p className='box'>This site was created by VINCENT 'kaylin' TATE</p>
            <section className='box'>
            <a className='bottom' href= "https://github.com/AdmiralCrunchy" >
                <img alt="GitHub Logo" src= "https://cdn-icons-png.flaticon.com/512/25/25231.png" width="64px" height="64px"/>
            </a>
            <a className='bottom' href= "https://www.linkedin.com/in/vincent-tate-5b5194133/" >
                <img alt="Linkedin Logo" src='https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png' width='64px' height='64px'/>
            </a>
            <a className='bottom' href='https://gitlab.com/vincentjtate'>
                <img alt="GitLab Logo" src='https://cdn.icon-icons.com/icons2/2415/PNG/512/gitlab_original_logo_icon_146503.png' width='64px' height='64px'/>
            </a>
            </section>
        </section>
    )
}

export default Footer;