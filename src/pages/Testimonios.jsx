import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import alert from "../assets/alert.svg";
import bure from "../assets/bureau.jpg";
import cros from "../assets/corss.jpg";
import green from "../assets/green.png";
import juve from "../assets/j.webp";
import scroll from "../assets/scroll.svg";
import stars from "../assets/stars.svg";
import data from "../data";
import "../styles/testimonios.css";
export const Testimonios = () => {
  const [filterName, setFilterName] = useState("Juventus FC");
  const [dataState, setData] = useState([]);

  function setName(name) {
    setFilterName(name);
  }

  useEffect(() => {
    setData(data.filter((item) => item.name === filterName));
  }, [filterName]);
  return (
    <React.Fragment>
      <div className="testimonios-title">
        <p>
          <strong>Marcas</strong> que confiaron en mi
        </p>
        <h2>
          Lleva tus proyectos al siguiente nivel usando la poderosisima
          inteligencia artificial
        </h2>
      </div>
      <div className="clickable">
        <motion.img
          src={juve}
          alt=""
          whileHover={{ y: -15 }}
          onClick={() => setName("Juventus FC")}
        />
        <motion.img
          src={green}
          alt=""
          whileHover={{ y: -15 }}
          onClick={() => setName("Greenpeace")}
        />
        <motion.img
          src={bure}
          alt=""
          whileHover={{ y: -15 }}
          onClick={() => setName("Bureau Creativo")}
        />
        <motion.img
          src={cros}
          alt=""
          whileHover={{ y: -15 }}
          onClick={() => setName("Crossover")}
        />
      </div>
      <div className="testimonios-cnt">
        {filterName === "Juventus FC" && (
          <div className="estadio">
            <div className="player-wrapper-estadio">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2FCopy%20of%20JUVENTUS%20EMPOLI%2027-01-2024%20INTRO%2001.mp4?alt=media&token=2c0ea99f-3e27-469a-af90-8908258c24e1"
                className="react-player"
                controls
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
            <label>
              <img src={alert} alt="" />
              <h1> Video presentado en el estadio</h1>
            </label>
          </div>
        )}
        {dataState.map((item) => (
          <motion.div
            className="testimonios-card"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="stars">
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
            </div>
            <div className="player-wrapper">
              <ReactPlayer
                url={item.url}
                className="react-player"
                controls
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
            <hr />
            <div className="user">
              <img src={item.image} alt="" />
              <label>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </label>
            </div>
          </motion.div>
        ))}
      </div>
      <img src={scroll} alt="" id="scroll" />
    </React.Fragment>
  );
};
