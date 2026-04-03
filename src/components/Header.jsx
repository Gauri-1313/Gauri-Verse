import './Header.css'
import React from 'react'
import {useState , useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

 
 const Header = () => {
    const [scrolled , setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll" , handleScroll)

        return ()=> window.removeEventListener("scroll" , handleScroll) 
    },[])

   return (
    <header className={scrolled ? 'header scroll':'header'}>
         <div className='logo'>
            <h1><span>G</span>auri</h1>
         </div>
         <ul className='links'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>

         </ul>
         <ul className='icons'>
            <li><a href='https://github.com/Gauri-1313'><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href='https://www.instagram.com/gauri_gawade_313?igsh=eHZoYm9qY2gwbmhl'><FontAwesomeIcon icon={faInstagram}/></a></li>
            <li><a href='https://www.linkedin.com/in/gauri-gawade-833ba3289'><FontAwesomeIcon icon={faLinkedin}/></a></li>
         </ul>

    </header>
    
   )
 }
 
 export default Header