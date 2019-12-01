import React from 'react';
import './App.css';
import fruitCake from './images/fruitcake.jpg';
import projects from './images/projects.jpg';
import codeScreen from './images/codescreen.jpg';
import keyboardMouse from './images/keyboardmouse.jpg';
import macLaptop from './images/maclaptop.jpg';
import tablet from './images/tablet.jpg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faCss3, faHtml5, faCode, faCodepen, faGithub, faJs, faReact, faJsSquare, faWordpress,
     faAws, faBootstrap, faLinkedin, faYoutube, faPhp, faNodeJs, faTwitter,  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faDatabase, faCog } from '@fortawesome/free-solid-svg-icons'
library.add(fab);

export default function MainContent() {
    return (
    <>
      <main>
        <section className='sectionContainer'>

          <div class='card-container'>
            <div class='card'>
                <figure class='front'>
                <img src={macLaptop} alt='Kodflix' />
                    <div className=''>
                        <h1>Kodflix</h1>
                        <p>Kodflix is a project built as part of Kodiri's 8 Week React Bootcamp</p>
                        <p>Coming very soon...</p>
                    </div> 
                </figure>
                <figure class='back'>
                        <h1>Technologies</h1>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span>HTML/CSS</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact}/></span>React.js v16.8.x</p>
                        <p>heroku hosting</p>
                </figure>
            </div>
          </div>

          <div class='card-container'>
            <div class='card'>
                <figure class='front'>
                <img src={fruitCake} alt='Tap Social' />
                    <div className=''>
                        <h1>TAP Social</h1>
                        <p>TAP Social was built by Team State as part of our Kodiri BootCamp</p>
                        <p>Coming very soon...</p>
                    </div> 
                </figure>
                <figure class='back'>
                  <div className='pulse'>
                        <h1>Technologies</h1>
                        <p>
                          <span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span>
                          <span className='fontAwesome'><FontAwesomeIcon icon={faCss3}/></span>
                          HTML/CSS
                        </p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faJsSquare}/></span>Javascript</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact}/></span>React.js v16.8.x</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faNodeJs}/></span>Nodejs</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faDatabase}/></span>Firebase</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faGithub}/></span>github VC</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faCog}/></span>3rd Party API</p>
                        <p>Heroku hosting</p>
                  </div>
                </figure>
            </div>
          </div>

          <div class='card-container'>
            <div class='card'>
                <figure class='front'>
                <img src={keyboardMouse} alt='lorem ipsum' />
                    <div className=''>
                        <h1>KhamitHealth.com</h1>
                        <p>Wordpress site built for a health professional</p>
                    </div> 
                </figure>
                <figure class='back'>
                        <h1>Technologies</h1>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span>HTML/CSS</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faWordpress}/></span>CMS: Wordpress</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faWordpress}/></span>WP Theme customization</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faPhp}/></span>PHP</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faDatabase}/></span>MySQL</p>
                        <p>WP hosting</p>
                        <a href='http://www.khamithealth.com' target='_blank'>Visit Site</a>
                </figure>
            </div>
          </div>

        </section>

        <section  className='sectionContainer'>

          <div class='card-container'>
            <div class='card'>
                <figure class='front'>
                <img src={projects} alt='projects' />
                    <div className=''>
                        <h1>Wajudah.com</h1>
                        <p>A publicity site built for a musician</p>
                    </div> 
                </figure>
                <figure class='back'>
                        <h1>Technologies</h1>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span>HTML/CSS</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faBootstrap}/></span>Boostrap</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faTwitter}/></span>Twitter API</p>
                        <p>jQuery</p>
                        <p>standard hosting</p>
                </figure>
            </div>
          </div>


          <div class='card-container'>
            <div class='card'>
                <figure class='front'>
                <img src={projects} alt='projects' />
                    <div className=''>
                        <h1>A Pomodoro App</h1>
                        <p>Timed interval task and break timer</p>
                        <p>Coming soon...</p>
                    </div> 
                </figure>
                <figure class='back'>
                        <h1>Technologies</h1>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span>HTML5/CSS3</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact}/></span>React.js v16.8.x</p>
                        <p>Zeit Now hosting</p>
                </figure>
            </div>
          </div>


          <div class='card-container'>
            <div class='card'>
                <figure class='front'>
                <img src={projects} alt='projects' />
                    <div className=''>
                        <h1>A Calculator App</h1>
                        <p>A Calculator App</p>
                        <p>Coming soon...</p>
                    </div> 
                </figure>
                <figure class='back'>
                        <h1>Technologies</h1>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span>HTML5/CSS3</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact}/></span>React.js v16.8.x</p>
                        <p>Zeit Now hosting</p>
                </figure>
            </div>
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
        
        <section  className='sectionContainer'>

          <div class='card-container'>
            <div class='card'>
                <figure class='front'>
                <img src={projects} alt='projects' />
                    <div className=''>
                        <h1>Weather App</h1>
                        <p>React App that makes an API call for weather data</p>
                        <p>Coming soon...</p>
                    </div> 
                </figure>
                <figure class='back'>
                        <h1>Technologies</h1>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span>HTML5/CSS3</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact}/></span>React.js v16.8.x</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faCog}/></span>3rd Party API</p>
                        <p>Zeit Now hosting</p>
                </figure>
            </div>
          </div>


          <div class='card-container'>
            <div class='card'>
                <figure class='front'>
                <img src={projects} alt='projects' />
                    <div className=''>
                        <h1>Fertilty App</h1>
                        <p>An app to track ovulation</p>
                        <p>Coming soon...</p>
                    </div> 
                </figure>
                <figure class='back'>
                        <h1>Technologies</h1>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span>HTML5/CSS3</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact}/></span>React.js v16.8.x</p>
                        <p>Zeit Now hosting</p>
                </figure>
            </div>
          </div>

          <div class='card-container'>
            <div class='card'>
                <figure class='front'>
                <img src={projects} alt='projects' />
                    <div className=''>
                        <h1>A Calculator App</h1>
                        <p>A Calculator App</p>
                    </div> 
                </figure>
                <figure class='back'>
                        <h1>Technologies</h1>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span>HTML5/CSS3</p>
                        <p><span className='fontAwesome'><FontAwesomeIcon icon={faReact}/></span>React.js v16.8.x</p>
                        <p>Zeit Now hosting</p>
                </figure>
            </div>
          </div>
        </section>  

      </main>
    </>);
}
