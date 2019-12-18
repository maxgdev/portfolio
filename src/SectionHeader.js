import React from 'react';
import './App.css';

export default function Header({title}) {
    return (
    <>
        <div className='SectionHeader '>
            <div  className='SectionHeader'>
                <p>{title}</p>
            </div>
        </div>
    </>);
}