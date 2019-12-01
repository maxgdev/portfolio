import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import SkillSet from './SkillSet'
import Footer from './Footer';
import About from './About'
import Header from './Header'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <MainContent/>
      <About/>
      <SkillSet/>
      <Footer/>
    </div>
  );
}
export default App;
