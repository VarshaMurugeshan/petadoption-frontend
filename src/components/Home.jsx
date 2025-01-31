import React from "react";
import Navbar from "../components/Navbar";
import "./../styles/home.css";
import petImage1 from "/images/charlie.jpg"; 
import petImage2 from "/images/bella.jpg"; 
import petImage3 from "/images/maxx.jpg";
import adoptStep1 from "/images/adoptimg.jpg"; 
import adoptStep2 from "/images/adopt.jpg"; 
import adoptStep3 from "/images/brown.webp"

const Home = () => {
  return (
    <div className="home-container">

       <main className="main-content">
        <section className="hero">
          <img src={petImage1} alt="Hero Background" className="hero-background" />
          <div className="hero-content">
            <h1>Make A Brighter Future For Your Pet</h1>
            <p>Find a loving home for a furry friend in need.</p>
          </div>
        </section> 

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>About Pet Adoption Center</h2>
            <p>
              We connect loving pets with caring families. Our mission is to
              provide abandoned and rescued animals with a second chance at a
              happy life. Adopt a pet today and make a difference!
            </p>
            <p>At the Pet Adoption Center, we are committed to giving homeless pets a second chance at life. Our mission is to match loving families with pets in need of a home. Every pet deserves to be cared for and loved.</p>
          </div>
          <div className="about-image">
            <img src="/images/about.jpg" alt="Happy pet and owner" />
          </div>
        </div>
      </section>

        <section className="adopt-section">
          <h2>How to Adopt a Pet</h2>
          <p>Adopting a pet is a simple process. Here's how you can get started:</p>

          <div className="adopt-container">
            <div className="adopt-step">
              <img src={adoptStep1} alt="Step 1" />
              <div className="adopt-text">
                <h3>Step 1: Browse Available Pets</h3>
                <p>Explore our list of available pets and find the perfect companion for your home.</p>
              </div>
            </div>

            <div className="adopt-step">
              <img src={adoptStep2} alt="Step 2" />
              <div className="adopt-text">
                <h3>Step 2: Fill Out an Adoption Form</h3>
                <p>Complete the adoption application form to help us understand your preferences.</p>
              </div>
            </div>

            <div className="adopt-step">
              <img src={adoptStep3} alt="Step 3" />
              <div className="adopt-text">
                <h3>Step 3: Meet & Adopt</h3>
                <p>Schedule a meeting with your chosen pet, and if it's a match, bring them home!</p>
              </div>
            </div>
          </div>
        </section>


        <section className="pets-section">
          <h2>Available Pets for Adoption</h2>
          <div className="pets-gallery">
            <div className="pet-card">
              <img src={petImage1} alt="Pet 1" />
              <p>Meet Bella! A playful Labrador Retriever.</p>
            </div>
            <div className="pet-card">
              <img src={petImage2} alt="Pet 2" />
              <p>Meet Max! A friendly and loving cat.</p>
            </div>
            <div className="pet-card">
              <img src={petImage3} alt="Pet 3" />
              <p>Meet Charlie! An energetic Golden Retriever.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Pet Adoption Center. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
