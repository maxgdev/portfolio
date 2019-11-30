import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import SkillSet from './SkillSet'
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
      <SkillSet/>
      <Footer/>
    </div>
  );
}
export default App;
