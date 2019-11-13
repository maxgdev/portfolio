import React from 'react';
import './App.css';
import aboutMe from './images/aboutme.jpg';
import projects from './images/projects.jpg';
function App() {
  return (
    <div className="App">
      <nav>
        <ul class="menu">
          <li class="logo"><a href="#">MaxGDev</a></li>
          <li class="item"><a href="#">Home</a></li>
          <li class="item"><a href="#">About</a></li>
          <li class="item"><a href="#">Resume</a></li>
          <li class="item"><a href="#">Projects</a></li>
          <li class="item"><a href="#">Blog</a></li>
          <li class="item"><a href="#">Contact</a></li>
        </ul>
      </nav>
      <header className="header">

      </header>
      <main>
        <section>
          <div className='sectionItem'>
            <img src={aboutMe} alt='about me' />
            <div className='overlay'></div>
          </div>
          <div className='sectionItem'>
            <img src={aboutMe} alt='about me' />
            <div className='overlay'></div>
          </div>
          <div className='sectionItem'>
            <img src={aboutMe} alt='about me' />
            <div className='overlay'></div>
          </div>
        </section>
        <section>
          <div className='sectionItem'>
            <img src={projects} alt='projects' />
            <div className='overlay'></div>
          </div>
          <div className='sectionItem'>
            <img src={projects} alt='projects' />
            <div className='overlay'></div>
          </div>
          <div className='sectionItem'>
            <img src={projects} alt='projects' />
            <div className='overlay'></div>
          </div>
        </section>  
      </main>
    </div>
  );
}

export default App;
