import { title } from "process";
import { CertificateProps, EducationProps, ExperienceProps, ProjectProps, SkillProps } from "./types";

export const experienceList: ExperienceProps[] = [
  {
    id: 1,
    title: "Cybersecurity Consultant",
    company: "TechBulls Botswana",
    location: "Gaborone, Botswana",
    startDate: "October 2023",
    endDate: "Present",
    responsibilities: [
        "Deployed and configured Wazuh SIEM in a SOC environment, managing agent deployment, log ingestion, and endpoint security monitoring across client infrastructure.",
        "Performed daily alert triage and security event analysis, investigating potential threats, assessing impact, and escalating incidents through defined response workflows.",
        "Produced independent SecOps reports detailing threat detection findings, alert severity, and remediation recommendations — reducing reliance on external security vendors.",
        "Authored internal documentation standardizing the security reporting methodology, ensuring consistency and quality across daily incident reports.",
        "Coordinated incident response workflows with clients during security events including agent disconnections and anomalous endpoint activity.",
        "Monitored client asset health and network security posture continuously, maintaining full endpoint visibility and supporting vulnerability management processes."
    ]
  },
  {
    id: 2,
    title: "Tech Support Intern",
    company: "Botswana Accountancy College",
    location: "Gaborone, Botswana",
    startDate: "February 2020",
    endDate: "August 2020",
    responsibilities: [
        "Delivered technical support to staff and students, resolving hardware, software, and network security issues efficiently.", 
        "Configured and maintained IT equipment and systems, contributing to a stable and secure IT environment.",
        "Supported network monitoring and troubleshooting activities, gaining foundational experience in network security operations.",
        "Provided technical onboarding and training to new staff on IT systems and security best practices."
    ]
  }
];

export const skillsList: SkillProps[] = [
    {
        id: 1,
        domain: "Cybersecurity & SOC Operations",
        details: "SIEM Deployment & Configuration (Wazuh), Alert Triage, Threat Detection, Log Analysis & Correlation, Security Event Monitoring, Incident Response, Endpoint Security, Vulnerability Management, SOC Operations, Security Reporting"
    },
    {
        id: 2,
        domain: "Cloud & Infrastructure",
        details: "Oracle Cloud Infrastructure (OCI), Identity & Access Management (IAM), Cloud Security Monitoring, Cloud Observability & Monitoring, Cloud Infrastructure Architecture, OCI Foundations & Associate-level Administration"
    },
    {
        id: 3,
        domain: "Network Security",
        details: "Network Security Monitoring, Network Traffic Analysis, SOC Operations Workflow, Threat Detection Lifecycle (Cisco CyberOps)"
    },
    {
        id: 4,
        domain: "Web Development",
        details: "React (Core Concepts & Component Architecture), Next.js Framework, Frontend Development, Portfolio & Web Application Development"
    },
    {
        id: 5,
        domain: "General Technical Skills",
        details: "Technical Report Writing, IT Consulting, Problem Solving"
    }
]

export const certificateList: CertificateProps[] = [
    {
        id: 1,
        title: "OCI FOUNDATIONS ASSOCIATE",
        description: "Validates core knowledge of Oracle Cloud Infrastructure services, cloud computing concepts, pricing models, and security fundamentals across OCI environments.",
        tags: [
            "CLOUD FUNDAMENTALS",
            "OCI",
            "SECURITY"
        ],
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AB9728D9D73038C72152D973D786277ED68B04B5B93096CAEFD43DA84407D89B"
    },
    {
        id: 2,
        title: "OCI ARCHITECT ASSOCIATE",
        description: "Demonstrates the ability to design scalable, resilient, and secure cloud infrastructure solutions on Oracle Cloud Infrastructure, including networking, compute, and storage architecture.",
        tags: [
            "CLOUD ARCHITECTURE",
            "OCI",
            "INFRASTRUCTURE DESIGN"
        ],
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=16C8267F4E7B1BFB37F3DA0A54B499E02B592E4046D4E919399A6CE1CF3F6394"
    },
    {
        id: 3,
        title: "OCI OBSERVABILITY PROFESSIONAL",
        description: "Validates expertise in implementing monitoring, logging, alerting, and observability strategies across Oracle Cloud Infrastructure environments to maintain visibility and operational health.",
        tags: [
            "CLOUD MONITORING",
            "OCI",
            "OBSERVABILITY"
        ],
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1940A68E7777C07EE681EE8110DE2D683D7EAB5B023C76C5825FD5E0ACD5CA47"
    },
    {
        id: 4,
        title: "CISCO CYBEROPS ASSOCIATE COURSE",
        description: "Completed the Cisco CyberOps Associate course, covering security monitoring, host-based analysis, network intrusion analysis, and security policies and procedures. Preparing for the CBROPS exam.",
        tags: [
            "CISCO",
            "SECURITY OPERATIONS",
            "NETWORK SECURITY"
        ],
        link: "https://www.credly.com/badges/17407221-cc98-44de-9683-711a8b4f5746/linked_in_profile"

    }
]

export const educationList: EducationProps[] = [
    {
        id: 1,
        course: "BSc (Honours) in Computer Systems Engineering",
        institute: "University of Sunderland",
        startDate: "August 2017",
        endDate: "August 2021",
        content: [
            "Studied core topics in software development, database systems, artificial intelligence, and Internet of Things (IoT)",
            "Gained hands-on experience with JavaScript, C#, Python, and SQL across industry-relevant projects",
            "Completed a final year research project applying engineering principles to a real-world computing problem",
            "Covered specialized areas including cybersecurity, secure software development, agile methodologies, and network security",
            "Worked with professional-grade developer software and hardware through Cisco-accredited labs"
        ]
    }
]

export const projectList: ProjectProps[] = [
    {
        id: 1,
        title: "PORTFOLIO WEBSITE",
        imageSrc: "/images/portfolio thumbnail.webp",
        description: "A personal portfolio built with Next.js and deployed on Vercel, showcasing my experience, certifications, and projects in cybersecurity and software development.",
        tags: [
            "NEXT.JS",
            "TAILWIND CSS",
            "TYPESCRIPT"
        ],
        liveLink: "https://phatsimopheko.com",
        repoLink: "https://github.com/pat-2142/next.js-portfolio"
    }
]