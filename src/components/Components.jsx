import React, { useEffect, useState } from 'react';



import Portfolio from './portfolio/Portfolio';

import Services from './services/Services';
import About from './about/About';
import Experience from './experience/Experience';

function MyComponent() {
  const [visibleComponents, setVisibleComponents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadComponents();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loadComponents = () => {
    setLoading(true);
    // Simulating an API call delay
    setTimeout(() => {
      const componentsToLoad = [];
      // Determine the number of components to load for the current page
      const componentsPerPage = 10;
      const startIndex = (page - 1) * componentsPerPage;

      for (let i = startIndex; i < startIndex + componentsPerPage; i++) {
        const componentIndex = i % 4;
        if (componentIndex === 0) {
          componentsToLoad.push(<About key={i} />);
        } else if (componentIndex === 1) {
          componentsToLoad.push(<Experience key={i} />);
        } else if (componentIndex === 2) {
          componentsToLoad.push(<Services key={i} />);
        } else {
          componentsToLoad.push(<Portfolio key={i} />);
        }
      }
      

      setVisibleComponents(prevComponents => [...prevComponents, ...componentsToLoad]);
      setPage(prevPage => prevPage + 1);
      setLoading(false);
    }, 1000); // Adjust the delay as needed
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 200) {
      loadComponents();
    }
  };

  return (
    <div>
      {visibleComponents}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default MyComponent;
