import React from "react";
import arrow from '../assets/arrow.svg';
import "../styles/titles.css";
export const Titles = () => {
  return (
    <div className="titles-cnt">
      <p>Soy <strong style={{color: 'purple'}}>Francisco Pedroza.</strong></p>
      <h2>Creador de videos con inteligencia artificial</h2>
      <p>
        La IA permite llevar tus ideas a la realidad, brindandote la libertad de experimentar y expresar tu creatividad sin limite humano alguno.
        Contenido altamente personalizable. Atractivo. Sin limites.
      </p>
      <a href="">Ver más <img src={arrow} alt="arrow" /></a>
    </div>
  );
};
