import React, { useState, useEffect } from 'react';
import Project from './components/project';
import Contact from './components/contact';
import About from './components/about';
import { Route } from 'react-router-dom';

const App = () => {
  const [projects, setProjects] = useState([]);

  
  useEffect(() => {
    
    const mockProjects = [
      {
        name: 'Portfolio',
        screenshot: './images/pic2.png',
        url: 'https://github.com/Revathi1511',
        description: 'Please find my gitHub for the web development projects.',
        languages: ['React', 'JavaScript'],
      },
      // Add more projects here
    ];
    setProjects(mockProjects);
  }, []);

  return (
    <div className="app">
      <header>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/about/" element={<About />} />
        </Routes> */}
        <h1>Revathi Ravi</h1>
        <p>Desired Role: Web Developer</p>
      </header>
      <main>
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        <Contact />
      </main>
    </div>
  );
};

export default App;
