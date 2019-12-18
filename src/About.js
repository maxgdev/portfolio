import React from 'react';
import ng from './images/ng.svg'
import jm from './images/jm.svg'
import gb from './images/gb.svg'
import maxg from './images/maxg.jpg';
import comics1001 from './images/comics1001.jpg';
import burnaboy from './images/burnaboy.jpg';
import './App.css';

export default function About() {
    return (<>
        <div id='about' className='about'>
            <figure>
                <img src={maxg} alt='Max Garry profile picture at maxgdev.net'/>
            </figure>
            <blockquote className=''>I'm a Full-stack JavaScript Developer focused on React.js, Node.js and d3.js. I am highly self-motivated to learn new technologies. I am happy to work as part of a team or individually to meet objectives. I have worked within the consulting, finance, insurance, services, media, health (NHS), manufacturing and logistics industries.</blockquote>
            <figure>
                <img src={burnaboy} alt='Burna Boy'/>
            </figure>
            <blockquote className='animated'>What do I enjoy? My interests are many, however afrobeats, formula 1, graphic novels, 
            japanese anime , fruit cakes and existential discussions are high on the list.
            </blockquote>
            <div className='bookquote'>
                <figure>
                    <img src={comics1001} alt='1001 Comics'/>
                </figure>
                <aside>
                    <blockquote>"We humans seem hot-wired to represent our world in symbols and icons, 
                    joining them together for narrative meaning"
                    </blockquote>
                    <span> - 1001 COMICS: YOU MUST READ BEFORE YOU DIE, Introduction</span>
                </aside>
            </div>


        </div>
    </>);
}
