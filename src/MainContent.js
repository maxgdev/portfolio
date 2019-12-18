import React from 'react';
import './App.css';
import kodflix from './images/kodflix.png';
import projects from './images/projects.jpg';
import codeScreen from './images/codescreen.jpg';
import keyboardMouse from './images/keyboardmouse.jpg';
import macLaptop from './images/maclaptop.jpg';
import tablet from './images/tablet.jpg';
import pomodoro from './images/pomodoro.png'
import khamithealth from './images/khamithealth.png'
import wajudah from './images/wajudah.png'
import jscalculator from './images/jscalculator.png'
import brainjs from './images/brainjs.png'
import htmlaudiotag from './images/htmlaudiotag.png'
// import fertility from './images/fertility.jpg'
import D3 from './images/d3.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fab, faCss3, faHtml5, faCode, faCodepen, faGithub, faJs, faReact, faJsSquare, faWordpress,
  faAws, faBootstrap, faLinkedin, faYoutube, faPhp, faNodeJs, faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faDatabase, faCog } from '@fortawesome/free-solid-svg-icons'
library.add(fab);

export default function MainContent() {
  return (
    <>
      <main id='projects' className='mainContainer'>
        {/* <section className='mainContainer'> */}

        <div class='card-container'>
          <div class='card'>
            <figure class='front'>
              <img src={kodflix} alt='Kodflix' />
              <div className='overlay light'>
                <h1>Kodflix</h1>
              </div>
            </figure>
            <figure class='back'>
              <div className='pulse'>
                <h1>Technologies</h1>
                <p>
                  <span className='fontAwesome'><FontAwesomeIcon icon={faHtml5} /></span>/
                    <span className='fontAwesome'><FontAwesomeIcon icon={faCss3} /></span>
                  HTML/CSS
                  </p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact} /></span>React.js v16.8.x</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faCloud} /></span>heroku hosting</p>
                <h3>Kodflix is a project built as part of Kodiri's 8 Week React Bootcamp</h3>
                <a href='https://kodflix-maxgdev.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Visit Site</a>
              </div>
            </figure>
          </div>
        </div>

        <div class='card-container'>
          <div class='card'>
            <figure class='front'>
              <img src={codeScreen} alt='Tap Social' />
              <div className='overlay light'>
                <h1>TAP Social</h1>
              </div>
            </figure>
            <figure class='back'>
              <div className='pulse'>
                <h1>Technologies</h1>
                <p>
                  <span className='fontAwesome'><FontAwesomeIcon icon={faHtml5} /></span>/
                    <span className='fontAwesome'><FontAwesomeIcon icon={faCss3} /></span>
                  HTML/CSS
                  </p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faJsSquare} /></span>Javascript</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact} /></span>React.js v16.8.x</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faNodeJs} /></span>Nodejs</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faDatabase} /></span>Firebase</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faGithub} /></span>github VC</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faCog} /></span>3rd Party API</p>
                <h3>TAP Social was built by Team State as part of our Kodiri BootCamp</h3>
                <a href='https://state.max29.now.sh/' target='_blank' rel='noopener noreferrer'>Visit Site</a>
              </div>
            </figure>
          </div>
        </div>

        <div class='card-container'>
          <div class='card'>
            <figure class='front'>
              <img src={khamithealth} alt='Khamit Health' />
              <div className='overlay light'>
                <h1>KhamitHealth.com</h1>
              </div>
            </figure>
            <figure class='back'>
              <div className='pulse'>
                <h1>Technologies</h1>
                <p>
                  <span className='fontAwesome'><FontAwesomeIcon icon={faHtml5} /></span>/
                    <span className='fontAwesome'><FontAwesomeIcon icon={faCss3} /></span>
                  HTML/CSS
                  </p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faWordpress} /></span>CMS: Wordpress</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faWordpress} /></span>WP Theme customization</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faPhp} /></span>PHP</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faDatabase} /></span>MySQL</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faCloud} /></span>WP hosting</p>
                <h3>Wordpress site built for a health professional</h3>
                <a href='http://www.khamithealth.com' target='_blank' rel="noopener noreferrer">Visit Site</a>
              </div>
            </figure>
          </div>
        </div>

        {/* </section> */}

        {/* <section className='sectionContainer'> */}

        <div class='card-container'>
          <div class='card'>
            <figure class='front'>
              <img src={wajudah} alt='Wajudah' />
              <div className='overlay light'>
                <h1>Wajudah.com</h1>
              </div>
            </figure>
            <figure class='back'>
              <div className='pulse'>
                <h1>Technologies</h1>
                <p>
                  <span className='fontAwesome'><FontAwesomeIcon icon={faHtml5} /></span>/
                    <span className='fontAwesome'><FontAwesomeIcon icon={faCss3} /></span>
                  HTML/CSS
                  </p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faBootstrap} /></span>Boostrap</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faTwitter} /></span>Twitter API</p>
                <p>jQuery</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faCloud} /></span>standard hosting</p>
                <h3>A publicity site built for a musician</h3>
                <a href='http://wajudah.com/' target='_blank' rel="noopener noreferrer">Visit Site</a>
              </div>
            </figure>
          </div>
        </div>

        <div class='card-container'>
          <div class='card'>
            <figure class='front'>
              <img src={pomodoro} alt='projects' />
              <div className='overlay light'>
                <h1>A Pomodoro App</h1>
              </div>
            </figure>
            <figure class='back'>
              <div className='pulse'>
                <h1>Technologies</h1>
                <p>
                  <span className='fontAwesome'><FontAwesomeIcon icon={faHtml5} /></span>/
                    <span className='fontAwesome'><FontAwesomeIcon icon={faCss3} /></span>
                  HTML/CSS
                  </p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact} /></span>React.js v16.8.x</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faCloud} /></span>Zeit Now hosting</p>
                <h3>Timed interval task and break timer</h3>
                <a href='' target='_blank' rel="noopener noreferrer">Visit Site</a>
                <p>Coming soon...</p>
              </div>
            </figure>
          </div>
        </div>

        <div class='card-container'>
          <div class='card'>
            <figure class='front'>
              <img src={jscalculator} alt='projects' />
              <div className='overlay light'>
                <h1>A Calculator App</h1>
              </div>
            </figure>
            <figure class='back'>
              <div className='pulse'>
                <h1>Technologies</h1>
                <p>
                  <span className='fontAwesome'><FontAwesomeIcon icon={faHtml5} /></span>/
                    <span className='fontAwesome'><FontAwesomeIcon icon={faCss3} /></span>
                  HTML/CSS
                  </p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact} /></span>React.js v16.8.x</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faCloud} /></span>Zeit Now hosting</p>
                <h3>A Calculator App</h3>
                <a href='' target='_blank' rel="noopener noreferrer">Visit Site</a>
                <p>Coming soon...</p>
              </div>
            </figure>
          </div>
        </div>

        <div class='card-container'>
          <div class='card'>
            <figure class='front'>
              <img src={brainjs} alt='Brainjs Neural Net Library' />
              <div className='overlay light'>
                <h1>JS Neural Net App</h1>
              </div>
            </figure>
            <figure class='back'>
              <div className='pulse'>
                <h1>Technologies</h1>
                <p>
                  <span className='fontAwesome'><FontAwesomeIcon icon={faHtml5} /></span>/
                    <span className='fontAwesome'><FontAwesomeIcon icon={faCss3} /></span>
                  HTML/CSS
                  </p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact} /></span>React.js v16.8.x</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faCog} /></span>Brain.js</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faCloud} /></span>Zeit Now hosting</p>
                <h3>React App that makes use of the Brain.js Neural Network Library</h3>
                <a href='' target='_blank' rel="noopener noreferrer">Visit Site</a>
                <p>Coming soon...2020</p>
              </div>
            </figure>
          </div>
        </div>

        <div class='card-container'>
          <div class='card'>
            <figure class='front'>
              <img src={D3} alt='d3 logo' />
              <div className='overlay light'>
                <h1>A d3 App</h1>
              </div>
            </figure>
            <figure class='back'>
              <div className='pulse'>
                <h1>Technologies</h1>
                <p>
                  <span className='fontAwesome'><FontAwesomeIcon icon={faHtml5} /></span>/
                    <span className='fontAwesome'><FontAwesomeIcon icon={faCss3} /></span>
                  HTML/CSS
                  </p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faJsSquare} /></span>D3.js Libary</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact} /></span>React.js v16.8.x</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faCloud} /></span>Zeit Now hosting</p>
                <h3>A D3.js App</h3>
                <a href='' target='_blank' rel="noopener noreferrer">Visit Site</a>
                <p>Coming soon...</p>
              </div>
            </figure>
          </div>
        </div>

        <div class='card-container'>
          <div class='card'>
            <figure class='front'>
              <img src={htmlaudiotag} alt='HTML Audio Tag Image' />
              <div className='overlay light' >
                <h1>A Sounds App</h1>
              </div>
            </figure>
            <figure class='back'>
              <div className='pulse'>
                <h1>Technologies</h1>
                <p>
                  <span className='fontAwesome'><FontAwesomeIcon icon={faHtml5} /></span>/
                    <span className='fontAwesome'><FontAwesomeIcon icon={faCss3} /></span>
                  HTML/CSS
                  </p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact} /></span>React.js v16.8.x</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faJsSquare} /></span>JS Sound Libary</p>
                <p><span className='fontAwesome'><FontAwesomeIcon icon={faCloud} /></span>Zeit Now hosting</p>
                <h3>An App that uses kitchen sounds to make beats</h3>
                <a href='' target='_blank' rel="noopener noreferrer">Visit Site</a>
                <p>Coming soon...</p>
              </div>
            </figure>
          </div>
        </div>

      </main>
    </>);
}
