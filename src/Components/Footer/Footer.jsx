import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul class="footer-links">
        <li1>Company</li1>
        <li2>Products</li2>
        <li3>Offices</li3>
        <li4>About</li4>
        <li5>Contact</li5>
      </ul>
      <div class="foorer-social-icon">
        <div class="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div class="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div class="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div class="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};
