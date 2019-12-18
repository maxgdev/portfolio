import React from 'react';
import './App.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
import {faCodepen, faGithub,  faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloud, faDatabase, faCog } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
    <>
      <footer className=''>
        
        <div className='footerContainer'>
          <div className="footer-brand footer-item">
            <p>&copy; 2020 maxgdev.net. Stratford, London E15</p>
          </div>
          <div className="social-media footer-item">
            <a href="https://www.linkedin.com/in/max-garry-072107114/" target='_blank' rel="noopener noreferrer"><span className='fontAwesome'><FontAwesomeIcon icon={faLinkedin}/></span></a>
            <a href="https://github.com/maxgdev" target='_blank' rel="noopener noreferrer"><span className='fontAwesome'><FontAwesomeIcon icon={faGithub}/></span></a>
            <a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer"><span className='fontAwesome'><FontAwesomeIcon icon={faYoutube}/></span></a>
            <a href="http://codepen.io/" target='_blank' rel="noopener noreferrer"><span className='fontAwesome'><FontAwesomeIcon icon={faCodepen}/></span></a>
          </div>
          <div className='footer-item'>
          <a href='#nav'>Back to Top</a>
          </div>
        </div>
      </footer>
    </>);
}
