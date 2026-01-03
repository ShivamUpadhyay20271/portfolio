import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <div className="contact-details">
            <p><strong>Email:</strong> <a href="mailto:shivamupadhyay20271@gmail.com">shivamupadhyay20271@gmail.com</a></p>
            <p><strong>Mobile:</strong> <a href="tel:+918269515321">+91 8269515321</a></p>
          </div>
          <a href="mailto:shivamupadhyay20271@gmail.com" className="btn btn-large">
            Say Hello
          </a>
          
          <div className="social-links">
            <a href="https://github.com/ShivamUpadhyay20271" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {/* Added based on phone number provided */}
            <a href="tel:8269515321">Phone</a> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
