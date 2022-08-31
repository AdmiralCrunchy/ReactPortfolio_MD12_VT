import React from 'react';
import PortfolioCards from '../PortfolioCard.js';
import '../../../css/project.css'

function Portfolio(){
    return (
        <div className='port'>
            <h1> Portfolio </h1>
            <PortfolioCards />
        </div>
    )
}

export default Portfolio;