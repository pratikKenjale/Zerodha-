import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-header">
        <h1>Support Portal</h1>
        <button className="my-tickets-btn">My tickets</button>
      </div>

      <div className="hero-search">
        <span className="search-icon"></span>
        <input
          type="text"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </div>
    </div>
  );
};

export default Hero;
