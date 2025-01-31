import React from "react";
import Navbar from "../components/Navbar";
import "../styles/login.css";


const Login = () => {
  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-box">

          <div className="login-form">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
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
