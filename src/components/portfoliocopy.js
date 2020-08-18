import React from 'react';
import Job1 from '../assets/images/job-1.png'
import { useContext } from 'react';
import { PortfolioContext } from '../contexts/PortfolioContext';
import { v4 as uuidv4 } from 'uuid';
const Portfolio = () => {
    const {items} = useContext(PortfolioContext);
    return ( 
        <section className="portfolio">
            <div className="container" >
                <div className="heading" data-before-content="3">Some Things I've Built</div>
                
                <div className="content">
                {items.map(item => {
                   return <div className="align" key={item.id}> 
                        <div className="cont-container">
                            <div className="image">
                            <a href="#">
                            
                                <div className="img-filter">
                                    <div className="bg-layer"></div>
                                    <img src={item.image.url} alt=""/>
                                </div>
                                </a>
                            </div>
                            <div className="text">
                                <span>Featured Project</span>
                                <h4>{item.title}</h4>
                                <p>A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.</p>
                                <div className="tech">
                                    <ul>
                                    {item.tech.split(',').map(te => {
                                        return <li key={uuidv4()}>{te}</li>
                                    })}
                                        
                                    </ul>
                                </div>
                                <div className="links">
                                    <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                                    <a href="#"><ion-icon name="expand-outline"></ion-icon></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                })}
                    


                </div>
            </div>
        </section>
     );
}
 
export default Portfolio;