// App.jsx
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';

const App = () => (
  <>
    <Header /> {/* 3D model will be inside the Header */}
    <div style={{ height: '100vh', background: '#f0f0f0' }}>
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* Additional content like projects, etc., can go here */}
    </div>
  </>
);

export default App;
