import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="offers">
      <div class="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div class="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};
