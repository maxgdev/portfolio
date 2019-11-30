import React from 'react';
import './App.css';
import fruitCake from './images/fruitcake.jpg';
import projects from './images/projects.jpg';
import codeScreen from './images/codescreen.jpg';
import keyboardMouse from './images/keyboardmouse.jpg';
import macLaptop from './images/maclaptop.jpg';
import tablet from './images/tablet.jpg';

export default function MainContent() {
    return (
    <>
      <main>
        <section className='sectionContainer'>
          <div className='sectionItem'>
            <img src={fruitCake} alt='about me' />
            <div className='overlay'>About Me</div>
          </div>
          <div class='card-container'>
            <div class='card'>
                <figure class='front'>
                <img src={macLaptop} alt='Kodflix' />
                    <div className=''>
                        <h1>Kodflix</h1>
                        <p>Kodflix is a project build as part of Kodiri's 8 Week React Bootcamp</p>
                    </div> 
                </figure>
                <figure class='back'>
                        <h1>Technologies</h1>
                        <p><i>icon</i>HTML/CSS<i>icon</i></p>
                        <p><i>icon</i>React.js v16.8.x</p>
                        <p><i>icon</i>heroku hosting</p>
                </figure>
            </div>
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
    </>);
}
