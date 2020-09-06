import React from 'react';
import "react-web-tabs/dist/react-web-tabs.css";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";


const WorkHistoru = () => {
   
    
    return ( 

        <section className="work-history" id="work-history" data-aos="fade-up">
            <div className="container">
                <div className="content">
                    <div className="heading" data-before-content="2">Where I've Worked</div>
                    <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
                        <TabList>
                        <Tab tabFor="vertical-tab-one">Freelance</Tab>
                        <Tab tabFor="vertical-tab-2">Kuzluk</Tab>
                        <Tab tabFor="vertical-tab-3">Maps</Tab>
                        
                        </TabList>
              
                        <TabPanel tabId="vertical-tab-one">
                            <div className="job-heading">
                                <h5>Front End Web Developer<span><a href="#"> @ Self Employeed</a></span></h5>
                                <p>July 2017</p>
                            </div>
                            <div className="job-des">
                                <ul>
                                    <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                                    <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify</li>
                                    <li>Develop new user-facing features</li>
                                    <li>Build reusable code and libraries for future use</li>
                                    <li>Ensure the technical feasibility of UI/UX designs</li>
                                    <li>Optimize application for maximum speed and scalability</li>
                                    <li>Assure that all user input is validated before submitting to back-end</li>
                                </ul>
                            </div>
                        </TabPanel>
                
                        <TabPanel tabId="vertical-tab-2">
                            <div className="job-heading">
                                    <h5>Web Developer<span><a href="http://multiaidprograms.org/">@MAPs</a></span></h5>
                                    <p>July 2018 - January 2020</p>
                                </div>
                                <div className="job-des">
                                    <ul>
                                        <li>Training and teaching latest Fornt End Technologies</li>
                                        <li>Build The whole website for the Company</li>
                                        <li>Develop, Mintaince and optamize website</li>
                                        <li>Emails designing for whole campaignes and events</li>
                                    </ul>
                                </div>
                        </TabPanel>
                
                        <TabPanel tabId="vertical-tab-3">
                        <div className="job-heading">
                                <h5>Web Devrloper<span><a href="https://kuzluk.co">@Kuzluk</a></span></h5>
                                <p>July - Dec 2016</p>
                            </div>
                            <div className="job-des">
                                <ul>
                                    <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                                    <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify</li>
                                    <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                                </ul>
                            </div>
                        </TabPanel>
                        
                  </Tabs>
                        
                </div>
            </div>
        
        </section>
     );
}
 
export default WorkHistoru;