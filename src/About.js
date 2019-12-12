import React from 'react';
import ng from './images/ng.svg'
import jm from './images/jm.svg'
import gb from './images/gb.svg'
import maxg from './images/maxg.jpg'
import comics1001 from './images/comics1001.jpg'
import './App.css';

export default function About() {
    return (<>
        <div className='about'>
            <figure>
                <img src={maxg} alt='Max Garry profile picture at maxgdev.net'/>
            </figure>
            <aside>
                <blockquote className='animated zoomIn delay-2s'>Hi, I am Max, a Full Stack Javascript Developer. I'm a Nigerian <img src={ng} alt="Nigerian flag"/> married to a Jamaican <img src={jm} alt="Jamaican flag"/>, living in Stratford, East London <img src={gb} alt="British flag"/>.</blockquote>
            </aside>
            <blockquote className='animated zoomIn delay-3s'>What do I enjoy? My interests are many, however afrobeats, formula 1, graphic novels, 
            japanese anime , fruit cakes and existential discussions are high on the list.
            </blockquote>
            <div className='animated zoomIn delay-4s bookquote'>
                <figure>
                    <img src={comics1001} alt='Max Garry profile picture at maxgdev.net'/>
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
