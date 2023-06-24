
import {useState,useEffect} from 'react';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import AnimatedCursor from './components/GhostMouse/GhostMouseEffect'
import './App.css';
import { MyComponent } from './components/Vannda/VandaGlobe';
import RevealContent from './components/RevealEffect/RevealContent';
import ScrollReveal from 'scrollreveal';


function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (!isMobile) {
    ScrollReveal().reveal('.show-once', {
      reset: false,
    });

    ScrollReveal().reveal('.title', {
      reset: false,
      duration: 3000,
      origin: 'top',
      distance: '300px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      rotate: {
        x: 20,
        z: -10,
      },
    });

    ScrollReveal().reveal('.fade-in', {
      reset: false,
      duration: 5000,
      move: 0,
    });

    ScrollReveal().reveal('.scaleUp', {
      reset: false,
      duration: 4000,
      scale: 0.85,
    });

    ScrollReveal().reveal('.flip', {
      reset: false,
      delay: 500,
      duration: 2000,
      rotate: {
        x: 20,
        z: 20,
      },
    });

    ScrollReveal().reveal('.slide-right', {
      reset: false,
      duration: 3000,
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.slide-up', {
      reset: false,
      
      duration: 2000,
      origin: 'bottom',
      distance: '100px',
      easing: 'cubic-bezier(.37,.01,.74,1)',
      opacity: 0.3,
      scale: 0.5,
    });
    ScrollReveal().reveal('.slide-left', {
      reset: false,
      duration: 2000,
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.slide-right', {
      reset: false,
      duration: 2000,
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
    });

    ScrollReveal().reveal('.slide-bottom', {
      reset: false,
      duration: 2000,
      origin: 'top',
      distance: '100px',
      easing: 'cubic-bezier(.37,.01,.74,1)',
      opacity: 0.3,
      scale: 0.5,
    });
  }
  }, []);
 
  return (
    <>
    
  
  <div className={`App cursor ${darkMode ? 'dark-mode' : ''}`}>
   
   <div className="switch-container">
 <label className="switch-label" htmlFor="darkSwitch">
 
 </label>
 <label className={`switch-checkbox ${darkMode ? 'checked' : ''}`} htmlFor="darkSwitch">
   <input
     type="checkbox"
     className="switch-input"
     id="darkSwitch"
     checked={darkMode}
     onChange={handleDarkModeToggle}
   />
   <span className="switch-slider"></span>
 </label>
</div>
<MyComponent/>
<RevealContent/>

<Header/>

    
  

<Navbar/>
<RevealContent className='slide-up'>
          <About />
        </RevealContent>

        <RevealContent className='scaleUp'>
          <Experience />
        </RevealContent>

        <RevealContent className='slide-left'>
          <Services />
        </RevealContent>

        <RevealContent className='slide-left'>
          <Portfolio />
        </RevealContent>

        <RevealContent className='slide-left'>
          <Testimonial />
        </RevealContent>

        <RevealContent className='slide-bottom'>
          <Contact />
        </RevealContent>
        <RevealContent className='slide-up'>
<Footer/>
</RevealContent>
<AnimatedCursor/>
     
    </div>
    </>
  );
}

export default App;