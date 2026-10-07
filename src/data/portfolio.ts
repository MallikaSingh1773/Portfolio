export const profile = {
  name: "Mallika Singh",
  role: "Data Engineer | AI Engineer | Java Backend Developer",
  badge: "Data & AI Engineer Portfolio",
  heading: "Building data pipelines, RAG systems, and agentic AI applications.",
  subheading:
    "Hi, I'm Mallika Singh, a Data Engineer Intern at V4C.ai and former Associate Consultant at Intellect Design Arena, where I implemented RAG and Agentic AI workflows alongside Java development. I build ETL pipelines with Python and SQL and LLM-powered applications with LangChain and LangGraph.",
  location: "Patna, India",
  email: "singhmallika1773@gmail.com",
  phone: "+91 9263663380",
  github: "https://github.com/MallikaSingh1773",
  linkedin: "https://www.linkedin.com/in/mallikasingh05",
  heroCards: [
    { label: "Current Role", value: "Data Engineer Intern at V4C.ai" },
    { label: "Previously", value: "Associate Consultant at Intellect Design Arena" },
    { label: "Focus", value: "Data Engineering, RAG, Agentic AI, Java" },
  ],
};

export const about = {
  heading: "A developer who loves working with data and building intelligent AI systems.",
  intro:
    "I focus on turning raw data into reliable, analytics-ready pipelines and building LLM-powered applications that actually solve problems.",
  paragraphs: [
    "I'm a Computer Science Engineering graduate currently working as a Data Engineer Intern at V4C.ai, where I work with Python, SQL, ETL/ELT pipelines, data warehousing, and data modeling. I'm also learning PySpark and Databricks for large-scale data processing.",
    "On the AI side, I build agentic AI systems and RAG workflows using LangChain, LangGraph, LLM APIs, prompt engineering, and FastAPI. My project CoderBuddy is a multi-agent system that turns natural language into complete codebases.",
    "Before V4C.ai, I worked as an Associate Consultant at Intellect Design Arena, where I implemented RAG and Agentic AI workflows and did Java development with Spring Boot, JPA/Hibernate, REST APIs, and SQL databases. I've also used these skills in full-stack projects like EventX.",
    "I enjoy writing clean code, solving problems (300+ DSA problems solved), and building software that creates real-world impact.",
  ],
  miniCards: [
    {
      label: "Education",
      value: "B.Tech Computer Science Engineering, Vellore Institute of Technology, Andhra Pradesh",
    },
    { label: "Core Stack", value: "Python, SQL, LangChain, LangGraph, Java, Spring Boot" },
    {
      label: "Interests",
      value: "Data Engineering, Generative AI, RAG, Backend Systems",
    },
  ],
};

export const education = [
  {
    title: "B.Tech Computer Science Engineering",
    org: "Vellore Institute of Technology, Andhra Pradesh",
    tags: ["2022 – 2026", "CGPA: 8.58"],
  },
  { title: "Class XII", org: "Higher Secondary Education", tags: ["School Education", "83%"] },
  { title: "Class X", org: "Secondary Education", tags: ["School Education", "91%"] },
];

export const skills = [
  {
    title: "Languages",
    icon: "code",
    items: ["Python", "SQL", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Data Engineering",
    icon: "database",
    items: [
      "ETL / ELT Pipelines",
      "Data Warehousing",
      "Data Modeling",
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "PySpark (Learning)",
      "Databricks (Learning)",
    ],
  },
  {
    title: "Generative AI",
    icon: "brain",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Agentic AI",
      "LLM APIs",
      "Prompt Engineering",
      "Vector Databases",
      "Google Gemini API",
    ],
  },
  {
    title: "ML & Analytics",
    icon: "chart",
    items: ["Scikit-learn", "Machine Learning", "Feature Engineering", "EDA", "Streamlit"],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      "FastAPI",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "JPA / Hibernate",
      "REST APIs",
      "React",
      "JUnit",
    ],
  },
  {
    title: "Cloud & Tools",
    icon: "cloud",
    items: ["AWS", "Git", "GitHub", "DSA", "OOP", "DBMS"],
  },
] as const;

