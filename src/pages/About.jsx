import { motion } from "framer-motion";
import React from "react";
import { Cards } from "../components/Cards";
import "../styles/about.css";
export const About = () => {
  return (
    <React.Fragment>
      <motion.div className="about-cards-cnt">
        <Cards></Cards>
      </motion.div>
      <div className="about-cnt" id="about">
        <motion.div
          className="about-title"
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p style={{ marginBottom: 0 }}>
            Por qué <strong style={{ color: "purple" }}>IA</strong>
          </p>
          <h2>
            La inteligencia artificial supera los límites humanos en creatividad
            al analizar grandes cantidades de datos para generar ideas
            innovadoras y creativas de manera rápida y eficiente, Permitiendo
            experimentar con una amplia variedad de enfoques creativos
          </h2>
        </motion.div>
        <motion.div
          className="about-description"
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="about-card">
            <h3>Eficiencia y Escalabilidad</h3>
            <p>
              La IA puede automatizar tareas tediosas y repetitivas en la
              producción de videos, como la edición básica, la corrección de
              color y la optimización del audio. Esto ahorra tiempo y esfuerzo a
              los creadores, permitiéndoles enfocarse en aspectos más creativos
              de la producción.
            </p>
          </div>
          <hr />
          <div className="about-card">
            <h3>Creatividad y Personalización</h3>
            <p>
              La IA puede analizar datos sobre la audiencia y crear videos
              personalizados para diferentes segmentos, lo que aumenta la
              relevancia y el impacto del contenido. Además algunas herramientas
              de IA pueden generar ideas creativas para guiones, efectos
              visuales y música, lo que puede inspirar a los creadores a
              experimentar con nuevas formas de contar historias y expresar
              ideas.
            </p>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};
