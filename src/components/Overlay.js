import React from 'react';

const Overlay = () => {
    return ( 

        <section className="overlay">
            <div className="left">
                <ul>
                    <li><a href="#"><ion-icon name="logo-github"></ion-icon></a></li>
                    <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    <li><a href="#"><ion-icon name="logo-youtube"></ion-icon></a></li>
                    <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                </ul>
            </div>
            <div className="right">
               <div className="rotate"> <span><a href="#">mhmmdkholain@gmail.com</a></span></div>
            </div>

        </section>
     );
}
 
export default Overlay;