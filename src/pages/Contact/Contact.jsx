import React from 'react'
import { FaEnvelope , FaPhone , FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {

  return (
    <div className='contact' id='contact'>
        <div className='title'>
            <h2>Contact Me</h2>
        </div>
        <div className='contact-container'>
            <div className='contact-info'>
                <h3>Get In Touch</h3>
                <p>
                    If you want to work together or have any question ,
                    feel free to contact me.
                </p>
                <div className='info-item'>
                    <FaEnvelope className='contact-icon'/>
                    <span>gawadegauri313@gmail.com</span>
                </div>
                <div className='info-item'>
                    <FaPhone className='contact-icon'/>
                    <span>9307 XX XX XX</span>
                </div>
                <div className='info-item'>
                    <FaMapMarkerAlt className='contact-icon'/>
                    <span>Pune</span>
                </div>
            
            </div>
            <form className='contact-form'
                    action="https://formsubmit.co/gawadegauri313@gmail.com"
                    method="POST">
                <input 
                    type='text' 
                    name='name'
                    placeholder='Your Name'
                    required
                />
                <input 
                    type='email' 
                    name='email'
                    placeholder='Your Email'    
                    required
                />
                <textarea 
                    name='message'
                    placeholder='Your Message'  
                    required
                ></textarea>

                <button 
                    type='submit'>
                        Send Message
                </button>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New message from portfolio!" />
                <input type="hidden" name="_template" value="table"></input>
            </form>
        </div>
    </div>
  )
}

export default Contact