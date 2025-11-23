// src/data/portfolioData.js
import { 
  Code, 
  Terminal, 
  Server, 
  Database, 
  Cpu 
} from 'lucide-react';
import gbuImg from '../assets/gbu.png';   
import dbrauImg from '../assets/dbrau.png';
import profileImg from '../assets/profile.jpeg';
import wandurl from '../assets/wandurlust.png';
import billingImg from '../assets/billing.png';

export const personalInfo = {
  name: "Rishabh Sharma",
  role: "Full Stack Developer & AI Specialist",
  tagline: "Building scalable web solutions with Java, MERN Stack, and AI Integration.",
  email: "work.rishabhs0@gmail.com",
  phone: "8860814357",
  location: "Noida, India",
  profileImage: profileImg,
  socials: {
    linkedin: "https://www.linkedin.com/in/rishabhsharma-javafullstack/", 
    github: "https://github.com/Rishabh5401",         
    leetcode: "https://leetcode.com/u/Rishabh5401/",  
    hackerrank: "https://www.hackerrank.com/profile/rasus8800"   
  }
};

export const skills = [
  { 
    category: "Languages", 
    icon: <Code size={20} />,
    items: [
      { name: "Java", url: "https://skillicons.dev/icons?i=java" },
      { name: "Java Swing", url: "https://skillicons.dev/icons?i=java" }, // Added Swing
      { name: "JavaScript", url: "https://skillicons.dev/icons?i=js" },
      { name: "Python", url: "https://skillicons.dev/icons?i=python" },
      { name: "SQL", url: "https://skillicons.dev/icons?i=mysql" }
    ] 
  },
  { 
    category: "Data Science & AI", 
    icon: <Cpu size={20} />, 
    items: [
      { name: "Pandas", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Matplotlib", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      { name: "Scikit-Learn", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Prompt Eng.", url: "https://cdn-icons-png.flaticon.com/512/8637/8637101.png" }
    ] 
  },
  { 
    category: "Frontend Dev", 
    icon: <Terminal size={20} />,
    items: [
      { name: "React", url: "https://skillicons.dev/icons?i=react" },
      { name: "HTML5", url: "https://skillicons.dev/icons?i=html" },
      { name: "CSS3", url: "https://skillicons.dev/icons?i=css" },
      { name: "Bootstrap", url: "https://skillicons.dev/icons?i=bootstrap" },
      { name: "Tailwind", url: "https://skillicons.dev/icons?i=tailwind" }
    ] 
  },
  { 
    category: "Backend & DB", 
    icon: <Server size={20} />,
    items: [
      { name: "Spring Boot", url: "https://skillicons.dev/icons?i=spring" }, // Added Spring Boot
      { name: "Node.js", url: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express", url: "https://skillicons.dev/icons?i=express" },
      { name: "MongoDB", url: "https://skillicons.dev/icons?i=mongo" },
      { name: "MySQL", url: "https://skillicons.dev/icons?i=mysql" },
    ] 
  },
  { 
    category: "Tools & Cloud", 
    icon: <Database size={20} />,
    items: [
      { name: "Git", url: "https://skillicons.dev/icons?i=git" },
      { name: "Docker", url: "https://skillicons.dev/icons?i=docker" },
      { name: "AWS", url: "https://skillicons.dev/icons?i=aws" },
      { name: "Postman", url: "https://skillicons.dev/icons?i=postman" },
      { name: "VS Code", url: "https://skillicons.dev/icons?i=vscode" }
    ] 
  }
];

export const experience = [
  {
    company: "JSpider",
    role: "Java Full Stack Trainee",
    period: "Jan 2025 – Sep 2025",
    location: "Noida, IN",
    description: [
      "Developed 5+ enterprise-grade console applications including ATM Simulator and Billing Systems using Core Java.",
      "Designed 50+ test cases covering positive/negative scenarios, reducing runtime crashes by 90%.",
      "Leveraged AI prompt engineering for test case generation and code optimization, reducing development time by 40%."
    ]
  },
  {
    company: "Apex Byte",
    role: "Web Development Intern",
    period: "Nov 2024 – Dec 2024",
    location: "Noida, IN",
    description: [
      "Built responsive web pages with HTML5, CSS3, and Bootstrap ensuring consistent rendering.",
      "Optimized Login and Dashboard flows to boost user engagement.",
      "Utilized AI tools for debugging, performance optimization, and faster code reviews."
    ]
  }
];

export const projects = [
  {
    title: "Wanderlust",
    subtitle: "Hotel Listing Platform",
    tech: ["MERN Stack", "Redux", "JWT"],
    description: "A full-stack hotel booking platform with secure authentication. Features dynamic search, location filters, and real-time API data fetching.",
    // I added a placeholder image URL here. You can replace this later!
    image: wandurl ,
    links: { demo: "https://airbnb-uzwz.onrender.com/listings", code: "https://github.com/Rishabh5401/Airbnb.git" }
  },
  {
    title: "Java Notepad App",
    subtitle: "Desktop Application",
    tech: ["Java Swing", "AWT", "File I/O"],
    description: "A text editor supporting open, save, cut, copy, and paste operations. Optimized using AI for edge-case testing.",
    // I added a placeholder image URL here.
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    links: { demo: "https://github.com/Rishabh5401/Java-Notepad-App.git", code: "https://github.com/Rishabh5401/Java-Notepad-App.git" }
  },
  {
    title: "Billing Software",
    subtitle: "Desktop Application",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    description: "A comprehensive billing system for inventory management. Features include invoice generation, stock tracking, and sales reporting using a robust Java Swing interface.",
    image: billingImg,
    links: { demo: "https://github.com/Rishabh5401/BillingSoftware.git", code: "https://github.com/Rishabh5401/BillingSoftware" }
  },
  {
    title: "CARgo",
    subtitle: "Car Sales Portal",
    tech: ["React", "Bootstrap", "JS"],
    description: "A modern car dealership website allowing users to browse vehicle listings, filter by category, and view detailed specifications with a responsive design.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1283&q=80",
    links: { demo: "https://rishabh5401.github.io/CARgo/", code: "https://github.com/Rishabh5401/CARgo" }
  },
  {
    title: "2048 Game",
    subtitle: "Java GUI Game",
    tech: ["Java", "AWT", "Swing", "OOPs"],
    description: "A Java implementation of the classic 2048 puzzle game. Features custom game logic, score tracking, and keyboard event handling for smooth gameplay.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    links: { demo: "https://github.com/Rishabh5401/2048_Game.git", code: "https://github.com/Rishabh5401/2048_Game" }
  },
  {
    title: "HealthCare Dashboard",
    subtitle: "Analytics Platform",
    tech: ["React", "Chart.js", "CSS"],
    description: "An interactive healthcare dashboard for visualizing patient metrics, hospital bed occupancy, and recovery rates using dynamic charts and data tables.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    links: { demo: "https://github.com/Rishabh5401/HealthCare-Dashboard.git", code: "https://github.com/Rishabh5401/HealthCare-Dashboard" }
  },
  {
    title: "Task Manager API",
    subtitle: "Backend REST API",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    description: "A secure backend API for task management. Supports CRUD operations, user authentication, and task sorting/filtering features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80",
    links: { demo: "https://github.com/Rishabh5401/task-manager-api-js.git", code: "https://github.com/Rishabh5401/task-manager-api-js" }
  },
  {
    title: "Spotify Clone",
    subtitle: "Music Player UI",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description: "A responsive clone of the Spotify web player. Features song playback controls, playlist navigation, and a sleek dark-mode user interface.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    links: { demo: "https://rishabh5401.github.io/Spotify-Clone/", code: "https://github.com/Rishabh5401/Spotify-Clone" }
  },
  {
    title: "Simon Game",
    subtitle: "Memory Game",
    tech: ["HTML", "CSS", "jQuery/JS"],
    description: "A web-based memory game where players must repeat increasingly complex sequences of lights and sounds. Logic built with JavaScript.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    links: { demo: "https://github.com/Rishabh5401/SimonGame.git", code: "https://github.com/Rishabh5401/SimonGame" }
  },
  {
    title: "Tata Data Visualization",
    subtitle: "Business Intelligence",
    tech: ["Python", "Matplotlib", "Seaborn"],
    description: "A data visualization project analyzing Tata retail data to uncover sales trends, customer demographics, and seasonal purchasing patterns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    links: { demo: "https://github.com/Rishabh5401/Tata_Data_visualization/blob/main/Doc1.pdf", code: "https://github.com/Rishabh5401/Tata_Data_visualization" }
  },
  {
    title: "Sales Data Analysis",
    subtitle: "EDA Project",
    tech: ["Python", "Pandas", "Jupyter"],
    description: "Exploratory Data Analysis (EDA) on large sales datasets. Includes data cleaning, feature engineering, and statistical insights to optimize inventory.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
    links: { demo: "https://github.com/Rishabh5401/sales-data-analysis.git", code: "https://github.com/Rishabh5401/sales-data-analysis" }
  },
  {
    title: "Canvas Game",
    subtitle: "2D Web Game",
    tech: ["HTML5 Canvas", "JavaScript"],
    description: "An interactive 2D game built from scratch using the HTML5 Canvas API. Features collision detection, sprite animation, and score tracking.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    links: { demo: "https://github.com/Rishabh5401/Canvas-Game.git", code: "https://github.com/Rishabh5401/Canvas-Game" }
  },
  {
    title: "Data Science Assignment",
    subtitle: "Machine Learning",
    tech: ["Python", "Scikit-Learn", "Numpy"],
    description: "A comprehensive notebook covering the end-to-end data science pipeline: data preprocessing, model selection, and performance evaluation.",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    links: { demo: "https://github.com/Rishabh5401/Data-Science-Assignment/blob/main/Rishabh_Sharma_Clustering.pdf", code: "https://github.com/Rishabh5401/Data-Science-Assignment" }
  }
];


// Inside src/data/portfolioData.js

export const education = [
  {
    degree: "Masters of Computer Application (Data Science)",
    school: "Gautam Buddha University",
    year: "2023 – 2025",
    score: "GPA: 8.34",
    // I found a representative image of GBU (The Meditation Center)
    image: gbuImg
  },
  {
    degree: "Bachelor of Science (PCM)",
    school: "Dr. Bhim Rao Ambedkar University",
    year: "2020 – 2023",
    score: "GPA: 6.1",
    // Using a generic academic building image (You can replace this with the actual Agra university photo)
    image: dbrauImg
  }
];