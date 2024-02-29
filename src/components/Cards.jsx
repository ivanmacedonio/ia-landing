import React from "react";
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";
import "../styles/cards.css";

export const Cards = () => {
  return (
    <div className="cards-cnt">
      <img src={card1} alt="" />
      <img src={card2} alt="" />
      <img src={card3} alt="" />
    </div>
  );
};
