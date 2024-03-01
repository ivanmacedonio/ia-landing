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
                url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2FAs%C3%AD%20ve%20la%20Crisis%20Clim%C3%A1tica%20una%20Inteligencia%20Artificial.mp4?alt=media&token=9f991a64-26c3-4986-a5ce-361e5fd53724"
                className="react-player"
                controls
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
            <p>
              Lleva tu creatividad al siguiente nivel y plasma tus ideas en
              videos. Combina ideas y da lugar a increíbles producciones
              audiovisuales
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
                url="https://firebasestorage.googleapis.com/v0/b/ecommerce-fenix.appspot.com/o/files%2FGoal%20Higuain%20-%20Edit%205%20AI%20marble%20goal%20op%202.mp4?alt=media&token=89ca3f69-0f15-4242-8942-227873c89f0f"
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
        </div>
        <div className="portfolio-col">
          <div className="portfolio-title">
            <p>Algunos de mis proyectos</p>
            <h1>Inteligencia artificial en cada aspecto de la vida</h1>
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
        </div>
      </div>
      <div className="portfolio-link">
        <a href="https://www.behance.net/gallery/161307029/Inteligencia-artificial">Ver portfolio</a>
      </div>
    </React.Fragment>
  );
};
