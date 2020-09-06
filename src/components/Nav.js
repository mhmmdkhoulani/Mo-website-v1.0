import React from 'react';
import Logo from '../assets/images/logo.svg';

const Navbar = () => {

    //sticky navabar 

    const ele = document.getElementsByClassName("navbar-style");
    const ele1 = document.getElementsByClassName("nav-mobile-larg");
    var lastScrollTop = 0;
    window.addEventListener("scroll", function(){ 
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
        for(var i = 0; i < ele.length; i++)
        {
            ele[i].classList.add('up');
            
        }
        for(var i = 0; i < ele1.length; i++)
        {
            ele1[i].classList.add('up');
            
        }
    } else {
        ele[0].classList.remove("up");
        ele1[0].classList.remove("up");
    }
    if(window.scrollY !== 0) {
        for(var i = 0; i < ele.length; i++)
        {
            ele[i].classList.add('shadow');
            
        }
        for(var i = 0; i < ele1.length; i++)
        {
            ele1[i].classList.add('shadow');
            
        }
    }else {
        ele[0].classList.remove("shadow");
        ele1[0].classList.remove("shadow");
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }, false);

      // click navbara action 
    function handleClik() {
        let element = document.getElementsByClassName("toggler-bar");
        let nav = document.getElementsByClassName("nav-mobile");
        for(var i = 0; i < element.length; i++)
            {
                element[i].classList.add('active');
                
            }
            for(var i = 0; i < nav.length; i++)
            {
                nav[i].classList.add('active');
            }
    }
    function handleClikRemove() {
        let element = document.getElementsByClassName("toggler-bar");
        let nav = document.getElementsByClassName("nav-mobile");
        nav[0].classList.remove("active");
        element[0].classList.remove("active");
    }
    return ( <div>
                <div className="navbar-style" >
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} width="50" height="50" alt="" loading="lazy" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active" data-before-content="1">
                               
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item" data-before-content="2">
                                <a className="nav-link" href="#work-history">Experience</a>
                            </li>
                            <li className="nav-item" data-before-content="3">
                                <a className="nav-link" href="#portfolio">Work</a>
                            </li>
                            <li className="nav-item" data-before-content="3">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item resume-btn">
                                <a className="nav-link" href="https://bit.ly/32Yu9pT">Resume </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                </div>
                

                <div className="nav-mobile-larg">
                    <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} width="50" height="50" alt="" loading="lazy" />
                    </a>
                    <div className="navbar-nav toggler-bar ml-auto" onClick={handleClik}>
                        <ul>
                            <li><span className="f"></span></li>
                            <li><span className="s"></span></li>
                            <li><span className="t"></span></li>
                        </ul>
                        
                    </div>
                    </nav>
                </div>
                <div className="nav-mobile">
                    <div className="x" onClick={handleClikRemove}>
                    <ion-icon name="close-outline"></ion-icon>
                    </div>
                    <div className="item-mobile" data-before-content="1"><a href="#about">About</a></div>
                    <div className="item-mobile" data-before-content="2"><a href="#work-history">Experience</a></div>
                    <div className="item-mobile" data-before-content="3"><a href="#portfolio">Work</a></div>
                    <div className="item-mobile" data-before-content="4"><a href="#contact">Contetn</a></div>
                    <div className=" "><a className="resume-btn" href="https://bit.ly/32Yu9pT">Resume</a></div>
                   
                </div>
        </div>
        
     );
}
 
export default Navbar;