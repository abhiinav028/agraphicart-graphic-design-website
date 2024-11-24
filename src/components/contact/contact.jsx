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
          form.current.reset(); // Clear the form fields
          setTimeout(() => setSuccessMessage(""), 1000); // Clear success message after 3 seconds
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
          online mode:chat on whatapp
          <br />
          {/* 67 Wisteria Way Croydon South VIC 3136 AU */}
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
          sat-sun from 8am to 5pm
          <br />
          (+91) 93228 93520
        </p>
        <div className="social-media">
          <a href="#facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#https://www.behance.net/abhinavv10">
            <i className="bi bi-behance"></i>
          </a>
          <a href="https://www.instagram.com/agraphicart02/">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://x.com/abhiinav_28">
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <input type="text" name="company" placeholder="Company Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <textarea
            name="message"
            placeholder="Tell us what we can help you with"
            required
          ></textarea>
          <div className="form-checkbox">
            <input type="checkbox" id="privacyPolicy" required />
            <label htmlFor="privacyPolicy">
              I d like to receive more information about the company. I
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
