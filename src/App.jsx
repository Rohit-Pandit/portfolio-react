import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App