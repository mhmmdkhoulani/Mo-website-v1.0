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
                        <Tab tabFor="vertical-tab-one">Kuzluk</Tab>
                        <Tab tabFor="vertical-tab-2">MAPs</Tab>
                        <Tab tabFor="vertical-tab-3">Maps</Tab>
                        
                        </TabList>
              
                        <TabPanel tabId="vertical-tab-one">
                            <div className="job-heading">
                                <h5>Web developer <span><a href="#">@Kuzluk</a></span></h5>
                                <p>July - Dec 2016</p>
                            </div>
                            <div className="job-des">
                                <ul>
                                    <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                                    <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify</li>
                                    
                                </ul>
                            </div>
                        </TabPanel>
                
                        <TabPanel tabId="vertical-tab-2">
                            <div className="job-heading">
                                    <h5>Front End Developer <span><a href="#">@MAPs</a></span></h5>
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
                
                        <TabPanel tabId="vertical-tab-3">
                        <div className="job-heading">
                                <h5>Front End Trainer <span><a href="#">@MAPs</a></span></h5>
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