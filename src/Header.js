import React from 'react';
import './App.css';

export default function Header() {
    return (
    <>
        <div className='header'>
            <div className='headerText'>
            <h1 class="title animated slideInRight delay-2s"><span>M</span>ax <span>G</span>arry</h1>
            <h3 class="animated slideInLeft delay-2s"> A Full stack Javascript Developer</h3>
            <h3 class="animated slideInRight delay-2s">Foused on React & Node.js</h3>
            </div>
        </div>
        <div>
        {/* <h1 class="animated infinite bounce delay-2s">Animate Css Example</h1> */}
        </div>
    </>);
}
