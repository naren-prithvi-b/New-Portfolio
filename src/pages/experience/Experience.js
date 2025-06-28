import React from "react";
import "./Experience.css";
import { experience } from "../../portfolio";

function Experience() {
  return (
    <div className="main" id="experience">
      <div className="experience-header">
        <h1 className="heading experience-heading">Experience</h1>
      </div>
      <div className="experience-body">
        {experience.sections.map((section, index) => (
          <div key={index} className="experience-section">
            <h2 className="section-title">{section.title}</h2>
            {section.experiences.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="experience-card-left">
                  {/* Optional: use a placeholder if you don't have logo_path */}
                  {/* <img src={exp.logo_path} alt={exp.company} className="experience-logo" /> */}
                </div>
                <div className="experience-card-right">
                  <h2 className="experience-role">{exp.title}</h2>
                  <h3 className="experience-company">
                    <a
                      href={exp.company_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <p className="experience-date">{exp.duration}</p>
                  <p className="experience-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
