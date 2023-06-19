import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const RevealContent = ({ children, className }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isMobile) {
      const revealOptions = {
        reset: true,
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        opacity: 0,
        delay: 200,
        interval: 100,
        viewFactor: 0.3,
        once: true,
      };

      ScrollReveal().reveal(revealRef.current, revealOptions);
    }
  }, []);

  return <div ref={revealRef} className={className}>{children}</div>;
};

export default RevealContent;
