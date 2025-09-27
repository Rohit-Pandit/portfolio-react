import React, { use } from 'react';
import phone from './../../assets/phone.png';
import email from './../../assets/email.png';
import location from './../../assets/location.png';
import linkedin from './../../assets/linkedin.png';
import './Contact.css';
import dotenv from 'dotenv';

dotenv.config();




const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault(); 
        emailjs.sendForm(process.env.VITE_EMAILJS_SERVICE_ID, 
                        process.env.VITE_EMAILJS_TEMPLATE_ID, 
                        form.current, 
                        process.env.VITE_EMAILJS_PUBLIC_KEY)
          .then((result) => {
              console.log("Email sent successfully:",result.text);
              alert("✅ Message sent! I will get back to you soon.");
              form.current.reset(); // Reset the form after submission
          }, (error) => {
              console.log("Failed to send email:",error.text);
              alert("❌ Failed to send message. Please try again later.");
          });
      }
  return (
    <div className='contact'>
        <div className="contact-title">
             <h2>Get in Touch</h2>
             <p>Let’s connect and build something amazing together 🚀</p>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I’m currently <span>open to work</span> and <span>freelance</span> opportunities.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email} alt="" /> <p>rohitpandit.190425@gmail.com</p>
                    </div>
                   <div className="contact-detail">
                        <img src={linkedin} alt="LinkedIn" />
                        <a
                            href="https://www.linkedin.com/in/rohit-pandit-88b39621a/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          Connect
                        </a>
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
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="">Your Name</label>
                    <input type='text' name='name' placeholder='Enter your name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' />
                    <label>Write your message here...</label>
                    <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact