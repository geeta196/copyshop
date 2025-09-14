import React from "react";
import { Navigate, useNavigate } from "react-router-dom"; // navigation import
import "./Home.css";
import Navbar from "./Navbar";

function Home() {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/Menu"); // Order बटण क्लिक झाल्यावर Menu page ला redirect
  };

  return (
    <div>
      <Navbar/>
    <section className="home" id="home">
      
      <div className="home-content">
        <h1>Freshly Brewed Happiness ☕</h1>
        <p>
          Welcome to <span>CoffeeHub</span>, your cozy spot for delicious coffee,
          warm vibes, and delightful conversations.
        </p>
        <button className="explore-btn" onClick={goToMenu}>
          Order
        </button>
      </div>

      <div className="home-image">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Coffee Cup"
        />
      </div>
    </section>
    </div>
  );
}

export default Home;
