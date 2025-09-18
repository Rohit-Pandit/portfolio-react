import React from 'react';
import './Certificate.css';
import certificates from './certificateData.json'

const Certificate = () => {
  return (
    <div className="certificates-container">
      <h2 className="certificates-title">Milestones</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-issuer">{cert.issuer}</p>
            <p className="certificate-date">{cert.date}</p>
            <a 
              href={cert.pdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="certificate-link"
            >
              View PDF
           </a>
           <ul className="certificate-skills">
              {cert.skills.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
           </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificate
