import React from 'react';
import phone from './../../assets/phone.png';
import email from './../../assets/email.png';
import location from './../../assets/location.png';
import './Contact.css'


const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently open to work</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email} alt="" /> <p>rohitpandit.190425@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt="" /> <p>+91 6203756013</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" /> <p>Hyderabad, India</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type='text' name='name' placeholder='Enter your name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' />
                <label>Write your message here...</label>
                <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </div>
        </div>
    </div>
  )
}

export default Contact