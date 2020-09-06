import React from 'react';

const Hero = () => {
    return ( 
        <section className="hero" data-aos="fade-up">
            <div className="container">
                <span>Hi, my name is </span>
                <h1 className="light">Mohammad Khoulani</h1>
                <h1 className="dark">I build things for the web.</h1>
                <p>I'm a Front end developer based in Beirut, Lebanon specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
                <a href="mailto:mhmmdkholani@gmail.com" className="custom-btn btn">Get in touch</a>
            </div>
        </section>
        
     );
}
 
export default Hero;