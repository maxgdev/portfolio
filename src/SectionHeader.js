import React from 'react';
import './App.css';

export default function Header({title}) {
    return (
    <>
        <div class='SectionHeader '>
            <div  class='SectionHeader'>
                <p>{title}</p>
            </div>
        </div>
    </>);
}