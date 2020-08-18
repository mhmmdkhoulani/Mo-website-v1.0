import React from 'react';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Overlay from './components/Overlay';
import About from './components/About';
import WorkHistory from './components/WorkHistory' 
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioContextProvider from './contexts/PortfolioContext';
import {BrowserRouter} from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Overlay />
        <About />
        <WorkHistory />
        <PortfolioContextProvider>
        <Portfolio />
        </PortfolioContextProvider>
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
