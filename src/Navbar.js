import React from 'react';
import './App.css';

export default function Navbar() {
    return (
    <>
    <nav className='navbar'>
        <div class="logo">
            <ul class="menu">
                <li class="logo"><a href="a">maxgdev.net</a></li>
            </ul>
        </div>
        <div class="navcenter"></div>
        <div class="menublock">
            <ul class="menu">
                <li class="item"><a href="a">Home</a></li>
                <li class="#About"><a href="a">About</a></li>
                <li class="item"><a href="a">Resume</a></li>
                <li class="#Projects"><a href="a">Projects</a></li>
                <li class="item"><a href="http://www.d3jsdataviz.com/" target='_blank'>Blog</a></li>
                <li class="#Contact"><a href="a">Contact</a></li>
            </ul>
        </div>

    </nav>
    </>);
}
