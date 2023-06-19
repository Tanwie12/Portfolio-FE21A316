
import {useState} from 'react';
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


function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

 
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

<Header/>

    
  

<Navbar/>
<About/>
<Experience/>
<Services/>


<Portfolio/>
<Testimonial/>
<Contact/>
<Footer/>
<AnimatedCursor/>
     
    </div>
    </>
  );
}

export default App;