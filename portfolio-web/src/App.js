import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React, { useEffect } from 'react';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Aos from 'aos';
import "aos/dist/aos.css";
import react from 'react';


// import './App.css';

function App() {
  
 
 useEffect(() =>
  {
    Aos.init();
   
  }, [ ])
  return (
    <div  >
      <Navbar/>
      <div className='container'>
      <Home/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contacts/>
      </div>
    
    </div>
  );
}

export default App;
