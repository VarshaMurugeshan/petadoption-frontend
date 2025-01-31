import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../styles/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const requestBody = { name, email, password };
    console.log("Sending request:", requestBody);
    try {
      const response = await fetch("https://petadoption-backend-eoye.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody), 
      });

      const data = await response.json();
      console.log("Response received:", data);
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000); 

    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-image">
          <h1>Hello <br /> World.</h1>
          <p>Like to be a part of us!</p>
        </div>

        <div className="register-form">
          <h2>Register</h2>
          <p>Don't have an account? <a href="#">Create your account</a>, it takes less than a minute</p>

          <form onSubmit={handleRegister}>
            <input
  type="text"
  placeholder="Name"
  required
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<input
  type="email"
  placeholder="Email ID"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<input
  type="password"
  placeholder="Password"
  required
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I accept terms and conditions & privacy policy</label>
            </div>

            <button type="submit" className="login-btn">REGISTER</button>
          </form>

          <p>Login with social media</p>
          <div className="social-buttons">
            <button className="facebook">Facebook</button>
            <button className="twitter">Twitter</button>
            <button className="google">Google</button>
          </div>
        </div>
      </div>
      <footer/>
    </div>
  );
};

export default Register;
