import React from 'react';

const Projects = () => {
    return ( 
        <section className="projects" id="Projects" data-aos="fade-up">
            <div className="container">
               <h2>Other Projects</h2>
               <a href="#" className="archive">Archive</a>

                <div className="row">
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="project-card">
                            <div className="header">
                                <ion-icon name="folder-open-outline"></ion-icon>
                                <div className="links">
                                    <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                                    <a href="#"><ion-icon name="expand-outline"></ion-icon></a>
                                </div>
                               
                            </div>
                            <div className="text">
                                <h4><a href="https://basamatfd.org/" target="_blank"> Basamat orgnization</a></h4>
                                <p>A Website to show what the Bassamat Foundation is achieving and what it does
                                </p>
                                <ul>
                                    <li>PHP</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>   
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="project-card">
                            <div className="header">
                                <ion-icon name="folder-open-outline"></ion-icon>
                                <div className="links">
                                    <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                                    <a href="#"><ion-icon name="expand-outline"></ion-icon></a>
                                </div>
                               
                            </div>
                            <div className="text">
                                <h4><a href="http://digitalfingerprintlb.com/" target="_blank">Digital Fingerprint</a></h4>
                                <p>Onilne system for managing customers and orders and showing all products and services offered by this shop </p>
                                <ul>
                                    <li>jQeury</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>   
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="project-card">
                            <div className="header">
                                <ion-icon name="folder-open-outline"></ion-icon>
                                <div className="links">
                                    <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                                    <a href="#"><ion-icon name="expand-outline"></ion-icon></a>
                                </div>
                               
                            </div>
                            <div className="text">
                                <h4><a href="https://www.bfestore.com/" target="_blank">Butterfly store</a></h4>
                                <p>
                                The first online store system in Syria, helps order and manage all your products with order tracking</p>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>   
                    </div>

                    <div className="col-md-4" data-aos="fade-up">
                        <div className="project-card">
                            <div className="header">
                                <ion-icon name="folder-open-outline"></ion-icon>
                                <div className="links">
                                    <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                                    <a href="#"><ion-icon name="expand-outline"></ion-icon></a>
                                </div>
                               
                            </div>
                            <div className="text">
                                <h4><a href="http://haremlikcenter.com/" target="_blank">Haremlik Salon</a></h4>
                                <p>An online system to manage all the services provided by the salon, such as
                                Gym, coffee and beauty services</p>
                                <ul>
                                    <li>WordPress</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>   
                    </div>
                </div>

                
                
                <div className="more">
                    <a href="#" className="custom-btn btn" style={{display: "none"}}>Show more</a>
                </div>
                
            </div>
        </section>
     );
}
 
export default Projects;