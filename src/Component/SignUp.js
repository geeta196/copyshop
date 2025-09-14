import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // page refresh टाळण्यासाठी
    alert("Account created successfully ✅");
    navigate("/"); // Login page ला navigate
  };

  return (
    <div className="signUpcontainer">
      <div className="signUpbox">
        <h1 className="signUp-title">☕ Create Coffee Account</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit" className="signUpbtn">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account? <span style={{cursor:"pointer", color:"#ffb74d"}} onClick={()=>navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
