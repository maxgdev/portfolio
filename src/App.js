import React from 'react';
import './App.css';
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
          <li class="logo"><a href="a">MaxG</a></li>
          <li class="item"><a href="a">Home</a></li>
          <li class="item"><a href="a">About</a></li>
          <li class="item"><a href="a">Resume</a></li>
          <li class="item"><a href="a">Projects</a></li>
          <li class="item"><a href="a">Blog</a></li>
          <li class="item"><a href="a">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section className='sectionContainer'>
          <div className='sectionItem'>
            <img src={fruitCake} alt='about me' />
            <div className='overlay'>About Me</div>
          </div>
          <div className='sectionItem'>
            <img src={macLaptop} alt='lorem ipsum' />
            <div className='overlay'>Projects</div>
          </div>
          <div className='sectionItem'>
            <img src={keyboardMouse} alt='lorem ipsum' />
            <div className='overlay'>Resume</div>
          </div>
        </section>
        <section  className='sectionContainer'>
          <div className='sectionItem'>
            <img src={projects} alt='projects' />
            <div className='overlay'>Blog</div>
          </div>
          <div className='sectionItem'>
            <img src={codeScreen} alt='lorem ipsum' />
            <div className='overlay'>Skillset</div>
          </div>
          <div className='sectionItem'>
            <img src={tablet} alt='lorem ipsum' />
            <div className='overlay'>Contact</div>
          </div>
        </section>  
      </main>
      <footer className=''>
        <a href='/'>Back to Top</a>
      </footer>
    </div>
  );
}

export default App;
