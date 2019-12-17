import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faCss3, faHtml5, faCode, faCodepen, faGithub, faJs, faReact, faNode, faJsSquare, faWordpress,
     faAws, faBootstrap, faLinkedin, faYoutube, faPhp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faDatabase, faLayerGroup} from '@fortawesome/free-solid-svg-icons'
library.add(fab);

export default function SkillSet() {
    return (
    <>
        <div className='skillsetContainer'>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faHtml5}/></span>HTML5</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faCss3}/></span>CSS3</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faJsSquare}/></span>JavaScript</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faReact}/></span>ReactJS</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faNode}/></span>Node.js</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faGithub}/></span>GitHub</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faDatabase}/></span>MySQL</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faDatabase}/></span>MongoDB</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faDatabase}/></span>MSSQL</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faPhp}/></span>PHP</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faWordpress}/></span>WP Setup & Config</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faWordpress}/></span>WP Theme Customisation</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faBootstrap}/></span>Bootstrap</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faAws}/></span>Cloud Services (AWS)</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faCloud}/></span>Cloud Services (Google)</h3></div>
            <div><h3><span className='fontAwesome'><FontAwesomeIcon icon={faLayerGroup}/></span>3rd Party API</h3></div>
        </div>
    </>);
}
