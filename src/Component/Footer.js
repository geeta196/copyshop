import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="coffee-footer">
      <div className="footer-container">
        {/* Brand / About */}
        <div className="footer-about">
          <h2>Coffee Heaven ☕</h2>
          <p>
            Freshly brewed happiness in every cup. Visit us and experience the
            real taste of coffee!
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/Order">Order</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/About">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
         <h3>📍 Address</h3>
          <p>123 Coffee Street, Nashik, India</p>

          <h3>📞 Phone</h3>
          <p>+91 9876543210</p>

          <h3>✉️ Email</h3>
          <p>coffeeshop@example.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Coffee Heaven. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
