// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(""); // State for the success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g5ihedw", 
        "template_twlgx15", 
        form.current, 
        "EJVjVG1IvvYXvUbF5" 
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccessMessage("The message was sent successfully!"); // Set success message
          setTimeout(() => setSuccessMessage(""), 2000); // Clear message after 3 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Get in touch</h2>
        <p>
          <strong>Visit us</strong>
          <br />
          Come say hello at our office HQ.
          <br />
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
          <a href="#facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#linkedin">
            <i className="bi bi-behance"></i>
          </a>
          <a href="#instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
          </div>
          <input type="text" name="company" placeholder="Company Name" />
          <input type="email" name="user_email" placeholder="Email" />
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

          {/* Success Message Above Submit Button */}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
