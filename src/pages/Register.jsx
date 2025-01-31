import React from "react";
import "../styles/register.css";

const Register = () => {
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

          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email ID" required />
            <input type="text" placeholder="Phone No" required />
            <input type="password" placeholder="Password" required />
            
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I accept terms and conditions & privacy policy</label>
            </div>

            <button type="submit" className="login-btn">LOGIN</button>
          </form>

          <p>Login with social media</p>
          <div className="social-buttons">
            <button className="facebook">Facebook</button>
            <button className="twitter">Twitter</button>
            <button className="google">Google+</button>
          </div>
        </div>
      </div>
      <footer/>
    </div>
  );
};

export default Register;
