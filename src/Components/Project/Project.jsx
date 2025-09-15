import React from 'react';
import Data from './Data.json';
import './Project.css'

const Project = () => {
  return (
     <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {Data.map((proj) => (
          <div key={proj.id} className="project-card">
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.tech.map((t, index) => (
                <span key={index} className="tech">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project