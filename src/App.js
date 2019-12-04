import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import SkillSet from './SkillSet'
import Footer from './Footer';
import About from './About'
import Header from './Header'
import SectionHeader from './SectionHeader';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <SectionHeader title='Projects' id='Projects'/>
      <MainContent/>
      <SectionHeader title='About'cid='About'/>
      <About/>
      <SectionHeader title='Skillset' id='Skillset'/>
      <SkillSet/>
      <Footer/>
    </div>
  );
}
export default App;
