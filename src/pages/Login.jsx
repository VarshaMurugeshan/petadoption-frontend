import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import "../styles/login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Logging in with email:", email);
    console.log("Password:", password);
    try {
      const response = await fetch("https://petadoption-backend-eoye.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login response:", data);
      
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/"); 

    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-box">

          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
            <input
    type="email"
    placeholder="Email"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)} />
              <input
    type="password"
    placeholder="Password"
    required
    value={password}
    onChange={(e) => setPassword(e.target.value)}  />
              <button type="submit">Login</button>
            </form>
            <p className="register-link">
              Don't have an account? <a href="/register">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
