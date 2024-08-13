import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div class="newsletter">
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};