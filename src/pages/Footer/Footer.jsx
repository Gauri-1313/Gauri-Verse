import React from 'react'
import "./Footer.css"
import {FaGithub , FaInstagram , FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <p>© 2026 Gauri Gawade</p>
            <div className='social-icons'>
                <a href='https://github.com/Gauri-1313'><FaGithub /></a>
                <a href='https://www.instagram.com/gauri_gawade_313?igsh=eHZoYm9qY2gwbmhl'><FaInstagram /></a>
                <a href='https://www.linkedin.com/in/gauri-gawade-833ba3289'><FaLinkedin /></a>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer