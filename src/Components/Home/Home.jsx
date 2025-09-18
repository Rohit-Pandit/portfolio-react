import React from "react";
import "./Home.css";
import profile from "./../../assets/profile.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Profile Image */}
      <img src={profile} alt="avatar" />

      {/* Heading */}
      <h1>
        <span>I'm Rohit Pandit,</span> Software Developer based in India.
      </h1>

      {/* Subtext */}
      <p>
        I am a software developer from Hyderabad, Telangana with 1.4 years of
        professional experience.
      </p>

      {/* Actions */}
      <div className="home-action">
        <button
          className="home-connect"
          onClick={() =>
            (window.location.href = "mailto:rohitpandit.190425@gmail.com")
          }
        >
          Connect with me
        </button>

        <a
          href="./Full_Stack_RohitPandit.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="home-resume"
        >
          Resume ↓
        </a>
      </div>
    </div>
  );
};

export default Home;
