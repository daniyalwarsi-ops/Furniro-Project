import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="logo">
         <span><img src="/Meubel House_Logos-05.png" alt="" /></span> 
          <h1>Furniro</h1>
        </div>

        <div>
          <ul className="list">
            <li><a href="">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a> </li>
          </ul>
        </div>

        <div className="img">
          <img src="/mdi_account-alert-outline.png" alt="" />
          <img src="akar-icons_search.png" alt="" />
          <img src="akar-icons_heart.png" alt="" />
          <img src="ant-design_shopping-cart-outlined.png" alt="" />
        </div>
      </div>
    </div>
  );
}
