import { motion } from "framer-motion";
import React from "react";
import arrow from "../assets/arrow.svg";
import "../styles/titles.css";

export const Titles = () => {
  return (
    <motion.div
      className="titles-cnt"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p>
        Soy <strong style={{ color: "purple" }}>Francisco Pedroza.</strong>
      </p>
      <h2>Creador de videos con inteligencia artificial</h2>
      <p>
        La IA permite llevar tus ideas a la realidad, brindándote la libertad de
        experimentar y expresar tu creatividad sin límite humano alguno.
        Contenido altamente personalizable. Atractivo. Sin límites.
      </p>
      <a href="#about">
        Ver más <img src={arrow} alt="arrow" />
      </a>
    </motion.div>
  );
};
