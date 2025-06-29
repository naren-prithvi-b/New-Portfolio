import React from "react";
import EducationImg from "../../assets/images/education.svg";
import collegeLogo from "../../assets/images/NGP.png"; // your college logo
import { degrees } from "../../portfolio"; // Corrected import
import "./EducationComponent.css"; // Your CSS file

export default function Education() {
  return (
    <div className="basic-education">
      {/* Heading Section */}
      <div className="education-heading-div">
        <div className="education-heading-img-div">
          <img
            src={EducationImg}
            alt="Education"
            className="education-heading-img"
          />
        </div>
        <div className="education-heading-text-div">
          <h1 className="education-heading-text">Education</h1>
        </div>
      </div>

      {/* College Logo */}
      <div className="college-logo-div">
        <img
          src={collegeLogo}
          alt="College Logo"
          className="college-logo-img"
        />
      </div>

      {/* Degrees Section */}
      <div className="education-body-div">
        {degrees.degrees.map((degree, index) => (
          <div key={index} className="education-card">
            <h3>{degree.title}</h3>
            <h4>{degree.subtitle}</h4>
            <p>{degree.duration}</p>
            {degree.descriptions.map((desc, i) => (
              <p key={i}>• {desc}</p>
            ))}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              College Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