export const projects = [
  {
    name: "CoderBuddy",
    subtitle: "Agentic AI Software Engineer",
    github: "https://github.com/MallikaSingh1773/CoderBuddy",
    description:
      "A multi-agent AI system that converts natural language instructions into complete, working codebases using a team of autonomous AI agents.",
    highlights: [
      "Built Planner, Architect, and Coder agents orchestrated as a LangGraph workflow.",
      "Designed specialized AI coding agents using role-based prompting.",
      "Implemented a state-managed workflow with more than 15 transitions, reducing redundant LLM calls by 25%.",
      "Added secure file tools and real-time agent tracing, improving debugging speed and execution visibility by 30%.",
    ],
    tech: ["Python", "LangChain", "LangGraph", "Agentic AI", "LLMs", "Prompt Engineering"],
  },
  {
    name: "Vendalyze",
    subtitle: "Retail Data Pipeline & Analytics",
    github: "https://github.com/MallikaSingh1773/Vendalyze",
    description:
      "An end-to-end data project that ingests raw retail CSVs into a database, builds a vendor summary table with SQL, and analyzes it in Python to find business insights.",
    highlights: [
      "Built a Python ingestion pipeline with Pandas and SQLAlchemy that loads raw CSVs into database tables with logging.",
      "Wrote multi-CTE SQL joins across purchases, sales, and freight data to build an analytics-ready vendor summary.",
      "Found that the top 10 vendors drive 65.69% of purchases and identified $2.71M in unsold inventory.",
      "Validated findings with hypothesis testing and correlation analysis using Python.",
    ],
    tech: ["Python", "SQL", "Pandas", "SQLAlchemy", "ETL", "EDA"],
  },
  {
    name: "TrackNPrep",
    subtitle: "AI Powered Interview Preparation Platform",
    github: "https://github.com/MallikaSingh1773/TrackNPrep",
    description:
      "An AI-powered mock interview platform that generates role-based questions in real time and runs live conversational interview sessions.",
    highlights: [
      "Used the Google Gemini API to generate role-specific interview questions in real time.",
      "Integrated Vapi AI voice agents for a live, conversational interview round.",
      "Optimized AI response latency to approximately 2–4 seconds.",
      "Designed MongoDB session storage for fast retrieval of saved interview sessions.",
    ],
    tech: ["Google Gemini API", "Vapi AI", "React", "MongoDB", "REST APIs"],
  },
  {
    name: "Anime Recommendation System",
    subtitle: "Machine Learning Recommendation Engine",
    github: "https://github.com/MallikaSingh1773/AnimeRecommendation",
    description:
      "A collaborative filtering recommendation engine that suggests personalized anime using machine learning.",
    highlights: [
      "Processed over 12,000 anime records.",
      "Implemented KNN and cosine similarity.",
      "Improved recommendation precision by approximately 75%.",
      "Built an interactive Streamlit dashboard.",
    ],
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Machine Learning"],
  },
  {
    name: "EventX",
    subtitle: "Full Stack Event Booking Platform",
    github: "https://github.com/MallikaSingh1773/eventx",
    description:
      "An event booking and ticketing platform with a Spring Boot API and React client, where users discover events, lock seats, pay, and receive QR tickets.",
    highlights: [
      "Built a Spring Boot 3 REST API with Spring Security, JWT auth, and attendee, organizer, and admin roles.",
      "Implemented timed seat locking so two users cannot book the same seat at checkout.",
      "Integrated Razorpay payments with HMAC verification and webhooks, plus ZXing QR tickets.",
      "Documented all REST APIs with Swagger / OpenAPI and added admin analytics for revenue and bookings.",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JPA", "React", "PostgreSQL"],
  },
  {
    name: "MeetJava",
    subtitle: "Real-Time Video Conferencing Platform",
    github: "https://github.com/MallikaSingh1773/MeetJava",
    description:
      "A Zoom-style video meeting platform built in Java with multi-party video and audio, screen sharing, live chat, and consent-based remote desktop control.",
    highlights: [
      "Built a Spring Boot signaling server over WebSockets with peer-to-peer WebRTC for multi-party video and audio.",
      "Implemented screen sharing with RTCRtpSender.replaceTrack, switching sources without renegotiation.",
      "Persisted chat to PostgreSQL and replayed full history to participants who join late.",
      "Built a native Java desktop agent for consent-based remote desktop control, backed by JUnit tests.",
    ],
    tech: ["Java", "Spring Boot", "WebRTC", "WebSockets", "PostgreSQL", "JUnit"],
  },
];

export const experience = [
  {
    role: "Data Engineer Intern",
    company: "V4C.ai · Remote",
    period: "September 2026 – Present",
    points: [
      "Working on ETL / ELT pipelines using Python and SQL to ingest, clean, and transform data for analytics.",
      "Contributing to data warehousing and data modeling to build reporting-ready datasets.",
      "Writing SQL transformations and data quality checks to keep pipeline outputs accurate.",
      "Currently learning PySpark and Databricks for large-scale distributed data processing.",
    ],
  },
  {
    role: "Associate Consultant",
    company: "Intellect Design Arena · Chennai",
    period: "June 2026 – August 2026",
    points: [
      "Implemented RAG and Agentic AI workflows on Purple Fabric, Intellect's Agentic AI platform, building and deploying AI bots that automate enterprise workflows.",
      "Developed a full-stack Banking Customer Service Portal using Spring Boot, Angular, TypeScript, and REST APIs.",
      "Built RESTful APIs using Spring Boot, JPA/Hibernate, MySQL, and H2 while implementing CRUD operations, validation, and global exception handling.",
      "Collaborated within Agile teams using Git while debugging, testing with JUnit, reviewing code, and enhancing application features.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "NIELIT (Govt. of India)",
    period: "May 2025 – June 2025",
    points: [
      "Built 2+ machine learning projects in Python using Pandas, NumPy, and Scikit-learn.",
      "Improved prediction accuracy by 20% through data preprocessing and feature engineering.",
    ],
  },
];

export const certifications = [
  {
    title: "AWS Academy Cloud Architecting",
    org: "AWS",
    year: "2025",
    url: "https://drive.google.com/file/d/1F72ICZyEMYirJbWGVoaTEeKQQkWP_QPj/view",
  },
  {
    title: "AWS Academy Cloud Foundations",
    org: "AWS",
    year: "2025",
    url: "https://drive.google.com/file/d/1B3abJ6HOvmOj1B1VdBHCuYijVBsqVjuv/view",
  },
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    org: "Microsoft",
    year: "2025",
    url: "https://drive.google.com/file/d/1znjYV7zi3Qk8cKpda0ZTZnjKaXSRtOvJ/view",
  },
  {
    title: "Oracle Cloud Infrastructure Generative AI Professional",
    org: "Oracle",
    year: "2025",
    url: "https://drive.google.com/file/d/1ebkozDdqO3LwuTwLvlQUSKOcGOkSSljE/view",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
