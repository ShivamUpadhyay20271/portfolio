import './About.css';

const About = () => {
  const education = [
    {
      school: "School of Information Technology, RGPV, Bhopal",
      degree: "B.Tech - Computer Science Engineering (Data Science)",
      year: "2022 - 2026",
      grade: "7.12 CGPA"
    },
    {
      school: "Venkat-1 Govt. Excellence H.S. School, Satna (M.P.)",
      degree: "12th Grade (MP Board)",
      year: "2021 - 2022",
      grade: "79.8%"
    },
    {
      school: "Bhartiyam Vidhyapeeth School, Devendra Nagar (M.P.)",
      degree: "10th Grade (MP Board)",
      year: "2019 - 2020",
      grade: "90.67%"
    }
  ];

  const certifications = [
    {
      title: "Java Programming (NPTEL)",
      issuer: "IIT Kharagpur",
      date: "July 2025 - Oct 2025",
      desc: "Elite certification (Top 5%) with 64% score. Covered Core/Advanced Java, OOP, Multithreading."
    },
    {
      title: "Virtual Internship in Cybersecurity",
      issuer: "Cisco AICTE",
      date: "May 2024 - July 2024",
      desc: "Hands-on experience in network security, packet tracer labs, and threat identification."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About & Education</h2>
        
        <div className="about-grid">
          {/* Education Column */}
          <div className="about-col">
            <h3 className="col-title">🎓 Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.school}</h4>
                    <p className="degree">{edu.degree}</p>
                    <div className="meta">
                      <span className="year">{edu.year}</span>
                      <span className="grade">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements Column */}
          <div className="about-col">
            <h3 className="col-title">📜 Certifications & Achievements</h3>
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <h4>{cert.title}</h4>
                  <p className="issuer">{cert.issuer} | {cert.date}</p>
                  <p className="cert-desc">{cert.desc}</p>
                </div>
              ))}
              
              <div className="cert-card responsibility">
                <h4>🏆 Position of Responsibility</h4>
                <p className="issuer">IEEE RGPV Student Chapter</p>
                <p className="cert-desc">Event Co-Ordinator (Apr 2024 - Dec 2024). Managed logistics and participant registrations.</p>
              </div>

              <div className="cert-card achievement">
                <h4>⭐ Achievements</h4>
                <ul className="achievements-list">
                  <li>Class Representative (CR)</li>
                  <li>Cleared JEE Mains & Qualified for JEE Advanced</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
