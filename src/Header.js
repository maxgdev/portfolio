import React from 'react';
import './App.css';

export default function Header() {
    return (
    <>
        <div id='header' className='header'>
            <div className='headerText'>
            <h1 className="title animated slideInRight delay-2s"><span>M</span>ax <span>G</span>arry</h1>
            <h3 className="animated slideInLeft delay-2s"> A Full stack Javascript Developer</h3>
            <h3 className="animated slideInRight delay-2s">Focused on React & Node.js</h3>
            </div>
        </div>
        <div>
        {/* <h1 className="animated infinite bounce delay-2s">Animate Css Example</h1> */}
        </div>
    </>);
}
