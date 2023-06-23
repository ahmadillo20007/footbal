import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero() {
  return (
    <div className="container hero-wrapper">
      <div className="hero-first__wrapper">
        <h4>New Shirt from ROMA FC</h4>
        <Link>Buy Now</Link>
      </div>
      <div>
        <div className="hero-secund__wrapper">
          <h4>New Cap from ROMA FC</h4>
          <Link>Buy Now</Link>
        </div>
        <div className="hero-third-and-fourth_wrapper">
          <div className="hero-third__wrapper">
            <h4>New accessories</h4>
            <Link>Buy Now</Link>
          </div>
          <div className="hero-fourth__wrapper">
            <h4>New Bag</h4>
            <Link>Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;