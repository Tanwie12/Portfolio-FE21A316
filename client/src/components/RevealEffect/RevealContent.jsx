// RevealContent.js

import React, { useEffect, useRef } from 'react';
import './RevealContent.css';
import ScrollReveal from 'scrollreveal';

const RevealContent = ({ children, className }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const revealElement = elementRef.current;
    const revealConfig = {
      reset: true,
    };

    ScrollReveal().reveal(revealElement, revealConfig);

    return () => {
      ScrollReveal().destroy(revealElement);
    };
  }, []);

  return (
    <div className={`reveal-content ${className}`} ref={elementRef}>
      {children}
    </div>
  );
};

export default RevealContent;
