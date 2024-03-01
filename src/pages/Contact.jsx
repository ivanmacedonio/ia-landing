import { motion } from "framer-motion";
import React from "react";
import cyber from "../assets/cyber.jpg";
import ig from "../assets/ig.svg";
import mail from "../assets/mail.svg";
import tk from "../assets/tk.svg";
import yt from "../assets/yt.svg";
import "../styles/contact.css";
export const Contact = () => {
  return (
    <div className="contact-cnt">
      <div className="contact-img">
        <img src={cyber} alt="" />
      </div>
      <div className="contact-icons">
        <p>¿Querés saber más?</p>
        <h1>Encuéntrame en las <strong>redes</strong></h1>
        <label className="contact-icons">
          <a href="https://www.youtube.com/channel/UCD8PJaeKUQe6fGMXEsONqIg">
            <motion.img src={yt} alt="" whileHover={{ y: -10 }} />
          </a>
          <a href="https://www.instagram.com/fp.edicion/">
            <motion.img src={ig} alt="" whileHover={{ y: -10 }} />
          </a>
          <a href="https://www.tiktok.com/@fp.edicion">
            <motion.img src={tk} alt="" whileHover={{ y: -10 }} />
          </a>
        </label>
        <label className="mail">
          <img src={mail} alt="" />
          <p>frc.pedroz@gmail.com</p>
        </label>
      </div>
    </div>
  );
};
