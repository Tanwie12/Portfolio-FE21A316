import React, { useState, useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

export const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      
    };

    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: window.innerWidth <= 600 ? 900.0 : 600.0,
          minWidth: window.innerWidth <= 600 ? 150.0 : 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the effect and event listener on component unmount
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [vantaEffect]);

  return <div ref={vantaRef}></div>;
};
