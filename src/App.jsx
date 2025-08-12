import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Project from './Components/Project/Project.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App