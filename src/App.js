

import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {
  
 
  console.log(process.env.REACT_APP_API_PATH);
  return (
    <div className="App">
    <>
  
<Header/>
<Navbar/>
<About/>
<Experience/>
<Services/>


<Portfolio/>
<Testimonial/>
<Contact/>
<Footer/>
</>
     
    </div>
  );
}

export default App;
