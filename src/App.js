import React from 'react';
import './App.css';
import aboutMe from './images/aboutme.jpg';
import fruitCake from './images/fruitcake.jpg';
import projects from './images/projects.jpg';
import codeScreen from './images/codescreen.jpg';
import keyboardMouse from './images/keyboardmouse.jpg';
import macLaptop from './images/maclaptop.jpg';
import tablet from './images/tablet.jpg';

function App() {
  return (
    <div className="App">
      <nav>
        <ul class="menu">
          <li class="logo"><a href="a">MaxGDev</a></li>
          <li class="item"><a href="a">Home</a></li>
          <li class="item"><a href="a">About</a></li>
          <li class="item"><a href="a">Resume</a></li>
          <li class="item"><a href="a">Projects</a></li>
          <li class="item"><a href="a">Blog</a></li>
          <li class="item"><a href="a">Contact</a></li>
        </ul>
      </nav>
      <header className="header">

      </header>
      <main>
        <section className='sectionContainer'>
          <div className='sectionItem'>
            <img src={fruitCake} alt='about me' />
            <div className='overlay'></div>
          </div>
          <div className='sectionItem'>
            <img src={macLaptop} alt='lorem ipsum' />
            <div className='overlay'></div>
          </div>
          <div className='sectionItem'>
            <img src={keyboardMouse} alt='lorem ipsum' />
            <div className='overlay'></div>
          </div>
        </section>
        <section  className='sectionContainer'>
          <div className='sectionItem'>
            <img src={projects} alt='projects' />
            <div className='overlay'></div>
          </div>
          <div className='sectionItem'>
            <img src={codeScreen} alt='lorem ipsum' />
            <div className='overlay'></div>
          </div>
          <div className='sectionItem'>
            <img src={tablet} alt='lorem ipsum' />
            <div className='overlay'></div>
          </div>
        </section>  
      </main>
    </div>
  );
}

export default App;
