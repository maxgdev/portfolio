import React from 'react';
import './App.css';

export default function Navbar() {
    return (
    <>
    <nav id='nav' className='navbar'>
        <div class='logo'>
            <ul class='menu'>
                <li class='logo'><a href='#nav'>maxgdev.net</a></li>
            </ul>
        </div>
        <div class='navcenter'></div>
        <div class='menublock'>
            <ul class='menu'>
                <li class='menu-item'><a href='#nav'>Home</a></li>
                <li class='menu-item'><a href='#about'>About</a></li>
                <li class='menu-item'><a href='#projects'>Projects</a></li>
                <li class='menu-item'><a href='#skillset'>Skillset</a></li>
                <li class='menu-item'><a href='http://www.d3jsdataviz.com/' target='_blank' rel='noopener noreferrer'>Blog</a></li>
                <li class='menu-item'><a href='#contact'>Contact</a></li>
            </ul>
        </div>

    </nav>
    </>);
}
