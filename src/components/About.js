import React from 'react';
import Profile from '../assets/images/profile.jpg'


const About = () => {
    return ( 
        <section className="about" id="about" data-aos="fade-up">
            <div className="container">
                <div className="heading" data-before-content="1">
                About Me
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="text">
                            <p>Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
                            <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
                            <p>Shortly after graduating from <a href="#">Northeastern University</a>, I joined the engineering team at <a href="#">Upstatement</a> where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
                            <p>Here are a few technologies I've been working with recently:</p>

                            <ul>
                                <li>JavaScript (ES6 +)</li>
                                <li>React js</li>
                                <li>Node js</li>
                                <li>PHP</li>
                                <li>Asp.Net core</li>
                                <li>HTML & CSS</li>
                                <li>Wordpress</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <a href="#">
                            <div className="image-container">
                                
                                <div className="img-filter">
                                    <div className="bg-layer"></div>
                                    <img src={Profile} alt="Profile photo"/>
                                </div>
                                <div className="back-border"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;