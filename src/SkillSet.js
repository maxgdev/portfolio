import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faCss3, faHtml5, faCode, faCodepen, faGithub, faJs, faReact, faNode, faJsSquare, faWordpress,
     faAws, faBootstrap, faLinkedin, faYoutube, faPhp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faDatabase} from '@fortawesome/free-solid-svg-icons'
library.add(fab);

export default function SkillSet() {
    return (
    <>
        <div className='skillsetContainer'>
            <div><h5>HTML5<span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span></h5></div>
            <div><h5>CSS3<span className='fontAwesome'><FontAwesomeIcon icon={faCss3}/></span></h5></div>
            <div><h5>JavaScript<span className='fontAwesome'><FontAwesomeIcon icon={faJsSquare}/></span></h5></div>
            <div><h5>JavaScript<span className='fontAwesome'><FontAwesomeIcon icon={faJs}/></span></h5></div>
            <div><h5>ReactJS<span className='fontAwesome'><FontAwesomeIcon icon={faReact}/></span></h5></div>
            <div><h5>Node.js<span className='fontAwesome'><FontAwesomeIcon icon={faNode}/></span></h5></div>
            <div><h5>Node.js<span className='fontAwesome'><FontAwesomeIcon icon={faGithub}/></span></h5></div>
            <div><h5>MySQL<span className='fontAwesome'><FontAwesomeIcon icon={faDatabase}/></span></h5></div>
            <div><h5>MongoDB<span className='fontAwesome'><FontAwesomeIcon icon={faDatabase}/></span></h5></div>
            <div><h5>PHP<span className='fontAwesome'><FontAwesomeIcon icon={faPhp}/></span></h5></div>
            <div><h5>Wordpress Setup & Config<span className='fontAwesome'><FontAwesomeIcon icon={faWordpress}/></span></h5></div>
            <div><h5>Wordpress Theme Customisation<span className='fontAwesome'><FontAwesomeIcon icon={faWordpress}/></span></h5></div>
            <div><h5>Bootstrap<span className='fontAwesome'><FontAwesomeIcon icon={faBootstrap}/></span></h5></div>
            <div><h5>Cloud Services (AWS)<span className='fontAwesome'><FontAwesomeIcon icon={faAws}/></span></h5></div>
            <div><h5>Cloud Services (Google)<span className='fontAwesome'><FontAwesomeIcon icon={faCloud}/></span></h5></div>
            <div><h5>Cloud Services (Google)<span className='fontAwesome'><FontAwesomeIcon icon={faCloud}/></span></h5></div>
        </div>
    </>);
}
