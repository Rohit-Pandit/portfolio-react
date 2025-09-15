import React from 'react'
import './Home.css';
import profile from './../../assets/profile.jpg'

const Home = () => {
  return (
    <div className='home'>
        <img src={profile} alt="avatar" />
        <h1><span>I'm Rohit Pandit,</span> Software Developer based in India.</h1>
        <p>I am a software Developer from Hyderabad, Telangana with 1.4 years of professional experience</p>
        <div className="home-action">
            <div 
            className="home-connect"
            onClick={() => (window.location.href = "mailto:rohitpandit.190425@gmail.com")}
            >Connect with me
            </div>
           
            <a 
              href="./Full_Stack_RohitPandit.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="home-resume">
              Resume ↓
            </a>
        </div>
    </div>
  )
}

export default Home