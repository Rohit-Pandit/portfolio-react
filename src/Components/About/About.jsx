import React from 'react';
import './About.css';
import profile from './../../assets/profile.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src="" alt="About me img" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Some detail for portfolio user</p>
                    <p>My passion for web development </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"100%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About