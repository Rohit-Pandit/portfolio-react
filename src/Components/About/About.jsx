import React from 'react';
import './About.css';
import profile from './../../assets/profile.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-section">
        {/* Left: Profile image */}
        <div className="about-left">
          <img src={profile} alt="About Rohit Pandit" />
        </div>

        {/* Right: Content */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a <span>Software Developer</span> passionate about building modern web
              applications. I enjoy solving problems, creating intuitive UIs, and writing
              clean, scalable code.
            </p>
            <p>
              Over the past <span>1.4 years</span>, I’ve gained hands-on experience working
              with <strong>React.js, JavaScript, and REST APIs</strong> while also improving
              my fundamentals in <strong>HTML & CSS</strong>.
            </p>
          </div>

          {/* Skills */}
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <div className="skill-bar"><div className="skill-level" style={{width:"95%"}}></div></div>
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <div className="skill-bar"><div className="skill-level" style={{width:"80%"}}></div></div>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <div className="skill-bar"><div className="skill-level" style={{width:"75%"}}></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Projects Completed</p>
        </div>
      </div>
    </section>
  );
};

export default About;
