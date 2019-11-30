import React from 'react';
import './App.css';

export default function Footer() {
    return (
    <>
      <footer className=''>
        
        <div className='footerContainer'>
          <div className="footer-brand footer-item">
            <p>&copy; 2020 maxgdev.net. Stratford, London E15</p>
          </div>
          <div className="social-media footer-item">
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="http://codepen.io/"><i class="fa fa-codepen"></i></a>
          </div>
          <div className='footer-item'>
          <a href='/'>Back to Top</a>
          </div>
        </div>
      </footer>
    </>);
}
