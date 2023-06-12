import React from 'react'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Sociallinks from './components/Sociallinks';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Experties from './pages/Experties';
import Contact from './pages/Contact';

 function App () {
  return (
    <div>
     <Navbar/> 
    <Home/>
    <About/>
    <Portfolio/>
    <Experties/>
    <Contact/>
    <Sociallinks/>
    </div>
  )
}
export default App;