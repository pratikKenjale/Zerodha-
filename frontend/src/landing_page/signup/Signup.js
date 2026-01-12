import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">
      {/* HERO SECTION */}
      <section className="signup-hero">
        <h1>Open a free demat and trading account online</h1>
        <p className="hero-subtitle">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>

        <div className="hero-container">
          {/* LEFT IMAGE */}
          <div className="hero-image">
            <img src="media/signup.png" alt="Zerodha Platform" />
          </div>

          {/* RIGHT SIGNUP BOX */}
          <div className="signup-box">
            <h2>Signup now</h2>
            <p className="subtext">Or track your existing application</p>

            <div className="mobile-input">
              <span className="country-code">🇮🇳 +91</span>
              <input type="text" placeholder="Enter your mobile number" />
            </div>

            <button className="otp-btn">Get OTP</button>

            <p className="terms">
              By proceeding, you agree to the Zerodha{" "}
              <a href="/">terms</a> & <a href="/">privacy policy</a>
            </p>

            <p className="nri">
              Looking to open NRI account? <a href="/">Click here</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
