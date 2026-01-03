import './Skills.css';

const Skills = () => {
  const skillsData = [
    { title: "Languages", items: ["Java", "JavaScript", "Python", "C++"] },
    { title: "Frontend", items: ["React", "HTML/CSS", "Tailwind CSS"] },
    { title: "Backend", items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB"] },
    { title: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
    { title: "Core", items: ["DSA", "OOP", "DBMS", "OS", "CN"] },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.items.map((item, idx) => (
                  <span key={idx} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
