// src/portfolio.js
import AzentioLogo from "./assets/images/Azentio.png";
import ExpleoLogo from "./assets/images/Expleo.png";
import ExperienceImg from "./assets/images/experience.svg";
import NGPLogo from "./assets/images/NGP.png";

/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true,
};

// SEO Related settings
const seo = {
  title: "Naren's Portfolio",
  description:
    "Quality Assurance Engineer skilled in automation and functional testing with tools like Selenium, Playwright, and TestNG. Passionate about delivering high-quality, bug-free applications.",
  og: {
    title: "Naren Prithvi Portfolio",
    type: "website",
    url: "https://naren-prithvi-b.github.io",
  },
};

// Home Page
const greeting = {
  title: "Naren Prithvi",
  logo_name: "NarenPrithvi",
  nickname: "qa_automation_naren",
  subTitle:
    "Automation & Functional QA Engineer with hands-on experience in Selenium, TestNG, Playwright, API testing, and agile delivery practices. I believe in delivering quality software at speed.",
  resumeLink:
    "https://drive.google.com/file/d/1lAME-2-2FHq5aOBMpVlLJQ0xOLuD01Jq/view?usp=drive_link",
  portfolio_repository: "https://github.com/naren-prithvi-b/masterPortfolio",
  githubProfile: "https://github.com/naren-prithvi-b",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/naren-prithvi-b",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/naren-prithvi/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:narenprithvihamilton@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills Section
const skills = {
  data: [
    {
      title: "QA Automation & Functional Testing",
      fileName: "FullStackImg",
      skills: [
        "⚡ Writing robust test cases using Selenium, TestNG, and Playwright",
        "⚡ Implementing automation frameworks for regression and smoke testing",
        "⚡ Integrating with CI/CD tools like Jenkins and version control (Git)",
        "⚡ Performing REST API testing using Postman and REST-assured",
      ],
      softwareSkills: [
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: { color: "#43B02A" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: { color: "#007396" },
        },
        {
          skillName: "Playwright",
          fontAwesomeClassname: "simple-icons:microsoft",
          style: { color: "#0E70C0" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: { color: "#0052CC" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: { color: "#D24939" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
      ],
    },
  ],
};

// Competitive Sites
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: { color: "#181717" },
      profileLink: "https://github.com/naren-prithvi-b",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: { color: "#0077B5" },
      profileLink: "https://www.linkedin.com/in/YOUR-LINKEDIN-ID",
    },
    {
      siteName: "Test Automation Projects",
      iconifyClassname: "simple-icons:selenium",
      style: { color: "#43B02A" },
      profileLink: "https://github.com/naren-prithvi-b?tab=repositories",
    },
    {
      siteName: "Postman Public Workspace",
      iconifyClassname: "simple-icons:postman",
      style: { color: "#FF6C37" },
      profileLink: "https://www.postman.com/your-workspace-link",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: { color: "#20BEFF" },
      profileLink: "https://www.kaggle.com/YOUR-KAGGLE-ID",
    },
  ],
};

// Degrees Section
const degrees = {
  degrees: [
    {
      title: "Dr.NGP Institute Of Technology, Coimbatore",
      subtitle: "B.E. in Computer Engineering",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Studied core CS subjects: DS, Algorithms, DBMS, OS, AI, etc.",
        "⚡ Completed certifications on Deep Learning, Data Science, and Full Stack Development.",
      ],
      website_link: "https://www.drngpit.ac.in/",
      logo_path: NGPLogo, // Added logo here
    },
  ],
};

// Certifications Section
const certifications = {
  certifications: [
    {
      title: "ISTQB Certified Tester Foundation Level (CTFL)",
      subtitle: "Certified by ISTQB",
      certificate_link:
        "https://www.linkedin.com/posts/naren-prithvi-b-18057617b_share-istqbcertified-softwaretesting-activity-7070603253947777024-x-eP",
      alt_name: "ISTQB",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Professional Experience",
  description:
    "Experienced QA Tester working in BFSI domain with expertise in automation frameworks, API testing and Agile delivery.",
  header_image_path: ExperienceImg,
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Quality Assurance Engineer",
          company: "Azentio Software",
          company_url: "https://www.azentio.com",
          duration: "June 2025 - Present",
          location: "India",
          description:
            "Working on enterprise banking QA automation, test design, API validation using Postman, and Agile delivery.",
          color: "#FF6F00",
          logo_path: AzentioLogo, // Added logo here
        },
        {
          title: "Test Engineer",
          company: "Expleo Solutions Limited",
          company_url: "https://expleogroup.com",
          duration: "Mar 2023 - May 2025",
          location: "Riyadh, Saudi Arabia",
          description:
            "Functional & Automation testing in BFSI domain using Selenium, TestNG, Java, and Cucumber. Finacle upgrade and Oracle CRM CX projects.",
          color: "#0078D4",
          logo_path: ExpleoLogo, // Added logo here
        },
      ],
    },
  ],
};

// Publications Header
const publicationsHeader = {
  title: "Articles & Blogs",
  description:
    "I occasionally write about QA testing strategies, automation frameworks, and tools that help boost software quality.",
  avatar_image_path: "blogs_image.svg",
};

// Publications Section
const publications = {
  data: [
    {
      id: "selenium-vs-playwright",
      name: "Selenium vs Playwright",
      createdAt: "2024-11-10",
      description: "Comparison of Selenium and Playwright for test automation.",
      url:
        "https://medium.com/@narenqa/selenium-vs-playwright-automation-war-2024",
    },
    {
      id: "ci-cd-for-testers",
      name: "CI/CD for Testers",
      createdAt: "2024-08-19",
      description:
        "How QA engineers integrate with Jenkins and GitHub Actions.",
      url: "https://medium.com/@narenqa/ci-cd-for-testers-jenkins-and-gha",
    },
  ],
};

// Contact Page Data
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "I am open to job opportunities and collaborations. Feel free to reach out to me via email or social media.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Coimbatore, India",
    city: "Coimbatore",
    state: "Tamilnadu",
    country: "India",
    zipCode: "642207",
    phone: "+91 6383193187",
  },
  socialMediaSection: {
    title: "Social Media",
    subtitle: "Connect with me on social networks",
    socialMediaLinks: [
      {
        name: "Github",
        link: "https://github.com/naren-prithvi-b",
        fontAwesomeIcon: "fa-github",
        backgroundColor: "#181717",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/naren-prithvi-b-18057617b-18057617b/",
        fontAwesomeIcon: "fa-linkedin-in",
        backgroundColor: "#0077B5",
      },
      {
        name: "Gmail",
        link: "mailto:narenprithvihamilton@gmail.com",
        fontAwesomeIcon: "fa-google",
        backgroundColor: "#D14836",
      },
    ],
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  publicationsHeader,
  publications,
  contactPageData,
};
