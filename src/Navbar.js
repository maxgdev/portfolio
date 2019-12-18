import React from 'react';
import './App.css';

export default function Navbar() {
    return (
    <>
    <nav id='nav' className='navbar'>
        <div className='logo'>
            <ul className='menu'>
                <li className='logo'><a href='#nav'>maxgdev.net</a></li>
            </ul>
        </div>
        <div className='navcenter'></div>
        <div className='menublock'>
            <ul className='menu'>
                <li className='menu-item'><a href='#nav'>Home</a></li>
                <li className='menu-item'><a href='#about'>About</a></li>
                <li className='menu-item'><a href='#projects'>Projects</a></li>
                <li className='menu-item'><a href='#skillset'>Skillset</a></li>
                <li className='menu-item'><a href='http://www.d3jsdataviz.com/' target='_blank' rel='noopener noreferrer'>Blog</a></li>
                <li className='menu-item'><a href='#contact'>Contact</a></li>
            </ul>
        </div>

    </nav>
    </>);
}
