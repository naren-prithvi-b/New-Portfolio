import React, { useState } from "react";
import EducationImg from "../../assets/images/education.svg";
import { degrees, certifications } from "../../portfolio"; // Corrected import
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./EducationComponent.css"; // Your CSS file

export default function Education(props) {
  const theme = props.theme;
  const [activeTab, setActiveTab] = useState("degrees");
  return (
    <div className="education-main">
      <Header theme={theme} />
      <div className="greet-main" id="education">
        {/* Hero Section - matches Home page greeting layout */}
        <Fade bottom duration={2000} distance="40px">
          <div className="education-hero">
            <div className="education-hero-text">
              <h1
                className="education-heading-text"
                style={{ color: theme.text }}
              >
                Education
              </h1>
              <p
                className="education-heading-sub-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                My academic background, degrees, and certifications.
              </p>
            </div>
            <div className="education-hero-image">
              <img
                src={EducationImg}
                alt="Education"
                className="education-heading-img"
              />
            </div>
          </div>
        </Fade>

        {/* Tabs */}
        <div className="education-tabs">
          <button
            className={`education-tab-btn ${
              activeTab === "degrees" ? "education-tab-btn-active" : ""
            }`}
            style={{
              backgroundColor:
                activeTab === "degrees" ? theme.highlight : "transparent",
              color: theme.text,
              borderColor: theme.highlight,
            }}
            onClick={() => setActiveTab("degrees")}
          >
            Degrees
          </button>
          <button
            className={`education-tab-btn ${
              activeTab === "certifications" ? "education-tab-btn-active" : ""
            }`}
            style={{
              backgroundColor:
                activeTab === "certifications"
                  ? theme.highlight
                  : "transparent",
              color: theme.text,
              borderColor: theme.highlight,
            }}
            onClick={() => setActiveTab("certifications")}
          >
            Certifications
          </button>
        </div>

        {/* Degrees Section */}
        {activeTab === "degrees" && (
          <div className="education-body-div">
            {degrees.degrees.map((degree, index) => (
              <div key={index} className="degree-row">
                <div
                  className="degree-logo-circle"
                  style={{ borderColor: theme.highlight }}
                >
                  <img
                    src={degree.logo_path}
                    alt={degree.title}
                    className="degree-logo-img"
                  />
                </div>
                <div
                  className="education-card"
                  style={{
                    backgroundColor: theme.body,
                    borderColor: theme.highlight,
                  }}
                >
                  <div
                    className="education-card-header"
                    style={{ backgroundColor: theme.highlight }}
                  >
                    <div>
                      <h3 style={{ color: theme.text }}>{degree.title}</h3>
                      <h4 style={{ color: theme.text }}>{degree.subtitle}</h4>
                    </div>
                    <span
                      className="degree-duration"
                      style={{ color: theme.text }}
                    >
                      {degree.duration}
                    </span>
                  </div>
                  <div className="education-card-body">
                    {degree.descriptions.map((desc, i) => (
                      <p key={i} style={{ color: theme.text }}>
                        {desc}
                      </p>
                    ))}
                    <a
                      href={degree.website_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-website-btn"
                      style={{
                        backgroundColor: theme.highlight,
                        color: theme.text,
                      }}
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Section */}
        {activeTab === "certifications" && (
          <div className="education-body-div">
            {certifications.certifications.map((certificate, index) => (
              <div key={index} className="degree-row">
                <div
                  className="degree-logo-circle"
                  style={{ borderColor: theme.highlight }}
                >
                  <span
                    className="iconify cert-tab-icon"
                    data-icon={certificate.icon}
                    style={{ color: theme.text }}
                  ></span>
                </div>
                <div
                  className="education-card cert-tab-card"
                  style={{
                    backgroundColor: theme.body,
                    borderColor: theme.highlight,
                  }}
                >
                  <div
                    className="education-card-header"
                    style={{ backgroundColor: certificate.color_code }}
                  >
                    <div>
                      <h3 style={{ color: theme.text }}>{certificate.title}</h3>
                      <h4 style={{ color: theme.text }}>
                        {certificate.subtitle}
                      </h4>
                    </div>
                    <span
                      className="degree-duration"
                      style={{ color: theme.text }}
                    >
                      {certificate.duration}
                    </span>
                  </div>
                  <div className="education-card-body">
                    {certificate.description && (
                      <p style={{ color: theme.text }}>
                        {certificate.description}
                      </p>
                    )}
                    {certificate.certificate_link && (
                      <a
                        href={certificate.certificate_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-website-btn"
                        style={{
                          backgroundColor: theme.highlight,
                          color: theme.text,
                        }}
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
