import React, { useState } from "react";
//import Navbar from "../components/Navbar";
import Footer from "./Footer";
import "../styles/adopt.css";

const pets = [
  { id: 1, name: "Bella", type: "Dog", description: "A friendly Labrador looking for a home.", image: "/images/bella.jpg" },
  { id: 2, name: "Max", type: "Dog", description: "A playful Beagle full of energy.", image: "/images/maxx.jpg" },
  { id: 3, name: "Charlie", type: "Cat", description: "A sweet cat that loves cuddles.", image: "/images/charlie.jpg" },
  { id: 4, name: "Luna", type: "Cat", description: "A curious kitten who loves exploring.", image: "/images/luna.webp" },
  { id: 5, name: "Rocky", type: "Dog", description: "A strong yet gentle German Shepherd.", image: "/images/rocky.jpg" },
  { id: 6, name: "Daisy", type: "Rabbit", description: "A fluffy rabbit who enjoys carrots.", image: "/images/daisy.jpg" },
  { id: 7, name: "Simba", type: "Cat", description: "A majestic tabby with a playful side.", image: "/images/simba.jpg" },
  { id: 8, name: "Buddy", type: "Dog", description: "A Golden Retriever that loves to play fetch.", image: "/images/buddy.jpg" },
  { id: 9, name: "Coco", type: "Rabbit", description: "A tiny bunny with lots of energy.", image: "/images/coco.jpg" },
  { id: 10, name: "Milo", type: "Dog", description: "An adorable puppy looking for love.", image: "/images/milo.jpeg" },
  { id: 11, name: "Kiwi", type: "Parrot", description: "A talking parrot that loves company.", image: "/images/kiwi.JPG" },
  { id: 12, name: "Shelly", type: "Turtle", description: "A calm and peaceful turtle looking for a pond.", image: "/images/shelly.jpeg" }
];

const Adopt = () => {
  const [search, setSearch] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const adoptionData = {
      petName: formData.petName,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
  
    console.log(adoptionData);  
  
    fetch("https://petadoption-backend-eoye.onrender.com/api/adopt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adoptionData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(`Adoption request for ${formData.petName} sent!`);
          setFormData({ petName: "", name: "", email: "", message: "" });
        } else {
          alert("Error sending adoption request.");
        }
      })
      .catch((error) => {
        console.error("Error submitting adoption request:", error);
        alert("Something went wrong.");
      });
  };
  
  return (
    <div className="adopt-container">
      <h1>Adopt a Pet</h1>

      <input
        type="text"
        placeholder="Search for a pet..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="pet-list">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>{pet.description}</p>
            <button onClick={() => handleAdoptClick(pet)}>Adopt</button>
          </div>
        ))}
      </div>

      {selectedPet && (
        <div className="adoption-form">
          <h2>Adopt {selectedPet.name}</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Why do you want to adopt?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <button type="submit">Submit Request</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Adopt;
