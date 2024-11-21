// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
  
      <div className="contact-info">
      <h2>Get in touch</h2>
        <p>
          <strong>Visit us</strong>
          <br />
          Come say hello at our office HQ. <br />
          67 Wisteria Way Croydon South VIC 3136 AU
        </p>
        <p>
          <strong>Chat to us</strong>
          <br />
          Our friendly team is here to help.
          <br />
          abhinavbirajdar28@gmail.com
        </p>
        <p>
          <strong>Call us</strong>
          <br />
          Mon-Fri from 8am to 5pm
          <br />
          (+995) 555-55-55-55
        </p>
        <div className="social-media">
          <a href="#facebook"><i className="bi bi-facebook"></i></a>
          <a href="#linkedin"><i className="bi bi-behance"></i></a>
          <a href="#instagram"><i className="bi bi-instagram"></i></a>
          <a href="#twitter"><i className="bi bi-twitter-x"></i></a>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
          </div>
          <input type="text" name="company" placeholder="Company Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <textarea
            name="message"
            placeholder="Tell us what we can help you with"
          ></textarea>
          <div className="form-checkbox">
            <input type="checkbox" id="privacyPolicy" />
            <label htmlFor="privacyPolicy">
              Id like to receive more information about the company. I
              understand and agree to the <a href="#privacy">Privacy Policy</a>.
            </label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
