// src/Component/Welcome.js
import React from "react";
import coffeeBg from "../asset/coffee-bg.jpg"; // background image

function Welcome() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${coffeeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>
        Welcome to Coffee Heaven ☕
      </h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
        Experience the best coffee in town. Freshly brewed, full of aroma, and made with love.
      </p>
      <button
        style={{
          marginTop: "30px",
          padding: "12px 30px",
          fontSize: "1.2rem",
          backgroundColor: "#6f4e37",
          border: "none",
          borderRadius: "8px",
          color: "#fff",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#55332b")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#6f4e37")}
      >
        Explore Menu
      </button>
    </div>
  );
}

export default Welcome;
