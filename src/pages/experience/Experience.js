import React, { useState } from "react";
import "./Experience.css";
import { experience } from "../../portfolio";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceImg from "./ExperienceImg";
import { Fade } from "react-reveal";

// Note: You should also add logo_path in your portfolio.js as explained above

function Experience(props) {
  const theme = props.theme;
  const [activeTab, setActiveTab] = useState("experience");
  return (
    <div className="experience-main">
      <Header theme={theme} />
      <div className="greet-main" id="experience">
        {/* Hero Section - matches Home page greeting layout */}
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-hero">
            <div className="experience-hero-text">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                Experience
              </h1>
              <p
                className="experience-heading-sub-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                My professional journey and work experience so far.
              </p>
            </div>
            <div className="experience-hero-image">
              <ExperienceImg theme={theme} />
            </div>
          </div>
        </Fade>

        {/* Tabs */}
        <div className="education-tabs">
          <button
            className={`education-tab-btn ${
              activeTab === "experience" ? "education-tab-btn-active" : ""
            }`}
            style={{
              backgroundColor:
                activeTab === "experience" ? theme.highlight : "transparent",
              color: theme.text,
              borderColor: theme.highlight,
            }}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            className={`education-tab-btn ${
              activeTab === "achievements" ? "education-tab-btn-active" : ""
            }`}
            style={{
              backgroundColor:
                activeTab === "achievements" ? theme.highlight : "transparent",
              color: theme.text,
              borderColor: theme.highlight,
            }}
            onClick={() => setActiveTab("achievements")}
          >
            Key Achievements
          </button>
        </div>

        {activeTab === "experience" && (
          <div className="experience-body">
            {experience.sections.map((section, index) => (
              <div key={index} className="experience-section">
                <h2 className="section-title" style={{ color: theme.text }}>
                  {section.title}
                </h2>
                {section.experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="experience-card"
                    style={{
                      backgroundColor: theme.highlight,
                      color: theme.text,
                    }}
                  >
                    <div className="experience-card-left">
                      {exp.logo_path ? (
                        <img
                          src={exp.logo_path}
                          alt={exp.company}
                          className="experience-logo"
                          style={{ width: "100px", height: "auto" }}
                        />
                      ) : null}
                    </div>
                    <div className="experience-card-right">
                      <h2
                        className="experience-role"
                        style={{ color: theme.text }}
                      >
                        {exp.title}
                      </h2>
                      <h3 className="experience-company">
                        <a
                          href={exp.company_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: theme.imageHighlight }}
                        >
                          {exp.company}
                        </a>
                      </h3>
                      <p
                        className="experience-date"
                        style={{ color: theme.secondaryText }}
                      >
                        {exp.duration}
                        {exp.location ? ` · ${exp.location}` : ""}
                      </p>
                      {exp.descriptions ? (
                        exp.descriptions.map((desc, i) => (
                          <p
                            key={i}
                            className="experience-desc"
                            style={{ color: theme.text }}
                          >
                            ⚡ {desc}
                          </p>
                        ))
                      ) : (
                        <p
                          className="experience-desc"
                          style={{ color: theme.text }}
                        >
                          {exp.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="experience-body">
            <div className="experience-section">
              <h2 className="section-title" style={{ color: theme.text }}>
                Key Achievements
              </h2>
              <div
                className="experience-card experience-achievements-card"
                style={{ backgroundColor: theme.highlight, color: theme.text }}
              >
                <div className="experience-card-right">
                  {experience.keyAchievements.map((achievement, i) => (
                    <p
                      key={i}
                      className="experience-desc"
                      style={{ color: theme.text }}
                    >
                      🏆 {achievement}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Experience;
