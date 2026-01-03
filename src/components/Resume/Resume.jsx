import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        <div className="resume-content">
          <div className="resume-preview-container">
            <img src="/resume.jpg" alt="Shivam Upadhyay Resume" className="resume-preview" />
          </div>
          <div className="resume-actions">
            <a href="/resume.jpg" target="_blank" rel="noopener noreferrer" className="btn btn-outline resume-btn">
              View Full Size
            </a>
            <a href="/resume.jpg" download="Shivam_Upadhyay_Resume.jpg" className="btn resume-btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
