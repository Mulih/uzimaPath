import React from 'react';


const About = () => {
  return (
    <section className="about-page">
      <h1>Our Story</h1>
      <p>Welcome to UzimaPath, your ultimate fitness companion!</p>

      <div className="mission-statement">
        <h2>Our Mission</h2>
        <p>Empowering individuals to achieve their fitness goals through innovative technology and personalized support.</p>
      </div>

      <div className="team-members">
        <h2>Meet Our Team</h2>
        <ul>
          <li>
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Co-founder & CEO</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO & Co-founder</p>
          </li>
          <li>
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Bob Johnson</h3>
            <p>Product Manager</p>
          </li>
        </ul>
      </div>

      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          <p>"UzimaPath has helped me reach my fitness goals faster than ever before!"</p>
          <cite>— Sarah K., Happy User</cite>
        </blockquote>
      </div>

      <footer className="about-footer">
        <p>&copy; 2023 UzimaPath. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default About;