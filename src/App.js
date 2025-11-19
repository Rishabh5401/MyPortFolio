// src/App.js
import React from 'react';

// Component Imports
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

// Data Imports
import { 
  personalInfo, 
  skills, 
  experience, 
  projects, 
  education 
} from './data/portfolioData'; 

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30">
      <Navigation />
      <main>
        {/* We pass data into components as "props" */}
        <Hero personalInfo={personalInfo} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Education education={education} />
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default App;