import React from "react";
import "./About.css";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <Navbar/>
    
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to <span>CoffeeHub</span>, your cozy corner for freshly brewed
          coffee and delicious treats.  
          We believe every cup tells a story — roasted with love, served with
          warmth, and enjoyed with happiness.
        </p>
        <p>
          From carefully selected beans to skilled baristas, our mission is to
          make your coffee experience unforgettable.  
          Whether you're here for a quick espresso or a long conversation over
          cappuccino, CoffeeHub is your place to relax.
        </p>
        <button className="learn-btn">Learn More</button>
      </div>
      

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Coffee shop"
        />
      </div>
    </section>
    </div>
  );
}

export default About;