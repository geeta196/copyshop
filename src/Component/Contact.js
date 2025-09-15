import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";

function ContactUs() {
  return (
    <div>
      <Navbar/>
   
    <div className="contact-container">
      <h1 className="contact-title">☕ Contact Our Coffee Shop</h1>
      <p className="contact-subtitle">
        We'd love to hear from you! Whether it's feedback, questions, or just a hello.
      </p>

      <div className="contact-content">
        {/* Left Side: Info */}
        <div className="contact-info">
          <h3>📍 Address</h3>
          <p>123 Coffee Street, Nashik, India</p>

          <h3>📞 Phone</h3>
          <p>+91 9876543210</p>

          <h3>✉️ Email</h3>
          <p>coffeeshop@nexonica.com</p>

        </div>

        {/* Right Side: Form */}
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
     </div>
  );
}

export default ContactUs;
