import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "NutriSmart",
      subtitle: "Smart Nutrition & Diet Planner",
      description: "A major project analyzing nutritional values to provide personalized diet plans. Helps users track intake and maintain a healthy lifestyle.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/ShivamUpadhyay20271/Nutri-Smart-Major-1", 
      role: "Full Stack"
    },
    {
      title: "ZeroBite",
      subtitle: "Food Waste Management Platform",
      description: "A platform connecting food donors with NGOs for efficient food redistribution. Features AI recipe generator, meal planner, and expiry tracker.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "AI"],
      link: "https://zerobite-five.vercel.app/", 
      role: "Full Stack"
    },
    {
      title: "WomiShield",
      subtitle: "Women Safety Application (Minor Project)",
      description: "Real-time location tracking and zone categorization (Safe/Unsafe) for women's safety. Includes emergency alerts and user-driven reporting.",
      tags: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
      link: "https://github.com/VinayJain2004/Minor_Project",
      role: "Frontend + Maps"
    },
    {
      title: "E-PLATFORM",
      subtitle: "Full Stack E-Commerce Solution",
      description: "A comprehensive e-commerce platform featuring product browsing, shopping cart functionality, user authentication, and secure payment processing.",
      tags: ["React", "node.js", "Express", "MongoDB"],
      link: "https://github.com/ShivamUpadhyay20271/E-PLATFORM", 
      role: "Full Stack"
    },
    {
      title: "Task Manager",
      subtitle: "Full Stack Productivity Tool",
      description: "A robust task management system with user authentication, task CRUD operations, priority setting, and status tracking (To-Do, In Progress, Done).",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/ShivamUpadhyay20271/TaskManager", 
      role: "Full Stack"
    },
    {
      title: "Srijan RGPV",
      subtitle: "Official Tech Fest Platform (Collaborator)",
      description: "Contributed as a Core MERN Stack Developer. Handled backend architecture, user authentication, and real-time database management for the college tech fest portal.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/VinayJain2004/Srijan_RGPV", 
      role: "MERN Developer"
    },
    {
      title: "Weather App",
      subtitle: "Real-time Forecast Dashboard",
      description: "A responsive weather application providing live temperature, humidity, and wind updates for any city using OpenWeatherMap API.",
      tags: ["JavaScript", "API Integration", "CSS3"],
      link: "https://github.com/ShivamUpadhyay20271/Weather",
      role: "Frontend"
    },
    {
      title: "Netflix Clone",
      subtitle: "Streaming Service Interface",
      description: "A visually stunning replica of Netflix web app. Features movie browsing, TMDB API integration for real-time data, and responsive design.",
      tags: ["React", "TMDB API", "CSS3", "Firebase"],
      link: "https://github.com/ShivamUpadhyay20271/Netflix", 
      role: "Frontend"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Academic Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-header">
                <h3>{project.title}</h3>
                <span className="subtitle">{project.subtitle}</span>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <div className="card-footer">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-sm">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
