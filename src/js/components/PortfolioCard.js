import React from 'react'
import Projects from './portfolioProjects'
import '../../css/project.css'

const prevProjects = [
    {
        id: 7,
        name: 'Monkeys Vs. Shakespeare [PROTOTYPE]',
        gitHub: 'https://github.com/AdmiralCrunchy/Monkeys_VS_Shakespeare',
        hasApp: true,
        appLink: 'https://monkeys-vs-shakespeare.herokuapp.com/',
        photoLink: 'https://i.pinimg.com/originals/d0/94/66/d0946601fea8d959413d0f4866183612.jpg',
        schoolProj: true,
        description: 'The Project had me and a team put together a game site where the player takes monkeys on typewriters against writers of ages past.' 
    },
    {
        id: 6,
        name: 'Tech Blog',
        gitHub: 'https://github.com/AdmiralCrunchy/MVC_MD14_VT',
        hasApp: true,
        appLink: 'https://uw-homework-module-14.herokuapp.com/',
        photoLink: 'https://www.techbusinessnews.com.au/storage/2021/08/Tech-Blog-making.png',
        schoolProj: true,
        description: 'This project had me putting together a tech sight blog that allowed users to login and create their own articles that appear on the feed.' 
    },
    {
        id: 5,
        name: 'Progressive Web Application',
        gitHub: 'https://github.com/AdmiralCrunchy/PWA_MD19_VT',
        hasApp: true,
        appLink: 'https://uw-module-19.herokuapp.com/',
        photoLink: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80',
        schoolProj: true,
        description: 'This was a project that had me working with Progressive Web Applications and editing Webpacks.' 
    },
    {
        id: 4,
        name: `Let's Play`,
        gitHub: 'https://github.com/AdmiralCrunchy/LetsPlay_ProjOne_UW',
        hasApp: true,
        appLink: 'https://admiralcrunchy.github.io/LetsPlay_ProjOne_UW/',
        photoLink: 'https://1000logos.net/wp-content/uploads/2020/08/Logo-Steam.jpg',
        schoolProj: true,
        description: 'One of the first major projects that I worked on in the University of Washington Coding Bootcamp. This was a website that used an API to grab steam sales as well as displaying Wikipedia Articles and links for the steam and metacritic pages.'
    },
    {
        id: 3,
        name: 'Quiz Game',
        gitHub: 'https://github.com/AdmiralCrunchy/Quiz_Game_Challege_VT',
        hasApp: true,
        appLink: 'https://admiralcrunchy.github.io/Quiz_Game_Challege_VT/',
        photoLink: 'https://c8.alamy.com/comp/2AH76JH/online-quiz-color-icon-play-intellectual-game-lottery-online-test-computer-games-isolated-vector-illustration-2AH76JH.jpg',
        schoolProj: true,
        description: 'A fun quiz game!' 
    },
    {
        id: 2,
        name: 'Appointment Scheduler',
        gitHub: 'https://github.com/AdmiralCrunchy/Third_Party-Schedule_API_VT',
        hasApp: true,
        appLink: 'https://admiralcrunchy.github.io/Third_Party-Schedule_API_VT/',
        photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrScPZYKB1Oy7GgInUgg-XWWAaYU145zB8ag&usqp=CAU',
        schoolProj: true,
        description: 'This was an appointment scheduler that grabbed time of day data and updated its visuals accordingly. Data was saved from each use with local storage.' 
    },
    {
        id: 1,
        name: 'Old Portfolio',
        gitHub: 'https://github.com/AdmiralCrunchy/Professional_Portfolio_Mock_VT/',
        hasApp: true,
        appLink: 'https://admiralcrunchy.github.io/Professional_Portfolio_Mock_VT/',
        photoLink: 'https://thumbs.dreamstime.com/b/business-people-meeting-discussion-working-office-concept-65007656.jpg',
        schoolProj: false,
        description: 'This was the first iteration of my resume, put together using basic HTML & CSS.' 
    },
]

function App(){
    return( 
        <div className='port'>
            <Projects prevProjects={prevProjects} />;
        </div>
    )
}

export default App;