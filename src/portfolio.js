// src/portfolio.js
import AzentioLogo from "./assets/images/Azentio.png";
import ExpleoLogo from "./assets/images/Expleo.png";
import ExperienceImg from "./assets/images/experience.svg";
import NGPLogo from "./assets/images/NGP.png";

/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
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
  nickname: "debug_monk",
  subTitle:
    "QA-focused SDET skilled in Selenium, Playwright, TestNG, and API testing across Agile environments. Committed to engineering quality software through efficient, reliable, and maintainable test automation.",
  resumeLink:
    "https://drive.google.com/file/d/1Jqur708hRuPhlPGGrVXPhac_BYrQS-Ez/view",
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
        "⚡ Studied core CS subjects: DS, Algorithms, DBMS, OS, Cloud Computing, etc.",
        "⚡ Completed certifications on AWS Cloud Practitioner, Python , and Full Stack Development.",
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
      title: "Certificate of Completion: Claude Code 101",
      subtitle: "Anthropic",
      duration: "Issued Aug 2026",
      description:
        "Completed a self-paced course on using Claude Code for AI-assisted software development.",
      certificate_link: "https://verify.skilljar.com/c/9dornpdibiwm",
      alt_name: "Anthropic",
      icon: "simple-icons:anthropic",
      color_code: "#19191999",
    },
    {
      title: "Claude Academy: Claude 101",
      subtitle: "Anthropic",
      duration: "Issued Aug 2026",
      description:
        "Learned foundational concepts of working with Claude AI models.",
      certificate_link:
        "https://academy.claude.com/verify/7ccec8e9980d286dbbf9ed705fcd85c0",
      alt_name: "Anthropic",
      icon: "simple-icons:anthropic",
      color_code: "#19191999",
    },
    {
      title: "ISTQB Certified Tester Foundation Level (CTFL)",
      subtitle: "ISTQB - International Software Testing Qualifications Board",
      duration: "Issued Apr 2023",
      description:
        "Validated core knowledge of software testing principles, test design techniques, and QA processes.",
      certificate_link:
        "https://www.linkedin.com/posts/naren-prithvi-b-18057617b_share-istqbcertified-softwaretesting-activity-7070603253947777024-x-eP",
      alt_name: "ISTQB",
      icon: "mdi:certificate-outline",
      color_code: "#1F70C199",
    },
    {
      title: "Problem Solving (Basic)",
      subtitle: "HackerRank",
      duration: "Issued Sep 2022",
      description:
        "Demonstrated basic problem-solving and algorithmic thinking skills on HackerRank.",
      certificate_link: "https://www.hackerrank.com/certificates/14f8635198ab",
      alt_name: "HackerRank",
      icon: "simple-icons:hackerrank",
      color_code: "#2EC86699",
    },
    {
      title: "Introduction to Python Completion Certificate",
      subtitle: "Coding Ninjas",
      duration: "Issued Oct 2021",
      description:
        "Completed a foundational Python programming course covering syntax, data structures, and OOP basics.",
      certificate_link:
        "http://files.codingninjas.in/certificate17841530e4d121071e5f7e0e343621a9b5b7853.pdf",
      alt_name: "Coding Ninjas",
      icon: "simple-icons:python",
      color_code: "#DF6E2199",
    },
    {
      title: "JavaScript",
      subtitle: "HackerRank",
      duration: "Issued Dec 2020",
      description:
        "Verified fundamental JavaScript programming skills on HackerRank.",
      certificate_link: "https://www.hackerrank.com/certificates/f71ecedf7a2a",
      alt_name: "HackerRank",
      icon: "simple-icons:hackerrank",
      color_code: "#2EC86699",
    },
    {
      title: "Analytics",
      subtitle: "Google",
      duration: "Issued Apr 2020 · Expired Apr 2023",
      description:
        "Completed Google's introduction to digital analytics fundamentals.",
      alt_name: "Google",
      icon: "simple-icons:google",
      color_code: "#4285F499",
    },
    {
      title: "Data Studio",
      subtitle: "Google",
      duration: "Issued Jun 2020 · Expired Apr 2023",
      description:
        "Learned to build interactive dashboards and reports using Google Data Studio.",
      alt_name: "Google",
      icon: "simple-icons:google",
      color_code: "#4285F499",
    },
    {
      title: "Google Digital Marketing",
      subtitle: "Google",
      duration: "Issued Mar 2020",
      description:
        "Completed Google's Digital Unlocked course on digital marketing fundamentals.",
      certificate_link:
        "https://learndigital.withgoogle.com/digitalunlocked/course/digital-marketing",
      alt_name: "Google",
      icon: "simple-icons:google",
      color_code: "#4285F499",
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
  keyAchievements: [
    "Received appreciation from Arab National Bank (ANB) top-level management for timely delivery and high-quality QA execution during the Finacle core banking upgrade.",
    "Recognized by the Manager of Mashreq Bank for making a strong impact in a short period through a structured QA approach, strong API testing skills, and backend validation expertise.",
    "Appreciated by the CEO and COO of Expleo Solutions for consistently delivering high-quality results on critical BFSI projects.",
    "Awarded the BOLD MINDS – Individual Award twice (2023 & 2024) for taking additional responsibilities and exceeding client expectations.",
    "Successfully validated high-risk banking workflows in Trade Finance, AML, and Payments, reducing business and compliance risks.",
  ],
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Development Engineer in Test (SDET-2)",
          company: "Azentio Software",
          company_url: "https://www.azentio.com",
          duration: "Jun 2025 - Present",
          location: "Bengaluru, India",
          descriptions: [
            "Member of the core product automation engineering team, driving large-scale automation across iMAL core banking modules.",
            "Contributed significantly to automation coverage, helping achieve ~70% automation of the iMAL application through scalable and reusable test frameworks.",
            "Designed and enhanced robust UI automation frameworks using Selenium, Playwright, Java, TestNG, and the Page Object Model (POM).",
            "Developed end-to-end automated test suites for critical business workflows, regression packs, API testing, and cross-module scenarios.",
            "Performed REST API automation and validation using Postman and Java utilities, with backend data verification using SQL queries.",
            "Integrated automation suites with CI/CD pipelines and managed source code using Git, Bitbucket and Jira in Agile environments.",
            "Built a Spring Boot–based native application to automate WAR patching and upgrade package generation, reducing deployment preparation time and manual effort.",
            "Developed a Jira AI Release Note Agent to automate release note generation, improving release preparation efficiency and engineering productivity.",
            "Managed the defect lifecycle through Jira, collaborating with cross-functional teams to deliver stable, release-ready builds.",
            "Executed functional, integration, system, and regression testing while validating complex business rules and transaction workflows.",
            "Experience in SWIFT-based cross-border payments, including ISO 20022 standards and MT/MX message formats.",
          ],
          color: "#FF6F00",
          logo_path: AzentioLogo, // Added logo here
        },
        {
          title: "Test Engineer",
          company: "Expleo Solutions Limited",
          company_url: "https://expleogroup.com",
          duration: "Mar 2023 - May 2025",
          location: "Riyadh, Saudi Arabia",
          descriptions: [
            "Performed functional and automation testing for BFSI applications, ensuring high quality releases across web, API, and database layers.",
            "Followed the complete Software Testing Life Cycle (STLC), including requirement analysis, test planning, test case design, execution, and test closure activities.",
            "Developed and built automation scripts using Selenium WebDriver, Java, TestNG, and Cucumber BDD framework with Page Object Model (POM).",
            "Contributed to Finacle upgrade and Oracle CRM CX projects, ensuring seamless quality delivery.",
          ],
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
        link:
          "https://www.linkedin.com/in/naren-prithvi-b-18057617b-18057617b/",
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
