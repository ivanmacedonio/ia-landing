import { motion } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";
import arrow from "../assets/arrow.svg";
import "../styles/portfolio.css";

export const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="portfolio-cnt">
        <div className="portfolio-col">
          <motion.div
            className="portfolio-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="player-wrapper">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2Ffinal5.mp4?alt=media&token=796749d8-8c2a-4798-8caf-c4ee274522d7"
                className="react-player"
                controls
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
            <p>
              Crea <strong>videos musicales</strong> y lleva tu creatividad al
              siguiente nivel. Plasma tus ideas en videos, combinalas y da lugar
              a increíbles producciones audiovisuales
            </p>
            <a href="https://www.behance.net/gallery/161307029/Inteligencia-artificial">
              Ver más <img src={arrow} alt="" />
            </a>
          </motion.div>
          <motion.div
            className="portfolio-card"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="player-wrapper">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2FEspecies%20(1).mp4?alt=media&token=0f87db5a-7100-4ee0-810f-405a4838a5c8"
                className="react-player"
                controls
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
            <p>
              Experimenta la magia de la IA mientras transforma tus ideas en
              videos sorprendentes. Desde la corrección automática de color
              hasta la mejora de la estabilidad de la imagen, haz combinaciones
              de escenarios inimaginables
            </p>
            <a href="https://www.behance.net/gallery/161307029/Inteligencia-artificial">
              Ver más <img src={arrow} alt="" />
            </a>
          </motion.div>
          <motion.div
            className="portfolio-card"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="player-wrapper">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2FMagia%20-%20final%20con%20placas.mp4?alt=media&token=9af868f8-8612-489c-b614-de6f81a130b7"
                className="react-player"
                controls
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
            <p>Producciones de calidad Élite</p>
            <a href="https://www.behance.net/gallery/161307029/Inteligencia-artificial">
              Ver más <img src={arrow} alt="" />
            </a>
          </motion.div>
        </div>
        <div className="portfolio-col">
          <div className="portfolio-title">
            <p>Otros proyectos</p>
            <h1>
              Inteligencia artificial{" "}
              <strong>en cada aspecto de la vida</strong>
            </h1>
          </div>
          <motion.div
            className="portfolio-card"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="player-wrapper">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2Fig.mp4?alt=media&token=b6179e8a-7465-4a99-a95c-af062c40eb26"
                className="react-player"
                controls
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
            <p>Sin límites.</p>
            <a href="https://www.behance.net/gallery/161307029/Inteligencia-artificial">
              Ver más
              <img src={arrow} alt="" />
            </a>
          </motion.div>
          <motion.div
            className="portfolio-card"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="player-wrapper">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2Fsubt%20espa%C3%B1ol.mp4?alt=media&token=6742f61b-c447-4154-ae5c-5d49d0ce7461"
                className="react-player"
                controls
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
            <p>
              Además de videos con la mejor calidad, la IA tiene la ventaja de
              automatizar tareas repetitivas de la mejor forma. Genera
              subtítulos automáticamente para tus proyectos con tan solo un
              prompt
            </p>
            <a href="https://www.behance.net/gallery/161307029/Inteligencia-artificial">
              Ver más <img src={arrow} alt="" />
            </a>
          </motion.div>
          <motion.div
            className="portfolio-card"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="player-wrapper">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2Fv3%20grande.mp4?alt=media&token=c7968128-b5b5-4ee3-9713-32eada223187"
                className="react-player"
                controls
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
            <p>
              Exprime tu creatividad al máximo y plasma tus ideas en un
              increíble videoclip
            </p>
            <a href="https://www.behance.net/gallery/161307029/Inteligencia-artificial">
              Ver más <img src={arrow} alt="" />
            </a>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};
