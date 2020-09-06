import React from 'react';
import Job1 from '../assets/images/job-1.png'
import Job2 from '../assets/images/job-2.png'
import Job3 from '../assets/images/jop-3.png'
import Job4 from '../assets/images/job-4.png'
import { useContext } from 'react';
import { PortfolioContext } from '../contexts/PortfolioContext';
import { v4 as uuidv4 } from 'uuid';
const Portfolio = () => {
    const {items} = useContext(PortfolioContext);
    return ( 
        <section className="portfolio" id="portfolio" data-aos="fade-up">
            <div className="container" >
                <div className="heading" data-before-content="3">Some Things I've Built</div>
                
                <div className="content">
                
                    <div className="align" > 
                        <div className="cont-container">
                            <div className="image">
                            <a href="https://kuzluk.co">
                            
                                <div className="img-filter">
                                    <div className="bg-layer"></div>
                                    <img src={Job1} alt=""/>
                                </div>
                                </a>
                            </div>
                            <div className="text">
                                <span>Featured Project</span>
                                <h4><a href="https://kuzluk.co" target="_blank">Kuzluk</a></h4>
                                <p>Design and develope webiste for creative company called Kuzluk based in Istanbul, Turkey. A group of young marketers who combine enthusiasm, madness, shared faith in digital marketing, a blend of experience, and fun. Our main objective is to understand the activities of companies in different sectors the problems they encounter through advanced software and analytical tools and to design appropriate solutions that ensure sustainability and trust. </p>
                                <div className="tech">
                                    <ul>
                                    
                                    <li>WordPress</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JaveScript</li>
                                    </ul>
                                </div>
                                <div className="links">
                                    <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                                    <a href="https://kuzluk.co"><ion-icon name="expand-outline"></ion-icon></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="align" > 
                        <div className="cont-container">
                            <div className="image">
                            <a href="http://multiaidprograms.org/">
                            
                                <div className="img-filter">
                                    <div className="bg-layer"></div>
                                    <img src={Job2} alt=""/>
                                </div>
                                </a>
                            </div>
                            <div className="text">
                                <span>Featured Project</span>
                                <h4><a href="http://multiaidprograms.org/" target="_blank">Multi Aid Programs</a></h4>
                                <p>Design and develope webiste for non-governmental organization registered in Lebanon since 2013.operate in marginalized communities across Bekaa and Arsal, providing health, relief, education &amp; continuing education to Syrian refugees</p>
                                <div className="tech">
                                    <ul>
                                    
                                    <li>WordPress</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JaveScript</li>
                                    </ul>
                                </div>
                                <div className="links">
                                    <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                                    <a href="http://multiaidprograms.org/"><ion-icon name="expand-outline"></ion-icon></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>


                    <div className="align" > 
                        <div className="cont-container">
                            <div className="image">
                            <a href="https://www.peanutbuttercollection.com/">
                            
                                <div className="img-filter">
                                    <div className="bg-layer"></div>
                                    <img src={Job4} alt=""/>
                                </div>
                                </a>
                            </div>
                            <div className="text">
                                <span>Featured Project</span>
                                <h4><a href="https://www.peanutbuttercollection.com/" target="_blank">Peanut Butter Collection</a></h4>
                                <p>Design and develope webiste for creative company called Peanut butter collection based in Los Angeles, US. Peanut Butter Collection is a Special Occasion wear for Kids, Young Men and Women!! We are on the cutting edge of fashion. </p>
                                <div className="tech">
                                    <ul>
                                    
                                    <li>Shopify</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JaveScript</li>
                                    </ul>
                                </div>
                                <div className="links">
                                    <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                                    <a href="https://www.peanutbuttercollection.com/"><ion-icon name="expand-outline"></ion-icon></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>


                    <div className="align" > 
                        <div className="cont-container">
                            <div className="image">
                            <a href="https://easyquranlb.com/">
                            
                                <div className="img-filter">
                                    <div className="bg-layer"></div>
                                    <img src={Job3} alt=""/>
                                </div>
                                </a>
                            </div>
                            <div className="text">
                                <span>Featured Project</span>
                                <h4><a href="https://easyquranlb.com/" target="_blank">Easy Quran Store</a></h4>
                                <p>Design and develope webiste for creative company called Dar Al Maarefah based in Lebanon,Turkey and Syria.Easy Quran Store is a first website that serve Muslim to get there Quran Online on Lebanon. 
                                The owner need to give his customers a big choices to choose what they want so the website had a lot of categories and products arranged to be easy to get the right choice.    </p>
                                <div className="tech">
                                    <ul>
                                    
                                    <li>WordPress</li>
                                    <li>WooCommerce</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JaveScript</li>
                                    </ul>
                                </div>
                                <div className="links">
                                    <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                                    <a href="https://easyquranlb.com/"><ion-icon name="expand-outline"></ion-icon></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                    


                </div>
            </div>
        </section>
     );
}
 
export default Portfolio;