import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-image">
            <img src="/images/contact.jpeg" alt="Adopt a Pet" />
          </div>

          <div className="contact-form">
            <h1>Contact Us</h1>
            <div className="form-details">
              <form>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />

                <label>E-mail</label>
                <input type="email" placeholder="Enter your email" required />

                <label>Message</label>
                <textarea placeholder="Write your message" required></textarea>

                <button type="submit">Contact Us</button>
              </form>

              <div className="contact-info">
                <h3>Contact</h3>
                <p>adopt@petcenter.com</p>

                <h3>Phone</h3>
                <p>1123 4567 8765</p>

                <div className="social-icons playful-icons">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="importance-adopting">
          <h2>Why Adopting a Pet is Important</h2>

          <div className="importance-row">
            <div className="importance-text">
              <h3>Save Lives</h3>
              <p>Millions of pets are abandoned every year, leaving shelters overcrowded and under-resourced. Adoption helps reduce this burden and provides these animals with a second chance at a happy life. Many shelter pets are loving, loyal, and just waiting for a caring home. By adopting, you not only save a life but also open space for another pet in need. It’s a compassionate and responsible way to find a furry companion. Give a homeless pet the love and care they deserve—adopt today!</p>
            </div>
            <div className="importance-image">
              <img src="/images/impadopt.jpg" alt="Saving a pet's life" />
            </div>
          </div>

          <div className="importance-row reverse">
            <div className="importance-image">
              <img src="/images/impadopt2.webp" alt="Ending animal cruelty" />
            </div>
            <div className="importance-text">
              <h3>End Animal Cruelty</h3>
              <p>Adopting a pet discourages unethical breeding and promotes responsible pet ownership. Many commercial breeders and puppy mills prioritize profit over animal welfare, leading to poor living conditions and health issues. By choosing adoption, you take a stand against these inhumane practices and support ethical treatment of animals. Shelters provide proper care, vaccinations, and rehabilitation for pets in need. Adoption ensures that every pet finds a loving home rather than contributing to overpopulation. Make a compassionate choice—adopt, don’t shop!</p>
            </div>
          </div>

          <div className="importance-row">
            <div className="importance-text">
              <h3>Gain a Loving Companion</h3>
              <p>Pets bring joy, companionship, and emotional support to their owners, making life more fulfilling.</p>
            </div>
            <div className="importance-image">
              <img src="/images/impadopt3.jpg" alt="Happy pet and owner" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
