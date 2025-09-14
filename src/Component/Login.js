import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 navigate import
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // page refresh टाळण्यासाठी
    alert("Login Successfully ✅"); // success alert
    navigate("/Home"); // 👈 Home page ला redirect
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">☕ Coffee Shop Login</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
