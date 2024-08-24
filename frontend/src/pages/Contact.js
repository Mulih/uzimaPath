import React from 'react';


const Contact = () => {
  return (
    <section className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with us to learn more about UzimaPath or to report any issues.</p>

      <form action="#" method="post" className='contact-form'>
        <label htmlFor="name" className='form-label'>Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required className='text-area'></textarea>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="social-links">
        <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://twitter.com/UzimaPath" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/UzimaPath" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;