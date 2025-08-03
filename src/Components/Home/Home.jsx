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
            <div className="home-connect">Connect with me</div>
            <div className="home-resume">Resume ↓</div>
        </div>
    </div>
  )
}

export default Home