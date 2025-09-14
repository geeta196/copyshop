import React from "react";
import { useNavigate } from "react-router-dom";

import "./Coffee.css";
import Navbar from "./Navbar";
function Home() {
  const navigate = useNavigate();

  return (
    <div>
          <Navbar/>
    <section className="hero" id="home">
    
      {/* Left Side Content */}
      <div className="hero-content">
        <h1>
          Discover the <span>Best Coffee in Town</span> ☕
        </h1>
        <p>
          Welcome to <b>CoffeeHub</b>, where every sip tells a story. 
          Freshly brewed, crafted with love, and served with warmth.
        </p>
        
      </div>

      {/* Right Side Image */}
      <div className="hero-image">
        <img 
          src="https://png.pngtree.com/png-clipart/20240810/original/pngtree-flying-cup-of-coffee-with-splash-and-png-image_15739217.png"
          alt="Coffee Cup"
        />
      </div>
    </section>
    </div>
  );
}

export default Home;