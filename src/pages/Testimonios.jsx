import { motion } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";
import bure from "../assets/bureau.jpg";
import cros from "../assets/corss.jpg";
import green from "../assets/green.png";
import juve from "../assets/juve.webp";
import stars from "../assets/stars.svg";
import "../styles/testimonios.css";
export const Testimonios = () => {
  return (
    <div className="testimonios-cnt">
      <div className="testimonios-col">
        <div className="testimonios-title">
          <p>
            <strong>Marcas</strong> que confiaron en mi
          </p>
          <h2>
            Lleva tu negocio al siguiente nivel usando la poderosisima
            inteligencia artificial
          </h2>
        </div>
      </div>
      <div className="testimonios-col">
        <motion.div
          className="testimonios-card"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2FGoal%20Higuain%20-%20Edit%205%20AI%20marble%20goal%20op%202.mp4?alt=media&token=89ca3f69-0f15-4242-8942-227873c89f0f"
              className="react-player"
              controls
              width="100%"
              height="100%"
            ></ReactPlayer>
          </div>
          <hr />
          <div className="user">
            <img src={juve} alt="" />
            <label>
              <h2>Juventus FC</h2>
              <p>Club de fútbol profesional</p>
            </label>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2FJuventus-Calendar2324-230705.mp4?alt=media&token=248d0976-bba9-40f9-801c-1ae09da2b998"
            className="react-player"
            controls
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
        <hr />
        <div className="user">
          <img src={juve} alt="" />
          <label>
            <h2>Juventus FC</h2>
            <p>Club de fútbol profesional</p>
          </label>
        </div>
      </motion.div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2FJVE-AI-JVEvsINTER-231124.mp4?alt=media&token=4c72155d-a5f9-4937-8ff0-35c7ea18d14b"
            className="react-player"
            controls
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
        <hr />
        <div className="user">
          <img src={juve} alt="" />
          <label>
            <h2>Juventus FC</h2>
            <p>Club de fútbol profesional</p>
          </label>
        </div>
      </motion.div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2FJVE-Hwen-231030b%20(1).mp4?alt=media&token=d5ced540-2c60-4216-8d80-da395b291e9d"
            className="react-player"
            controls
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
        <hr />
        <div className="user">
          <img src={juve} alt="" />
          <label>
            <h2>Juventus FC</h2>
            <p>Club de fútbol profesional</p>
          </label>
        </div>
      </motion.div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2FAs%C3%AD%20ve%20la%20Crisis%20Clim%C3%A1tica%20una%20Inteligencia%20Artificial.mp4?alt=media&token=9f991a64-26c3-4986-a5ce-361e5fd53724"
            className="react-player"
            controls
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
        <hr />
        <div className="user">
          <img src={green} alt="" />
          <label>
            <h2>Green Peace</h2>
            <p>Organización ambiental</p>
          </label>
        </div>
      </motion.div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2Ffinal%20con%20todo.mp4?alt=media&token=c7c195fa-3694-4ab3-9024-70136cba4902"
            className="react-player"
            controls
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
        <hr />
        <div className="user">
          <img src={bure} alt="" />
          <label>
            <h2>Bureau Creativo</h2>
            <p>Agencia local</p>
          </label>
        </div>
      </motion.div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2Fanime%20-%20copia.mp4?alt=media&token=15e75ce5-407d-4d56-987c-47f17ebca1d4"
            className="react-player"
            controls
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
        <hr />
        <div className="user">
          <img src={cros} alt="" />
          <label>
            <h2>Crossover</h2>
            <p>Programa de Vorterix</p>
          </label>
        </div>
      </motion.div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2Fdibujos%20-%20copia.mp4?alt=media&token=5cb56dc9-583d-4494-8066-29d42f0fdc74"
            className="react-player"
            controls
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
        <hr />
        <div className="user">
          <img src={cros} alt="" />
          <label>
            <h2>Crossover</h2>
            <p>Programa de Vorterix</p>
          </label>
        </div>
      </motion.div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2Fsimpsons%20-%20copia.mp4?alt=media&token=bd0efe8d-f8cd-4c15-8b2d-3c1de4ff6740"
            className="react-player"
            controls
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
        <hr />
        <div className="user">
          <img src={cros} alt="" />
          <label>
            <h2>Crossover</h2>
            <p>Programa de Vorterix</p>
          </label>
        </div>
      </motion.div>
      <motion.div
        className="testimonios-card"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2Fsdcambio%201.mp4?alt=media&token=4907a2cf-30b7-48f2-b4fb-e01426f28b19"
            className="react-player"
            controls
            width="100%"
            height="100%"
          ></ReactPlayer>
        </div>
        <hr />
        <div className="user">
          <img src={cros} alt="" />
          <label>
            <h2>Crossover</h2>
            <p>Programa de Vorterix</p>
          </label>
        </div>
      </motion.div>
    </div>
  );
};
