import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

import './services.css'
import {BiCheck}  from 'react-icons/bi'


function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(containerRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });
  }, []);
    return (
      <section id='services'>

      <h5 className=''>
        what i offer</h5>
      <h2>Services</h2>
      <div className=" container services__container">
     <article className='service'ref={containerRef}>
      <div className="service__head">
        <h3>UI/UX Design</h3>
      </div>
      <ul className='service__list'> 

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 

        </ul>
     </article>
     {/* END OF UI/UX */}
     <article className='service' ref={containerRef}>
      <div className="service__head">
        <h3>WEB DEVELOPMENT</h3>
      </div>
      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 

        </ul>
     </article>
     {/* END OD WEB */}
     <article className='service'ref={containerRef}>
      <div className="service__head">
        <h3>APP DEVELOPMENT</h3>
      </div>
      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 
          <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          </li> 

        </ul>
     </article>
      </div>
  
    </section>
  )
}

export default Services