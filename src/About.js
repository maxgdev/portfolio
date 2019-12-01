import React from 'react';
import ng from './images/ng.svg'
import jm from './images/jm.svg'
import gb from './images/gb.svg'
import './App.css';

export default function About() {
    return (<>
        <div className='about'>
            <br />
            <br />
            <blockquote>Hi, I am Max, a Full Stack Javascript Developer. I'm a Nigerian <img src={ng} alt="Nigerian flag"/> married to a Jamaican <img src={jm} alt="Jamaican flag"/>, living in Stratford, East London <img src={gb} alt="British flag"/>.</blockquote>

            <blockquote>What do I enjoy? My interests are too numerous to enumerate, however afrobeats, formula 1, graphic novels, 
            japanese anime , fruit cakes, societal and existential discussions are high on the list.
            </blockquote>
            <blockquote>"We humans seem hot-wired to represent our world in symbols and icons, 
            joining them together for narrative meaning"
            </blockquote>
            <p><cite>1001 COMICS: YOU MUST READ BEFORE YOU DIE, Introduction</cite></p>

        </div>
    </>);
}
