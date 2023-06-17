import React from 'react';
import './footer.css';
import { RiHome2Line, RiInformationLine, RiBriefcaseLine, RiContactsLine } from 'react-icons/ri';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <div id='footer'>
      <div className="waveWrapper">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}></div>
          <div className="mike">
            <div className="footer-content">
              <p>© 2023 My L300 portfolio.</p>
              <ul className="footer-links" style={{ zIndex: '1' }}>
                <li><a href="#home"><RiHome2Line /> Home</a></li>
                <li><a href="#about"><RiInformationLine /> About</a></li>
                <li><a href="#services"><RiBriefcaseLine /> Services</a></li>
                <li><a href="#contact"><RiContactsLine /> Contact</a></li>
              </ul>
              <div className="socials" style={{ zIndex: '1' }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom" style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}></div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
