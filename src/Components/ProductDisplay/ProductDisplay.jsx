import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

export const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div class="productdisplay">
      <div class="productdisplay-left">
        <div class="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div class="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div class="productdisplay-right">
        <h2>{product.name}</h2>
        <div class="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div class="productdisplay-right-prices">
          <div class="productdisplay-right-price-old">${product.old_price}</div>
          <div class="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div class="productdisplay-right-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's. 
        </div>
        <div class="productdisplay-right-size">
          <h1>Select size</h1>
          <div class="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button>ADD TO CART</button>
          <p class="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top </p>
          <p class="productdisplay-right-category"><span>Tags :</span>Modern, Latest </p>

        </div>
      </div>
    </div>
  );
};

//time end 2.04