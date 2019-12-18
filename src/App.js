import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import SkillSet from './SkillSet'
import Footer from './Footer';
import About from './About'
import Header from './Header'
import SectionHeader from './SectionHeader';
// import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <SectionHeader title='Projects' id='Projects'/>
      <MainContent/>
      <SectionHeader title='About' id='About'/>
      <About/>
      <SectionHeader title='Skillset' id='Skillset'/>
      <SkillSet/>
      {/* <SectionHeader title='Contact Me' id='Contact'/> */}
     
      <Footer/>
    </div>
  );
}
export default App;
