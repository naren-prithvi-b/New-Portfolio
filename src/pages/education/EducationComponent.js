import React from "react";
import EducationImg from "../../assets/images/education.svg";
import { degrees } from "../../portfolio";
 // Make sure this is an array!

export default function Education() {
  return (
    <div>
      <div className="basic-education">
        <div className="education-heading-div">
          <div className="education-heading-img-div">
            <img
              src={EducationImg}          // ✅ just use the imported SVG directly
              alt="Education"
            />
          </div>
          <div className="education-heading-text-div">
            <h1 className="education-heading-text">Education</h1>
          </div>
        </div>
        <div className="education-body-div">
          {degrees.degrees.map((degree, index)=> (   // ✅ removed .degrees
            <div key={index} className="education-card">
              <h3>{degree.title}</h3>
              <h4>{degree.subtitle}</h4>
              <p>{degree.duration}</p>
              {degree.descriptions.map((desc, i) => (
                <p key={i}>• {desc}</p>
              ))}
              <a href={degree.website_link} target="_blank" rel="noopener noreferrer">
                College Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
