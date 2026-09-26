import { CertificateProps, EducationProps, ExperienceProps, ProjectProps, SkillProps, LabSeriesProps } from "./types";

export const experienceList: ExperienceProps[] = [
    {
      id: 1,
      title: "Junior Cybersecurity Consultant — SOC Analyst",
      company: "TechBulls Botswana",
      location: "Gaborone, Botswana",
      startDate: "October 2024",
      endDate: "Present",
      responsibilities: [
          "Own L1 security operations for an enterprise client environment of 80+ Wazuh agents spanning Windows Server, Red Hat Enterprise Linux, AIX, and CentOS, processing 800,000–900,000 security events per day.",
          "Cover the full estate within a small in-house security team, owning the client SecOps reporting function end to end.",
          "Act as primary client-facing contact for security operations, coordinating incident escalation and remediation between the client and an offshore L2/L3 team across a 3.5-hour time zone gap.",
          "Produce daily, weekly, and monthly SecOps reports covering detection findings, alert severity distribution, endpoint health, and remediation recommendations for client stakeholders.",
          "Built a Python reporting tool that reduced report production from 1–2 hours to 15–40 minutes, a roughly 70% cut in a recurring daily operational task.",
          "Authored the internal documentation standardising SecOps reporting methodology, then automated that methodology into the reporting pipeline.",
          "Triage CVE vulnerability findings across the estate, assessing exposure and coordinating remediation guidance with the client.",
          "Investigated a web-based attack campaign originating from a single source IP, establishing scope and coordinating response with the client and offshore team.",
          "Monitor endpoint agent health and connectivity across the fleet, identifying and resolving agent disconnections to maintain continuous visibility."
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Intern",
      company: "TechBulls Botswana",
      location: "Gaborone, Botswana",
      startDate: "October 2023",
      endDate: "October 2024",
      responsibilities: [
          "Monitored client endpoint agent health and connectivity across the estate via Wazuh SIEM, verifying continuous coverage and escalating platform issues to the offshore team responsible for L2/L3 support.",
          "Compiled daily monitoring reports for internal supervisor review, building early security reporting and documentation practice.",
          "Built working knowledge of the client environment, its telemetry sources, and the SIEM platform, later relied on when L1 support transferred in-house."
      ]
    },
    {
      id: 3,
      title: "Tech Support Intern",
      company: "Botswana Accountancy College",
      location: "Gaborone, Botswana",
      startDate: "January 2020",
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
        domain: "Security Operations",
        details: [
            "SIEM Deployment & Configuration (Wazuh)", "Alert Triage", "Threat Detection",
            "Log Analysis & Correlation", "Security Event Monitoring", "Incident Response",
            "Endpoint Security", "File Integrity Monitoring (FIM)", "Vulnerability Management",
            "CVE Triage", "SOC Operations"
        ]
    },
    {
        id: 2,
        domain: "Detection Engineering",
        details: [
            "Custom Detection Rule Development", "Correlation Rule Design", "MITRE ATT&CK Mapping",
            "MITRE ATT&CK Coverage Analysis", "Detection Tuning", "False Positive Reduction",
            "Rule Validation & Testing", "Attack Simulation"
        ]
    },
    {
        id: 3,
        domain: "Telemetry & Logging",
        details: [
            "Windows Security Event Log", "Sysmon", "PowerShell Module & Script Block Logging",
            "Windows Event Channel Collection", "Linux syslog & sshd Authentication Logs",
            "Log Ingestion & Parsing"
        ]
    },
    {
        id: 4,
        domain: "Platforms & Systems",
        details: [
            "Windows Server", "Red Hat Enterprise Linux", "AIX", "CentOS", "Ubuntu Server"
        ]
    },
    {
        id: 5,
        domain: "Cloud & Infrastructure",
        details: [
            "Oracle Cloud Infrastructure (OCI)", "Identity & Access Management (IAM)",
            "Cloud Security Monitoring", "Cloud Observability & Monitoring",
            "Cloud Infrastructure Architecture"
        ]
    },
    {
        id: 6,
        domain: "Network Security",
        details: [
            "Network Security Monitoring", "Network Traffic Analysis", "Threat Detection Lifecycle"
        ]
    },
    {
        id: 7,
        domain: "Automation & Reporting",
        details: [
            "Python Security Automation", "SecOps Reporting Standards", "Security Incident Reporting",
            "Remediation Documentation", "Security Policy Writing", "Technical Report Writing"
        ]
    },
    {
        id: 8,
        domain: "Software Engineering",
        details: [
            "SDLC", "Application Architecture", "React & Next.js", "Secure Coding", "Git & Version Control"
        ]
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

export const labSeriesList: LabSeriesProps[] = [
    {
        id: 1,
        title: "Building a Production-Grade SOC: A Wazuh Lab Series",
        description: "A hands-on, planned 10+ part series documenting the build of a production-grade SOC using Wazuh—covering deployment, detection engineering, alerting, and incident response, one lab at a time.",
        link: "/labs/wazuh-labs",
        tags: [
            "SIEM",
            "SOC OPERATIONS",
            "DETECTION ENGINEERING"
        ],     
    }
]