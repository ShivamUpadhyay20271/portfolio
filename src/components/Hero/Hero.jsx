import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Shivam Upadhyay</h1>
          <h2 className="role">Full Stack Developer</h2>
          <p className="description">
            A passionate B.Tech student specializing in Data Science. 
            I build scalable web applications and solve real-world problems with code.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
          <div className="hero-visual">
            <div className="circle-blur"></div>
            <img 
              src="/src/assets/profile.jpg" 
              alt="Shivam Upadhyay" 
              className="profile-img"
            />
          </div>
      </div>
    </section>
  );
};

export default Hero;
