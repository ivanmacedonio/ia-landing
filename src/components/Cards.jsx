import { motion } from "framer-motion";
import React from "react";
import card1 from "../assets/ig.mp4";
import card2 from "../assets/logo.mp4";
import "../styles/cards.css";
export const Cards = () => {
  return (
    <motion.div
      className="cards-cnt"
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <video autoPlay loop muted>
        <source src={card1} type="video/mp4" />
      </video>
      <video autoPlay loop muted id="logo-video">
        <source src={card2} type="video/mp4" />
      </video>
      <video autoPlay loop muted>
        <source src={card1} type="video/mp4" />
      </video>
    </motion.div>
  );
};
